/**
 * EXAMPLE - Dashboard con Templates Refactorizado
 * 
 * Este es un archivo de ejemplo que muestra cómo usar el sistema de plantillas
 * con internacionalización. Usa este como referencia para crear nuevos dashboards.
 * 
 * IMPORTANTE: Los archivos reales están en:
 * - src/pages/teacher/TeacherDashboard.jsx
 * - src/pages/student/StudentDashboard.jsx
 * - src/pages/admin/AdminDashboard.jsx
 */

import { useState } from 'react'
import { useAuth } from '../../../contexts/AuthContext'
import { BookOpen, Users } from 'lucide-react'
import { DashboardLayout, StatsGrid, GettingStartedCard, EmptyState } from '../index'
import { es } from '../../../locales/es'

export default function DashboardExample() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('overview')

  // 1️⃣ Acceso rápido a traducciones por módulo
  const t = es.teacher  // o es.student o es.admin

  // 2️⃣ Definición de pestañas (código en inglés, etiquetas en español via i18n)
  const dashboardTabs = [
    { id: 'overview', label: t.tabs.overview, icon: BookOpen },
    { id: 'groups', label: t.tabs.groups, icon: Users },
  ]

  // 3️⃣ Definición de estadísticas (datos reutilizables)
  const stats = [
    { id: 'total1', label: t.stats.activeGroups, value: 0 },
    { id: 'total2', label: t.stats.registeredStudents, value: 0 },
  ]

  return (
    // 4️⃣ Usar DashboardLayout como contenedor
    <DashboardLayout
      title={t.dashboard.pageTitle}
      subtitle={`${es.common.welcome}, ${user?.first_name}`}
      tabs={dashboardTabs}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {/* Contenido específico por pestaña */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Usar componentes reutilizables */}
          <StatsGrid stats={stats} />
          <GettingStartedCard
            title={t.dashboard.gettingStartedTitle}
            steps={t.steps}
          />
        </div>
      )}

      {activeTab === 'groups' && (
        <div className="space-y-4">
          <EmptyState
            title={t.tabs.groups}
            message={t.emptyStates.groups}
            action={{ label: t.actions.createGroup }}
          />
        </div>
      )}
    </DashboardLayout>
  )
}

/*
 * ESTRUCTURA DE ARCHIVOS RESULTANTE:
 * 
 * src/
 * ├── locales/
 * │   └── es.js                  📝 Todas las traducciones
 * │
 * ├── components/templates/
 * │   ├── DashboardLayout.jsx     🎯 Contenedor principal
 * │   ├── StatsGrid.jsx           📊 Grid de estadísticas
 * │   ├── GettingStartedCard.jsx  🚀 Primeros pasos
 * │   ├── EmptyState.jsx          0️⃣ Estado vacío
 * │   ├── index.js                📦 Exports centralizados
 * │   ├── README.md               📖 Documentación
 * │   └── _examples/
 * │       └── DashboardExample.jsx ⬅️ Este archivo
 * │
 * └── pages/
 *     ├── teacher/
 *     │   └── TeacherDashboard.jsx  ✨ Implementado con plantillas
 *     ├── student/
 *     │   └── StudentDashboard.jsx  ✨ Implementado con plantillas
 *     └── admin/
 *         └── AdminDashboard.jsx    ✨ Implementado con plantillas
 * 
 * VENTAJAS:
 * ✅ Código en inglés
 * ✅ Textos públicos en español
 * ✅ Componentes reutilizables
 * ✅ Fácil mantenimiento
 * ✅ Escalable
 * ✅ DRY (Don't Repeat Yourself)
 */
