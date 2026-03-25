from django.urls import path
from . import views

urlpatterns = [
    # Auth
    path('users/register', views.register, name='register'),
    path('users/login', views.login, name='login'),
    path('users/myProfile', views.get_my_profile, name='get_my_profile'),
    path('users/all', views.get_all_users, name='get_all_users'),
    
    # Materias
    path('subjects/', views.subjects_list, name='subjects_list'),
    
    # Grupos
    path('groups/', views.teacher_groups, name='teacher_groups'),
    path('groups/<int:group_id>/', views.group_detail, name='group_detail'),
    
    # Estudiantes en grupos
    path('groups/<int:group_id>/students/', views.group_students, name='group_students'),
    path('groups/<int:group_id>/students/<int:student_id>/', views.remove_student_from_group, name='remove_student_from_group'),
    path('groups/<int:group_id>/available-students/', views.available_students, name='available_students'),
]
