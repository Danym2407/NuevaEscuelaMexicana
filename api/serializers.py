from rest_framework import serializers
from .models import User, Subject, Group, Student
import jwt
from django.conf import settings
from datetime import datetime, timedelta

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'username', 'first_name', 'last_name', 'role', 'created_at')
        read_only_fields = ('id', 'created_at')

class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6)
    password2 = serializers.CharField(write_only=True, min_length=6)

    class Meta:
        model = User
        fields = ('email', 'username', 'password', 'password2', 'first_name', 'last_name', 'role')

    def validate(self, attrs):
        """Verify that passwords match"""
        if attrs['password'] != attrs.pop('password2'):
            raise serializers.ValidationError("Passwords do not match!")
        return attrs

    def create(self, validated_data):
        """Create a new user with hashed password"""
        user = User.objects.create_user(
            email=validated_data['email'],
            username=validated_data['username'],
            password=validated_data['password'],
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', ''),
            role=validated_data.get('role', 'student')
        )
        return user

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, attrs):
        """Check email and password"""
        email = attrs.get('email')
        password = attrs.get('password')

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            raise serializers.ValidationError("Invalid email or password!")

        if not user.check_password(password):
            raise serializers.ValidationError("Invalid email or password!")

        attrs['user'] = user
        return attrs

def generate_jwt_token(user):
    """Generate JWT token for user"""
    payload = {
        'user_id': user.id,
        'email': user.email,
        'role': user.role,
        'exp': datetime.utcnow() + timedelta(days=30),
        'iat': datetime.utcnow()
    }
    token = jwt.encode(payload, settings.JWT_SECRET, algorithm=settings.JWT_ALGORITHM)
    return token


# Serializers para Subject, Group y Student
class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ('id', 'name', 'description', 'created_at')
        read_only_fields = ('id', 'created_at')


class StudentSerializer(serializers.ModelSerializer):
    user_email = serializers.CharField(source='user.email', read_only=True)
    user_name = serializers.SerializerMethodField()
    
    class Meta:
        model = Student
        fields = ('id', 'user', 'user_email', 'user_name', 'group', 'enrollment_date')
        read_only_fields = ('id', 'enrollment_date')
    
    def get_user_name(self, obj):
        return f"{obj.user.first_name} {obj.user.last_name}".strip()


class GroupDetailSerializer(serializers.ModelSerializer):
    subject_name = serializers.CharField(source='subject.name', read_only=True)
    teacher_name = serializers.SerializerMethodField()
    students = StudentSerializer(many=True, read_only=True)
    student_count = serializers.SerializerMethodField()
    
    class Meta:
        model = Group
        fields = ('id', 'teacher', 'teacher_name', 'subject', 'subject_name', 'name', 'description', 'students', 'student_count', 'created_at', 'updated_at')
        read_only_fields = ('id', 'created_at', 'updated_at')
    
    def get_teacher_name(self, obj):
        return f"{obj.teacher.first_name} {obj.teacher.last_name}".strip()
    
    def get_student_count(self, obj):
        return obj.students.count()


class GroupSerializer(serializers.ModelSerializer):
    subject_name = serializers.CharField(source='subject.name', read_only=True)
    teacher_name = serializers.SerializerMethodField()
    student_count = serializers.SerializerMethodField()
    
    class Meta:
        model = Group
        fields = ('id', 'teacher', 'teacher_name', 'subject', 'subject_name', 'name', 'description', 'student_count', 'created_at', 'updated_at')
        read_only_fields = ('id', 'created_at', 'updated_at', 'teacher')
    
    def get_teacher_name(self, obj):
        return f"{obj.teacher.first_name} {obj.teacher.last_name}".strip()
    
    def get_student_count(self, obj):
        return obj.students.count()
    
    def create(self, validated_data):
        """El profesor se obtiene del request"""
        validated_data['teacher'] = self.context['request'].user
        return super().create(validated_data)
