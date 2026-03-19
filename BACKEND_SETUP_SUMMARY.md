# ✅ Backend Django - Setup Completado

## 🎯 Lo que se ha hecho:

### 1. ✅ Instalación de Dependencias
- Django 6.0.3
- Django REST Framework
- django-cors-headers (para permitir requests del frontend)
- PyJWT (para tokens JWT)
- python-dotenv

### 2. ✅ Estructura de Proyectos Django
```
- backend/          # Proyecto Django principal
  ├── settings.py   # Configuración
  ├── urls.py       # Rutas principales
  └── wsgi.py

- api/              # Aplicación API
  ├── models.py     # Modelo User personalizado con roles
  ├── views.py      # Endpoints de autenticación
  ├── serializers.py # Validación de datos
  ├── urls.py       # Rutas de API
  ├── admin.py      # Panel de administración
  └── migrations/   # Base de datos
```

### 3. ✅ Modelo de Usuario Personalizado
- Campos: email, username, first_name, last_name, role, created_at, updated_at
- Roles disponibles: **admin**, **teacher**, **student**
- Auenticación por email + contraseña

### 4. ✅ Endpoints de API Configurados

#### POST `/api/users/login`
```json
Request body:
{
  "email": "student@example.com",
  "password": "student123"
}

Response:
{
  "message": "Login successful",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGc...",
  "user": { ... }
}
```

#### POST `/api/users/register`
```json
Request body:
{
  "email": "newuser@example.com",
  "username": "newuser",
  "password": "password123",
  "password2": "password123",
  "first_name": "John",
  "last_name": "Doe",
  "role": "student"
}
```

#### GET `/api/users/myProfile`
- Requiere: Header `Authorization: Bearer <token>`
- Retorna: Datos del usuario autenticado

### 5. ✅ Base de Datos SQLite
- Tablas creadas automáticamente
- Lista para desarrollo y pruebas
- Fácil para producción usar PostgreSQL

### 6. ✅ Usuarios de Prueba Creados

| Email | Contraseña | Rol |
|-------|-----------|-----|
| admin@example.com | admin123 | admin |
| teacher@example.com | teacher123 | teacher |
| student@example.com | student123 | student |

### 7. ✅ CORS Habilitado
- Acepta requests desde: `localhost:5173` (Vite) y `localhost:3000`
- Permite credenciales en CORS

### 8. ✅ Panel de Administración Django
- URL: `http://localhost:8000/admin/`
- Usuario: `admin@example.com`
- Contraseña: `admin123`
- Función: Crear, editar y eliminar usuarios

## 🚀 Cómo Usar

### Paso 1: Iniciar el Backend
```powershell
cd "ruta\del\proyecto"
.\backend_env\Scripts\Activate.ps1
python manage.py runserver 8000
```

### Paso 2: Verificar que esté corriendo
```
Django development server is running at http://localhost:8000
```

### Paso 3: Abre otra terminal para el Frontend
```bash
npm run dev
```

### Paso 4: Login desde el Frontend
- URL: `http://localhost:5173`
- Email: `student@example.com`
- Contraseña: `student123`

## 📱 Flujo de Autenticación

```
1. Usuario envía email + contraseña a /api/users/login (POST)
   ↓
2. Backend verifica credenciales
   ↓
3. Backend genera JWT token
   ↓
4. Frontend recibe token y lo guarda en localStorage
   ↓
5. Frontend envía token en todos los requests futuros (Bearer Token)
   ↓
6. Backend verifica token y retorna datos de usuario
```

## 🔒 Seguridad

✅ Contraseñas hasheadas con bcrypt
✅ JWT Tokens con expiración (30 días)
✅ CORS configurado correctamente
✅ SQL Injection protegido (ORM de Django)
✅ CSRF protegido

## 🐛 Si tienes problemas

### "Connection Refused" en Frontend
→ Verifica que Django esté corriendo en puerto 8000

### Token inválido
→ Limpia el localStorage: `localStorage.clear()` en la consola

### Error CORS
→ Agrega tu URL a `CORS_ALLOWED_ORIGINS` en `backend/settings.py`

## 📚 Archivos Importantes

- `BACKEND_SETUP.md` - Documentación completa del backend
- `create_test_users.py` - Script para crear más usuarios
- `backend/settings.py` - Configuraciones de Django
- `api/models.py` - Modelo de Usuario
- `api/views.py` - Endpoints de API
- `api/serializers.py` - Validación de datos

## ✨ Próximos Pasos (Opcionales)

1. **Agregar más campos al Usuario:**
   - Teléfono, foto de perfil, dirección, etc.

2. **Crear más endpoints:**
   - Crear aulas (classrooms)
   - Crear tareas (assignments)
   - Crear calificaciones (grades)

3. **Mejorar seguridad:**
   - Usar variables de entorno para secretos
   - Configurar HTTPS en producción
   - Usar base de datos PostgreSQL

4. **Testing:**
   - Escribir tests para endpoints
   - Automatizar validaciones

---

**¡Listo! Tu backend Django está completamente funcional y listo para usar.** 🎉

Para preguntas, revisa la documentación de Django: https://docs.djangoproject.com/
