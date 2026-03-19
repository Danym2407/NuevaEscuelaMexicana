# 🚀 INICIO RÁPIDO - Sistema de Plantillas

## Lo Esencial en 30 Segundos

Todos los dashboards (Admin, Estudiante, Docente) ahora usan **plantillas reutilizables** con:
- ✅ Código en **inglés**
- ✅ Textos públicos en **español**
- ✅ 50% menos código
- ✅ 0 duplicados

---

## 📁 Archivos Importantes

```
src/
├── locales/es.js                     ← Todas las traducciones
├── components/templates/             ← Componentes reutilizables
│   ├── DashboardLayout.jsx          ← Contenedor principal
│   ├── StatsGrid.jsx                ← Grid de estadísticas
│   ├── EmptyState.jsx               ← Estado vacío
│   └── ...
└── pages/
    ├── admin/AdminDashboard.jsx       ← 75 líneas ✨
    ├── student/StudentDashboard.jsx   ← 70 líneas ✨
    └── teacher/TeacherDashboard.jsx   ← 62 líneas ✨
```

---

## 💻 Patrón de Código

Todos los dashboards siguen este patrón:

```javascript
import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { DashboardLayout, StatsGrid } from '../../components/templates'
import { es } from '../../locales/es'

export default function AdminDashboard() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('overview')
  
  // Textos en español desde i18n
  const t = es.admin  // ← admin, student, o teacher
  
  // Tabs (código en inglés)
  const tabs = [
    { id: 'overview', label: t.tabs.overview, icon: Activity }
  ]
  
  // Stats (código en inglés, etiquetas en español)
  const stats = [
    { id: 'users', label: t.stats.totalUsers, value: 0 }
  ]
  
  // Renderizar
  return (
    <DashboardLayout
      title={t.dashboard.pageTitle}  // "Panel Administrativo"
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      <StatsGrid stats={stats} />
    </DashboardLayout>
  )
}
```

---

## 🌐 Textos en Español

**Ubicación:** `src/locales/es.js`

```javascript
export const es = {
  common: {
    welcome: 'Bienvenido',
    logout: 'Cerrar sesión',
  },
  
  admin: {
    dashboard: { pageTitle: 'Panel Administrativo' },
    tabs: { overview: 'Resumen', users: 'Usuarios' },
    stats: { totalUsers: 'Usuarios Totales' },
  },
  
  student: {
    dashboard: { pageTitle: 'Mi Panel de Estudiante' },
    tabs: { challenges: 'Mis Retos' },
    stats: { activeChallenges: 'Retos Activos' },
  },
  
  teacher: {
    dashboard: { pageTitle: 'Panel Docente' },
    tabs: { overview: 'Resumen', groups: 'Grupos' },
    stats: { activeGroups: 'Grupos Activos' },
  },
}
```

---

## 📚 Diferentes Dashboards

### Panel Docente
```javascript
const t = es.teacher  // Accede a textos para docentes
// t.tabs.overview = "Resumen"
// t.stats.activeGroups = "Grupos Activos"
```

### Panel Estudiante
```javascript
const t = es.student  // Accede a textos para estudiantes
// t.tabs.challenges = "Mis Retos"
// t.stats.activeChallenges = "Retos Activos"
```

### Panel Admin
```javascript
const t = es.admin  // Accede a textos para admin
// t.tabs.users = "Usuarios"
// t.stats.totalUsers = "Usuarios Totales"
```

---

## 🧩 Componentes Disponibles

### DashboardLayout
Contenedor principal con header y navegación
```javascript
<DashboardLayout
  title="Mi Panel"
  subtitle="Subtítulo" 
  tabs={[...]}
  activeTab={activeTab}
  onTabChange={setActiveTab}
>
  {/* Contenido */}
</DashboardLayout>
```

### StatsGrid
Grid de estadísticas
```javascript
<StatsGrid stats={[
  { id: 'stat1', label: 'Etiqueta', value: 42 }
]} />
```

### EmptyState
Mensaje cuando no hay datos
```javascript
<EmptyState
  title="Sin datos"
  message="No hay elementos"
  icon={MyIcon}
  action={{ label: 'Crear' }}
/>
```

### GettingStartedCard
Pasos de introducción
```javascript
<GettingStartedCard
  title="Primeros pasos"
  steps={[
    { number: 1, title: "Paso 1", description: "..." },
    { number: 2, title: "Paso 2", description: "..." },
  ]}
/>
```

---

## 🎯 Tareas Comunes

### Cambiar un Texto

1. Abre `src/locales/es.js`
2. Busca la sección (admin/student/teacher)
3. Cambia el valor

```javascript
// Antes
teacher: { tabs: { overview: 'Resumen' } }

// Después
teacher: { tabs: { overview: 'Mi Resumen' } }

// El cambio se refleja automáticamente
```

### Agregar Nuevo Dashboard

1. Copia la estructura de `TeacherDashboard.jsx`
2. Cambia `const t = es.teacher` a tu módulo
3. Define tabs y stats
4. Renderiza con `DashboardLayout`

### Agregar Nuevo Idioma

1. Copia `src/locales/es.js` → `src/locales/en.js`
2. Traduce valores
3. En dashboards: 
   ```javascript
   import { en } from '../../locales/en'
   const t = en.admin  // Cambiar referencia
   ```

---

## 📖 Documentación

**Rápida:**
- [TEMPLATES_QUICK_GUIDE.md](TEMPLATES_QUICK_GUIDE.md) - Guía rápida

**Completa:**
- [SYSTEM_TEMPLATES.md](SYSTEM_TEMPLATES.md) - Documentación completa

**Visual:**
- [TEMPLATES_VISUAL_SUMMARY.md](TEMPLATES_VISUAL_SUMMARY.md) - Resumen visual

**Técnica:**
- [components/templates/README.md](src/components/templates/README.md) - Referencia técnica

**Ejemplos:**
- [components/templates/_examples/DashboardExample.jsx](src/components/templates/_examples/DashboardExample.jsx) - Código comentado

---

## ✅ Verificación

Para verificar que todo funciona:

```bash
# 1. Inicia el servidor
npm run dev

# 2. Visita los dashboards
# http://localhost:5173/teacher/dashboard
# http://localhost:5173/student/challenges
# http://localhost:5173/admin/dashboard

# 3. Verifica que todos los textos están en español
```

---

## 🎉 ¡Listo!

El sistema está completo y funcional. Todos los dashboards usan plantillas reutilizables con textos en español.

**¿Necesitas más info?** Consulta los documentos de referencia arriba.

---

**Estado: ✅ Sistema completamente funcional**
