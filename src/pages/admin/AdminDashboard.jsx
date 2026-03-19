/**
 * AdminDashboard - Refactored with Reusable Templates & i18n
 * Code in English, User-facing text in Spanish
 */

import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Users, BarChart3, Settings, Activity } from 'lucide-react'
import { DashboardLayout, StatsGrid, EmptyState } from '../../components/templates'
import { es } from '../../locales/es'

export default function AdminDashboard() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('overview')

  // Translation shortcuts
  const t = es.admin

  // Tab definitions
  const dashboardTabs = [
    { id: 'overview', label: t.tabs.overview, icon: Activity },
    { id: 'users', label: t.tabs.users, icon: Users },
    { id: 'reports', label: t.tabs.reports, icon: BarChart3 },
    { id: 'settings', label: t.tabs.settings, icon: Settings },
  ]

  // Statistics
  const stats = [
    { id: 'totalUsers', label: t.stats.totalUsers, value: 0 },
    { id: 'activeTeachers', label: t.stats.activeTeachers, value: 0 },
    { id: 'activeStudents', label: t.stats.activeStudents, value: 0 },
    { id: 'totalChallenges', label: t.stats.totalChallenges, value: 0 },
  ]

  return (
    <DashboardLayout
      title={t.dashboard.pageTitle}
      subtitle={`${es.common.welcome}, ${user?.first_name}`}
      tabs={dashboardTabs}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <StatsGrid stats={stats} />
          <EmptyState
            title="Resumen del Sistema"
            message="Aquí aparecerá el resumen general de la plataforma"
            icon={Activity}
          />
        </div>
      )}

      {/* Users Tab */}
      {activeTab === 'users' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">{t.tabs.users}</h2>
            <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
              Crear Usuario
            </button>
          </div>
          <EmptyState
            title={t.tabs.users}
            message="Gestiona los usuarios del sistema"
            icon={Users}
            action={{ label: 'Crear Usuario' }}
          />
        </div>
      )}

      {/* Reports Tab */}
      {activeTab === 'reports' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">{t.tabs.reports}</h2>
          </div>
          <EmptyState
            title={t.tabs.reports}
            message="Reportes y estadísticas avanzadas"
            icon={BarChart3}
          />
        </div>
      )}

      {/* Settings Tab */}
      {activeTab === 'settings' && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">{t.tabs.settings}</h2>
          <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
            <p className="text-gray-600">Configuración del sistema en desarrollo...</p>
          </div>
        </div>
      )}
    </DashboardLayout>
  )
}

