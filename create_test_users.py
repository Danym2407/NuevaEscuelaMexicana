#!/usr/bin/env python
"""
Script to create test users for the application
Usage: python create_test_users.py
"""

import os
import django
import sys

# Set up Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from api.models import User

def create_test_users():
    """Create test users with different roles"""
    
    test_users = [
        {
            'email': 'admin@example.com',
            'username': 'admin',
            'password': 'admin123',
            'first_name': 'Admin',
            'last_name': 'User',
            'role': 'admin',
            'is_staff': True,
            'is_superuser': True
        },
        {
            'email': 'teacher@example.com',
            'username': 'teacher',
            'password': 'teacher123',
            'first_name': 'Teacher',
            'last_name': 'User',
            'role': 'teacher'
        },
        {
            'email': 'student@example.com',
            'username': 'student',
            'password': 'student123',
            'first_name': 'Student',
            'last_name': 'User',
            'role': 'student'
        },
    ]
    
    for user_data in test_users:
        email = user_data.pop('email')
        username = user_data.pop('username')
        password = user_data.pop('password')
        
        # Check if user already exists
        if User.objects.filter(email=email).exists():
            print(f"❌ User {email} already exists, skipping...")
            continue
        
        # Create user
        try:
            if user_data.get('is_superuser'):
                user = User.objects.create_superuser(
                    email=email,
                    username=username,
                    password=password,
                    **{k: v for k, v in user_data.items() if k not in ['is_staff', 'is_superuser']}
                )
            else:
                user = User.objects.create_user(
                    email=email,
                    username=username,
                    password=password,
                    **{k: v for k, v in user_data.items()}
                )
            print(f"✅ User {email} created successfully! Role: {user.role}")
        except Exception as e:
            print(f"❌ Error creating user {email}: {str(e)}")

if __name__ == '__main__':
    print("Creating test users...")
    print("-" * 50)
    create_test_users()
    print("-" * 50)
    print("Done! Test users created.")
    print("\nYou can now login with:")
    print("  Admin:   admin@example.com / admin123")
    print("  Teacher: teacher@example.com / teacher123")
    print("  Student: student@example.com / student123")
