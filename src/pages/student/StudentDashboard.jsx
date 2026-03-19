/**
 * StudentDashboard - Refactored with Reusable Templates & i18n
 * Code in English, User-facing text in Spanish
 */

import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Zap, CheckCircle, Clock } from 'lucide-react'
import { DashboardLayout, StatsGrid, EmptyState } from '../../components/templates'
import { es } from '../../locales/es'

export default function StudentDashboard() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('challenges')

  // Translation shortcuts
  const t = es.student

  // Tab definitions
  const dashboardTabs = [
    { id: 'challenges', label: t.tabs.challenges, icon: Zap },
    { id: 'submissions', label: t.tabs.submissions, icon: CheckCircle },
    { id: 'progress', label: t.tabs.progress, icon: Clock },
  ]

  // Statistics
  const stats = [
    { id: 'activeChallenges', label: t.stats.activeChallenges, value: 0 },
    { id: 'submittedEvidence', label: t.stats.submittedEvidence, value: 0 },
    { id: 'pendingReview', label: t.stats.pendingReview, value: 0 },
    { id: 'completed', label: t.stats.completed, value: 0 },
  ]

  return (
    <DashboardLayout
      title={t.dashboard.pageTitle}
      subtitle={`${es.common.welcome}, ${user?.first_name}`}
      tabs={dashboardTabs}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {/* Challenges Tab */}
      {activeTab === 'challenges' && (
        <div className="space-y-6">
          <StatsGrid stats={stats} />
          <EmptyState
            title={t.tabs.challenges}
            message="No hay retos disponibles en este momento"
            icon={Zap}
            action={{ label: 'Ver retos futuros' }}
          />
        </div>
      )}

      {/* Submissions Tab */}
      {activeTab === 'submissions' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">{t.tabs.submissions}</h2>
          </div>
          <EmptyState
            title={t.tabs.submissions}
            message="No has presentado evidencia aún"
            icon={CheckCircle}
          />
        </div>
      )}

      {/* Progress Tab */}
      {activeTab === 'progress' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">{t.tabs.progress}</h2>
          </div>
          <EmptyState
            title="Tu Progreso"
            message="Completa retos para ver tu progreso"
            icon={Clock}
          />
        </div>
      )}
    </DashboardLayout>
  )
}
