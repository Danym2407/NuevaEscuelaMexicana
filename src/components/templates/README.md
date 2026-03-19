# 🎨 Reusable Dashboard Templates System

## Quick Start

Este sistema permite crear dashboards completos con **solo ~60 líneas de código**.

### El Antes (Mucho Código)

```javascript
// ❌ 140+ líneas de código - Difícil de mantener
// - Estructura HTML manual
// - Estilos duplicados
// - Textos hardcodeados
// - Difícil de actualizar
```

### El Después (Código Limpio)

```javascript
// ✅ ~60 líneas - Limpio y mantenible
import { DashboardLayout, StatsGrid, EmptyState } from '../../components/templates'
import { es } from '../../locales/es'

export default function MyDashboard() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('overview')
  const t = es.myModule

  return (
    <DashboardLayout
      title={t.dashboard.title}
      subtitle={`Bienvenido, ${user?.first_name}`}
      tabs={[/*...*/]}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'overview' && <StatsGrid stats={[/*...*/]} />}
    </DashboardLayout>
  )
}
```

---

## 📚 Componentes Disponibles

### 1. `DashboardLayout` - Contenedor Principal

```javascript
<DashboardLayout
  title="Mi Panel"                    // Título del header
  subtitle="Bien descrito"            // Subtítulo opcional
  tabs={[                             // Definición de pestañas
    { id: 'overview', label: 'Resumen', icon: BookOpen }
  ]}
  activeTab="overview"                // Pestaña activa
  onTabChange={(tabId) => {...}}      // Callback cambio tab
  showHeader={true}                   // Mostrar/ocultar header
>
  {/* Contenido */}
</DashboardLayout>
```

### 2. `StatsGrid` - Cuadrícula de Estadísticas

```javascript
<StatsGrid stats={[
  { 
    id: 'activeGroups',
    label: 'Grupos Activos',
    value: 12,
    change: 5  // Opcional: % de cambio
  },
  // ... más estadísticas
]} />
```

### 3. `StatCard` - Tarjeta Individual

```javascript
<StatCard 
  value={42}
  label="Total Usuarios"
  icon={Users}
  variant="default"  // 'primary' | 'success' | 'warning' | 'danger'
/>
```

### 4. `EmptyState` - Estado Vacío

```javascript
<EmptyState
  title="Sin datos"
  message="No hay elementos para mostrar"
  icon={Zap}
  action={{ label: 'Crear elemento' }}  // Opcional
/>
```

### 5. `GettingStartedCard` - Guía de Primeros Pasos

```javascript
<GettingStartedCard 
  title="Primeros pasos"
  steps={[
    { number: 1, title: "Paso uno", description: "Descripción..." },
    { number: 2, title: "Paso dos", description: "Descripción..." },
  ]}
/>
```

### 6. `TabNavigation` - Barra de Pestañas (Independiente)

```javascript
<TabNavigation
  tabs={tabs}
  activeTab={activeTab}
  onTabChange={setActiveTab}
  variant="default"  // 'dark' para versión oscura
/>
```

---

## 🌐 Sistema de Traducciones (i18n)

**Ubicación:** `src/locales/es.js`

Estructura por módulo:

```javascript
export const es = {
  common: {
    welcome: 'Bienvenido',
    logout: 'Cerrar sesión',
    // ...
  },
  
  teacher: {
    dashboard: { /*...*/ },
    tabs: { /*...*/ },
    stats: { /*...*/ },
    actions: { /*...*/ },
    emptyStates: { /*...*/ },
  },
  
  student: { /*...*/ },
  admin: { /*...*/ },
}
```

### Uso en Componentes

```javascript
import { es } from '../../locales/es'

export default function Component() {
  const t = es.teacher  // Acceso a textos del docente
  
  return (
    <h1>{t.dashboard.title}</h1>
    <p>{t.tabs.overview}</p>
    <button>{t.actions.create}</button>
  )
}
```

---

## 🎯 Patrón Recomendado

Todos los dashboards siguen este patrón:

```javascript
import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { DashboardLayout, StatsGrid } from '../../components/templates'
import { es } from '../../locales/es'

export default function DashboardName() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('overview')
  
  // 1. Acceso rápido a traducciones
  const t = es.moduleName
  
  // 2. Definición de tabs
  const tabs = [
    { id: 'overview', label: t.tabs.overview, icon: BookOpen }
  ]
  
  // 3. Definición de estadísticas
  const stats = [
    { id: 'total', label: t.stats.total, value: 0 }
  ]
  
  // 4. Renderizar con DashboardLayout
  return (
    <DashboardLayout
      title={t.dashboard.title}
      subtitle={`${es.common.welcome}, ${user?.first_name}`}
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'overview' && <StatsGrid stats={stats} />}
    </DashboardLayout>
  )
}
```

---

## 🎨 Personalización de Estilos

Todos los componentes usan **Tailwind CSS**. Para personalizar:

1. **Colores:** Edita las clases Tailwind en el componente
2. **Espaciado:** Ajusta `p-6`, `gap-4`, etc.
3. **Tamaños:** Modifica `text-lg`, `w-full`, etc.

Ejemplo - modificar StatCard en `StatCard.jsx`:

```javascript
// Cambiar colores del fondo
const variants = {
  default: 'bg-blue-50 border-blue-200',  // ← Cambiar aquí
  // ...
}
```

---

## 📝 Agregar Nuevas Traducciones

1. Abre `src/locales/es.js`
2. Agrega la clave en la sección correspondiente:

```javascript
student: {
  newSection: {
    title: 'Mi Nueva Sección',
    description: 'Descripción...',
    button: 'Etiqueta Botón'
  }
}
```

3. Usa en el componente:

```javascript
const t = es.student
console.log(t.newSection.title)  // "Mi Nueva Sección"
```

---

## 🚀 Crear un Nuevo Dashboard en 5 Minutos

### Paso 1: Agregar traducciones

```javascript
// src/locales/es.js
myModule: {
  dashboard: { title: 'Mi Panel', pageTitle: 'Mi Panel' },
  tabs: { overview: 'Resumen' },
  stats: { total: 'Total' }
}
```

### Paso 2: Crear componente

```javascript
// src/pages/myModule/MyDashboard.jsx
import { DashboardLayout, StatsGrid } from '../../components/templates'
import { es } from '../../locales/es'

export default function MyDashboard() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('overview')
  const t = es.myModule

  return (
    <DashboardLayout
      title={t.dashboard.pageTitle}
      subtitle={`Bienvenido, ${user?.first_name}`}
      tabs={[{ id: 'overview', label: t.tabs.overview, icon: BookOpen }]}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'overview' && (
        <StatsGrid stats={[
          { id: 'total', label: t.stats.total, value: 42 }
        ]} />
      )}
    </DashboardLayout>
  )
}
```

### Paso 3: Agregar ruta

```javascript
// src/App.jsx
<Route path="/mymodule/dashboard" element={<ProtectedRoute><MyDashboard /></ProtectedRoute>} />
```

**¡Listo! Dashboard completo en ~60 líneas.**

---

## 💡 Ventajas del Sistema

| Ventaja | Beneficio |
|---------|-----------|
| **Reutilizable** | Usa los mismos componentes en todos lados |
| **Mantenible** | Cambios en un solo componente se reflejan en toda la app |
| **i18n Integrado** | Agregar idiomas es trivial (copiar el archivo) |
| **DRY** | No repites código |
| **Consistente** | Mismos estilos en todos lados |
| **Escalable** | Fácil de crecer |
| **Testeable** | Componentes pequeños |

---

## 📖 Referencias

- **Documentación Completa:** Ver [SYSTEM_TEMPLATES.md](../../SYSTEM_TEMPLATES.md)
- **Ejemplos Refactorizados:**
  - StudentDashboard: `src/pages/student/StudentDashboard-REFACTORED.jsx`
  - AdminDashboard: `src/pages/admin/AdminDashboard-REFACTORED.jsx`
- **Localizaciones:** `src/locales/es.js`

---

## ✨ Ejemplo Real

Antes (140 líneas):
```javascript
// 😫 Mucho HTML hardcodeado, estilos duplicados, textos en el componente
```

Después (60 líneas):
```javascript
// ✨ Limpio, legible, reutilizable
const t = es.teacher
return <DashboardLayout {...props}><StatsGrid stats={stats} /></DashboardLayout>
```

**Resultado:** Menos código, mejor mantenibilidad, fácil escalabilidad.
