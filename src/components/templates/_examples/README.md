# 📚 Ejemplos y Referencias

Esta carpeta contiene ejemplos y archivos de referencia para el sistema de plantillas.

## 📄 Archivos

### `DashboardExample.jsx`

Ejemplo completo de cómo crear un dashboard con:
- ✅ Importaciones de plantillas
- ✅ Sistema de traducciones (i18n)
- ✅ Estructura recomendada
- ✅ Explicaciones paso a paso

**Usado como referencia para:**
- [src/pages/teacher/TeacherDashboard.jsx](../../../pages/teacher/TeacherDashboard.jsx)
- [src/pages/student/StudentDashboard.jsx](../../../pages/student/StudentDashboard.jsx)
- [src/pages/admin/AdminDashboard.jsx](../../../pages/admin/AdminDashboard.jsx)

## 🎯 Cómo Usar Este Ejemplo

1. Lee `DashboardExample.jsx`
2. Entiende la estructura de 4 pasos
3. Copia el patrón para crear nuevos dashboards
4. Modifica `t` para acceder a diferentes traducciones

## ✨ Patrón Base (Copiar y Personalizar)

```javascript
// Paso 1: Importar
import { DashboardLayout, StatsGrid } from '../../components/templates'
import { es } from '../../locales/es'

// Paso 2: Acceso a traducciones
const t = es.myModule

// Paso 3: Definir estructura
const tabs = [...]
const stats = [...]

// Paso 4: Renderizar con DashboardLayout
return <DashboardLayout {...props}><StatsGrid stats={stats} /></DashboardLayout>
```

## 📖 Documentación Completa

- [README de Plantillas](../README.md)
- [Guía del Sistema](../../../SYSTEM_TEMPLATES.md)
- [Archivo de Traducciones](../../../locales/es.js)

---

**Nota:** Los dashboards implementados ya no están en esta carpeta porque son archivos activos en `src/pages/`. Solo usa esta carpeta como referencia.
