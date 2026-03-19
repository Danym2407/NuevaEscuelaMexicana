from django.urls import path
from . import views

urlpatterns = [
    path('users/register', views.register, name='register'),
    path('users/login', views.login, name='login'),
    path('users/myProfile', views.get_my_profile, name='get_my_profile'),
    path('users/all', views.get_all_users, name='get_all_users'),
]
