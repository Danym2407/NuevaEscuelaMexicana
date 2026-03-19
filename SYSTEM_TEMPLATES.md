# Sistema de Plantillas de Componentes y i18n

## 📋 Descripción General

Este sistema permite:
- ✅ **Reutilizar componentes** en todos los dashboards
- ✅ **Mantener código en inglés** (lógica, variables, funciones)
- ✅ **Todos los textos en español** (interface, etiquetas, mensajes)
- ✅ **Escalable y fácil de mantener**
- ✅ **Consistencia visual** en toda la aplicación

---

## 📁 Estructura de Archivos

```
src/
├── locales/
│   └── es.js                    # Todas las traducciones en español
│
├── components/templates/
│   ├── index.js                 # Exporta todos los componentes
│   ├── DashboardLayout.jsx       # Layout base para dashboards
│   ├── TabNavigation.jsx         # Navegación de pestañas
│   ├── StatCard.jsx             # Tarjeta de estadística individual
│   ├── StatsGrid.jsx            # Grid de estadísticas
│   ├── EmptyState.jsx           # Mensaje estado vacío
│   └── GettingStartedCard.jsx   # Tarjeta de primeros pasos
│
└── pages/
    ├── teacher/
    │   └── TeacherDashboard.jsx  # ✨ Ejemplo refactorizado
    ├── student/
    │   └── StudentDashboard.jsx  # Próximo a refactorizar
    └── admin/
        └── AdminDashboard.jsx    # Próximo a refactorizar
```

---

## 🎯 Cómo Usar - Ejemplo Práctico

### 1️⃣ Importar las Plantillas

```javascript
import { DashboardLayout, StatsGrid, EmptyState } from '../../components/templates'
import { es } from '../../locales/es'
```

### 2️⃣ Acceder a Traducciones

```javascript
const t = es.teacher  // Para TeacherDashboard
const t = es.student  // Para StudentDashboard
const t = es.admin    // Para AdminDashboard

// Usar en el código
console.log(t.tabs.overview)      // "Resumen"
console.log(t.stats.activeGroups) // "Grupos Activos"
```

### 3️⃣ Estructura Base - DashboardLayout

```javascript
<DashboardLayout
  title={t.dashboard.pageTitle}
  subtitle={`Bienvenido, ${user?.first_name}`}
  tabs={[
    { id: 'overview', label: t.tabs.overview, icon: BookOpen },
    { id: 'groups', label: t.tabs.groups, icon: Users },
  ]}
  activeTab={activeTab}
  onTabChange={setActiveTab}
>
  {/* Contenido aquí */}
</DashboardLayout>
```

### 4️⃣ Componente de Estadísticas

```javascript
<StatsGrid stats={[
  { id: 'activeGroups', label: t.stats.activeGroups, value: 0 },
  { id: 'registeredStudents', label: t.stats.registeredStudents, value: 0 },
]} />
```

### 5️⃣ Componente de Estado Vacío

```javascript
<EmptyState
  title={t.tabs.groups}
  message={t.emptyStates.groups}
  action={{ label: t.actions.createGroup }}
/>
```

---

## 📝 Agregar Nuevas Traducciones

Edita `src/locales/es.js`:

```javascript
export const es = {
  // ... código existente ...
  
  teacher: {
    // ... código existente ...
    newFeature: {
      title: 'Mi Nueva Característica',
      description: 'Descripción en español',
    }
  }
}
```

Luego úsalo en el componente:

```javascript
const t = es.teacher
console.log(t.newFeature.title) // "Mi Nueva Característica"
```

---

## 🧩 Crear un Panel Rápidamente

```javascript
import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { BookOpen, Users } from 'lucide-react'
import { DashboardLayout, StatsGrid } from '../../components/templates'
import { es } from '../../locales/es'

export default function MyNewDashboard() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('overview')
  const t = es.myModule  // Define en es.js

  return (
    <DashboardLayout
      title={t.dashboard.title}
      subtitle={`Bienvenido, ${user?.first_name}`}
      tabs={[
        { id: 'overview', label: t.tabs.overview, icon: BookOpen },
      ]}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <StatsGrid stats={[
            { id: 'total', label: t.stats.total, value: 42 },
          ]} />
        </div>
      )}
    </DashboardLayout>
  )
}
```

---

## 🎨 Variantes de Componentes

### StatCard con Variantes

```javascript
<StatCard 
  value={10}
  label="Grupo Activo"
  icon={Users}
  variant="default"  // 'default' | 'primary' | 'success' | 'warning' | 'danger'
/>
```

### TabNavigation con Variantes

```javascript
<TabNavigation
  tabs={tabs}
  activeTab={activeTab}
  onTabChange={setActiveTab}
  variant="default"  // 'default' | 'dark'
/>
```

---

## ✨ Beneficios

| Aspecto | Beneficio |
|---------|-----------|
| **Mantenibilidad** | Cambios centralizados en componentes |
| **Consistencia** | Mismo diseño en todos los dashboards |
| **Multiidioma** | Agregar español, inglés, etc. fácilmente |
| **DRY** | Don't Repeat Yourself - sin duplicación |
| **Escalabilidad** | Fácil de agregar nuevas funcionalidades |
| **Testing** | Componentes pequeños, fáciles de testear |

---

## 🚀 Próximos Pasos

1. **Refactorizar StudentDashboard** usando estas plantillas
2. **Refactorizar AdminDashboard** usando estas plantillas
3. **Agregar i18n completo** (inglés, francés, etc.) si es necesario
4. **Crear componentes adicionales** según necesidades

---

## 📚 Referencia Rápida

```javascript
// Importar todo
import { 
  DashboardLayout, 
  TabNavigation, 
  StatCard, 
  StatsGrid, 
  EmptyState, 
  GettingStartedCard 
} from '../../components/templates'

import { es } from '../../locales/es'

// Acceso rápido
const t = es.teacher    // Textos para docentes
const t = es.student    // Textos para estudiantes
const t = es.admin      // Textos para admin
const t = es.common     // Textos comunes
```

---

## 🔧 Solucionar Problemas

**P: ¿Qué pasa si falta una traducción?**
R: Agregala a `es.js` en la sección correspondiente

**P: ¿Puedo personalizar los estilos?**
R: Sí, todos los componentes usan Tailwind CSS, edita las clases directamente

**P: ¿Cómo agrego más idiomas?**
R: Crea `src/locales/en.js`, `src/locales/fr.js`, etc. con la misma estructura
