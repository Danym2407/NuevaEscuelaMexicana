from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import status
import jwt
from django.conf import settings
from .models import User
from .serializers import (
    UserSerializer, 
    UserRegisterSerializer, 
    LoginSerializer,
    generate_jwt_token
)

@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
    """Register a new user"""
    if request.method == 'POST':
        serializer = UserRegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response(
                {
                    'message': 'User registered successfully',
                    'user': UserSerializer(user).data
                },
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    """Login user and return JWT token"""
    if request.method == 'POST':
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            token = generate_jwt_token(user)
            return Response(
                {
                    'message': 'Login successful',
                    'token': token,
                    'user': UserSerializer(user).data
                },
                status=status.HTTP_200_OK
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def verify_jwt_token(token):
    """Verify JWT token and return user"""
    try:
        payload = jwt.decode(token, settings.JWT_SECRET, algorithms=[settings.JWT_ALGORITHM])
        user = User.objects.get(id=payload['user_id'])
        return user
    except jwt.ExpiredSignatureError:
        return None
    except (jwt.InvalidTokenError, User.DoesNotExist):
        return None

@api_view(['GET'])
@permission_classes([AllowAny])
def get_my_profile(request):
    """Get current user profile"""
    # Get token from Authorization header
    auth_header = request.headers.get('Authorization', '')
    if not auth_header.startswith('Bearer '):
        return Response(
            {'error': 'Missing or invalid token'},
            status=status.HTTP_401_UNAUTHORIZED
        )
    
    token = auth_header[7:]  # Remove 'Bearer ' prefix
    user = verify_jwt_token(token)
    
    if user is None:
        return Response(
            {'error': 'Invalid or expired token'},
            status=status.HTTP_401_UNAUTHORIZED
        )
    
    return Response(
        {
            'user': UserSerializer(user).data
        },
        status=status.HTTP_200_OK
    )

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_users(request):
    """Get all users (admin only)"""
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)


# ================================
# Vistas para Grupos y Estudiantes
# ================================

from .models import Subject, Group, Student
from .serializers import SubjectSerializer, GroupSerializer, GroupDetailSerializer, StudentSerializer

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def subjects_list(request):
    """Obtener lista de materias o crear una nueva"""
    if request.method == 'GET':
        subjects = Subject.objects.all()
        serializer = SubjectSerializer(subjects, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        # Solo admin puede crear materias
        if request.user.role != 'admin':
            return Response(
                {'error': 'Solo administradores pueden crear materias'},
                status=status.HTTP_403_FORBIDDEN
            )
        serializer = SubjectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def teacher_groups(request):
    """Obtener todos los grupos del profesor autenticado o crear uno nuevo"""
    if request.user.role != 'teacher':
        return Response(
            {'error': 'Solo profesores pueden acceder a esta función'},
            status=status.HTTP_403_FORBIDDEN
        )
    
    if request.method == 'GET':
        groups = Group.objects.filter(teacher=request.user).select_related('subject')
        serializer = GroupSerializer(groups, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = GroupSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def group_detail(request, group_id):
    """Obtener, actualizar o eliminar un grupo"""
    try:
        group = Group.objects.select_related('subject').get(id=group_id)
    except Group.DoesNotExist:
        return Response({'error': 'Grupo no encontrado'}, status=status.HTTP_404_NOT_FOUND)
    
    # Verificar que el usuario es el profesor del grupo
    if group.teacher != request.user:
        return Response(
            {'error': 'No tienes permiso para acceder a este grupo'},
            status=status.HTTP_403_FORBIDDEN
        )
    
    if request.method == 'GET':
        serializer = GroupDetailSerializer(group)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = GroupSerializer(group, data=request.data, partial=True, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        group.delete()
        return Response(
            {'message': 'Grupo eliminado exitosamente'},
            status=status.HTTP_204_NO_CONTENT
        )


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def group_students(request, group_id):
    """Obtener estudiantes de un grupo o agregar uno"""
    try:
        group = Group.objects.get(id=group_id)
    except Group.DoesNotExist:
        return Response({'error': 'Grupo no encontrado'}, status=status.HTTP_404_NOT_FOUND)
    
    # Verificar que el usuario es el profesor del grupo
    if group.teacher != request.user:
        return Response(
            {'error': 'No tienes permiso para acceder a este grupo'},
            status=status.HTTP_403_FORBIDDEN
        )
    
    if request.method == 'GET':
        students = group.students.all()
        serializer = StudentSerializer(students, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        # Agregar un estudiante al grupo
        student_user_id = request.data.get('user_id')
        
        if not student_user_id:
            return Response(
                {'error': 'user_id es requerido'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        try:
            student_user = User.objects.get(id=student_user_id, role='student')
        except User.DoesNotExist:
            return Response(
                {'error': 'Estudiante no encontrado'},
                status=status.HTTP_404_NOT_FOUND
            )
        
        # Verificar que el estudiante no esté ya en otro grupo de la misma materia
        existing_student = Student.objects.filter(
            user=student_user,
            group__subject=group.subject
        ).exclude(group=group).first()
        
        if existing_student:
            return Response(
                {'error': f'El estudiante ya está inscrito en otro grupo de {group.subject.name}'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Crear o actualizar el registro del estudiante
        student_profile, created = Student.objects.get_or_create(
            user=student_user,
            defaults={'group': group}
        )
        
        if not created:
            # Si ya existe, actualizar el grupo
            student_profile.group = group
            student_profile.save()
        
        serializer = StudentSerializer(student_profile)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def remove_student_from_group(request, group_id, student_id):
    """Remover un estudiante de un grupo"""
    try:
        group = Group.objects.get(id=group_id)
    except Group.DoesNotExist:
        return Response({'error': 'Grupo no encontrado'}, status=status.HTTP_404_NOT_FOUND)
    
    # Verificar que el usuario es el profesor del grupo
    if group.teacher != request.user:
        return Response(
            {'error': 'No tienes permiso para acceder a este grupo'},
            status=status.HTTP_403_FORBIDDEN
        )
    
    try:
        student = Student.objects.get(id=student_id, group=group)
    except Student.DoesNotExist:
        return Response({'error': 'Estudiante no encontrado en este grupo'}, status=status.HTTP_404_NOT_FOUND)
    
    student.group = None
    student.save()
    
    return Response(
        {'message': 'Estudiante removido del grupo'},
        status=status.HTTP_200_OK
    )


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def available_students(request, group_id):
    """Obtener lista de estudiantes disponibles (no asignados a otro grupo de la misma materia)"""
    try:
        group = Group.objects.get(id=group_id)
    except Group.DoesNotExist:
        return Response({'error': 'Grupo no encontrado'}, status=status.HTTP_404_NOT_FOUND)
    
    # Verificar que el usuario es el profesor del grupo
    if group.teacher != request.user:
        return Response(
            {'error': 'No tienes permiso para acceder a este grupo'},
            status=status.HTTP_403_FORBIDDEN
        )
    
    # Obtener estudiantes que NO están en otro grupo de la misma materia
    students_in_subject = Student.objects.filter(
        group__subject=group.subject
    ).values_list('user_id', flat=True)
    
    available_students = User.objects.filter(
        role='student'
    ).exclude(id__in=students_in_subject)
    
    serializer = UserSerializer(available_students, many=True)
    return Response(serializer.data)

