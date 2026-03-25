from django.db import models
from django.contrib.auth.models import AbstractUser

USER_ROLES = (
    ('admin', 'Admin'),
    ('teacher', 'Teacher'),
    ('student', 'Student'),
)

class User(AbstractUser):
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=10, choices=USER_ROLES, default='student')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return f"{self.email} ({self.role})"


class Subject(models.Model):
    """Materias/Asignaturas"""
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Group(models.Model):
    """Grupos/Clases - Un profesor puede tener muchos grupos"""
    teacher = models.ForeignKey(User, on_delete=models.CASCADE, related_name='groups', limit_choices_to={'role': 'teacher'})
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name='groups')
    name = models.CharField(max_length=100)  # Ej: "Grupo A", "Matemáticas 1°"
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['teacher', 'subject', 'name'], name='unique_teacher_subject_group')
        ]

    def __str__(self):
        return f"{self.name} - {self.subject.name} ({self.teacher.first_name})"


class Student(models.Model):
    """Estudiantes - Un estudiante puede estar en muchos grupos pero solo UNO por materia"""
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='student_profile', limit_choices_to={'role': 'student'})
    group = models.ForeignKey(Group, on_delete=models.SET_NULL, null=True, blank=True, related_name='students')
    enrollment_date = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        constraints = [
            # Un estudiante solo puede estar en un grupo por materia
            models.UniqueConstraint(fields=['user', 'group'], name='unique_student_per_group'),
        ]

    def __str__(self):
        return f"{self.user.email} - {self.group.name if self.group else 'Sin grupo'}"
