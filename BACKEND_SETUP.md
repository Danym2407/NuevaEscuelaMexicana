# Backend Django - Guía de Setup

## 📋 Lo que se ha configurado

Se ha creado un backend Django completamente funcional con:
- ✅ Autenticación JWT
- ✅ Modelo de Usuario personalizado con roles (admin, teacher, student)
- ✅ Endpoints para login, registro y perfil de usuario
- ✅ CORS habilitado para aceptar requests del frontend
- ✅ Base de datos SQLite lista para desarrollo

## 🚀 Iniciar el servidor Django

El servidor Django está configurado para correr en el **puerto 8000**.

### En Windows (PowerShell):
```powershell
cd "c:\Users\danym\Documents\1 Servicios de Programación Mios\NuevaEscuelaMexicana"
.\backend_env\Scripts\Activate.ps1
python manage.py runserver 8000
```

### Alternativa - En una terminal separada:
```bash
python manage.py runserver 8000
```

## 👥 Usuarios de prueba disponibles

Ya se han creado 3 usuarios de prueba:

| Email | Contraseña | Rol | Username |
|-------|-----------|-----|----------|
| admin@example.com | admin123 | admin | admin |
| teacher@example.com | teacher123 | teacher | teacher |
| student@example.com | student123 | student | student |

## 🔌 Endpoints disponibles

### POST `/api/users/register`
Registrar un nuevo usuario
```json
{
  "email": "newuser@example.com",
  "username": "newuser",
  "password": "password123",
  "password2": "password123",
  "first_name": "John",
  "last_name": "Doe",
  "role": "student"  // "admin", "teacher", or "student"
}
```

### POST `/api/users/login`
Login y obtener JWT token
```json
{
  "email": "student@example.com",
  "password": "student123"
}
```

**Respuesta:**
```json
{
  "message": "Login successful",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGc...",
  "user": {
    "id": 3,
    "email": "student@example.com",
    "username": "student",
    "first_name": "Student",
    "last_name": "User",
    "role": "student"
  }
}
```

### GET `/api/users/myProfile`
Obtener el perfil del usuario actual

**Headers requeridos:**
```
Authorization: Bearer <tu_jwt_token>
```

**Respuesta:**
```json
{
  "user": {
    "id": 3,
    "email": "student@example.com",
    "username": "student",
    "first_name": "Student",
    "last_name": "User",
    "role": "student"
  }
}
```

## 📱 Probar desde el Frontend

El frontend React ya está configurado para usar `http://localhost:8000/api`.

1. **Inicia el servidor Django:**
   ```powershell
   python manage.py runserver 8000
   ```

2. **Inicia el frontend Vite** en otra terminal:
   ```bash
   npm run dev
   ```

3. **Abre tu navegador** en `http://localhost:5173`

4. **Intenta login** con uno de los usuarios de prueba:
   - Email: `student@example.com`
   - Contraseña: `student123`

## 🛠️ Panel de Administración Django

Para acceder al panel de administración Django:

1. **Asegúrate de que el servidor esté corriendo:**
   ```
   python manage.py runserver 8000
   ```

2. **Abre en tu navegador:**
   ```
   http://localhost:8000/admin/
   ```

3. **Login con las credenciales de admin:**
   - Email: `admin@example.com`
   - Contraseña: `admin123`

Desde aquí puedes:
- Ver y editar usuarios
- Cambiar roles de usuarios
- Crear nuevos usuarios
- Ver logs de administración

## 🔧 Crear más usuarios de prueba

Para crear más usuarios de prueba rápidamente, ejecuta el script:

```powershell
python create_test_users.py
```

Este script puede ejecutarse múltiples veces sin importar - no creará duplicados.

## 📝 Estructura del Backend

```
backend/
├── manage.py              # Django management
├── backend/
│   ├── settings.py        # Configuración de Django
│   ├── urls.py            # Rutas principales
│   └── wsgi.py
├── api/
│   ├── models.py          # Modelo User personalizado
│   ├── views.py           # Vistas de API
│   ├── serializers.py     # Serializadores DRF
│   ├── urls.py            # Rutas de API
│   ├── admin.py           # Configuración admin
│   └── migrations/        # Migraciones de base de datos
└── create_test_users.py   # Script para crear usuarios
```

## 🔐 Notas de Seguridad

⚠️ **IMPORTANTE para Producción:**
- Cambia `SECRET_KEY` en `backend/settings.py`
- Cambia `JWT_SECRET` en `backend/settings.py`
- Configura `DEBUG = False`
- Configura `ALLOWED_HOSTS` correctamente
- Usa variables de entorno para secretos
- Usa una base de datos real (PostgreSQL, MySQL)

## ❓ Solucionar Problemas

### El frontend no conecta al backend
- ✅ Verifica que Django esté corriendo en puerto 8000
- ✅ Comprueba que el archivo `api.js` tenga la URL correcta: `http://localhost:8000/api`
- ✅ Comprueba la consola del navegador (F12) para ver el error exacto

### Error "Connection Refused"
- Asegúrate de que el servidor Django esté corriendo
- Ejecuta: `python manage.py runserver 8000`

### Error "CORS"
- Django está configurado para aceptar requests desde `localhost:5173` (Vite) y `localhost:3000`
- Si usas otro puerto, agrega tu URL en `backend/settings.py` en la variable `CORS_ALLOWED_ORIGINS`

## 📞 Contacto

Para preguntas sobre el setup, revisa:
- [Django Documentation](https://docs.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [JWT en Python](https://pyjwt.readthedocs.io/)
