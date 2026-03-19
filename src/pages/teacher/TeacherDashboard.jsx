import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { BookOpen, Users, FileText, Zap } from 'lucide-react'
import { DashboardLayout, StatsGrid, GettingStartedCard, EmptyState } from '../../components/templates'
import { es } from '../../locales/es'

export default function TeacherDashboard() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('overview')

  // Translation shortcuts
  const t = es.teacher

  // Tab definitions
  const dashboardTabs = [
    { id: 'overview', label: t.tabs.overview, icon: BookOpen },
    { id: 'groups', label: t.tabs.groups, icon: Users },
    { id: 'sequences', label: t.tabs.sequences, icon: FileText },
    { id: 'challenges', label: t.tabs.challenges, icon: Zap },
  ]

  // Statistics
  const stats = [
    { id: 'activeGroups', label: t.stats.activeGroups, value: 0 },
    { id: 'registeredStudents', label: t.stats.registeredStudents, value: 0 },
    { id: 'activeChallenges', label: t.stats.activeChallenges, value: 0 },
    { id: 'evidenceSubmitted', label: t.stats.evidenceSubmitted, value: 0 },
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

          <GettingStartedCard 
            title={t.dashboard.gettingStartedTitle} 
            steps={t.steps} 
          />
        </div>
      )}

      {/* Groups & Students Tab */}
      {activeTab === 'groups' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">{t.tabs.groups}</h2>
            <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
              {t.actions.createGroup}
            </button>
          </div>
          <EmptyState
            title={t.tabs.groups}
            message={t.emptyStates.groups}
            action={{ label: t.actions.createGroup }}
          />
        </div>
      )}

      {/* Didactic Sequences Tab */}
      {activeTab === 'sequences' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">{t.tabs.sequences}</h2>
            <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
              {t.actions.createSequence}
            </button>
          </div>
          <EmptyState
            title={t.tabs.sequences}
            message={t.emptyStates.sequences}
            action={{ label: t.actions.createSequence }}
          />
        </div>
      )}

      {/* Learning Challenges Tab */}
      {activeTab === 'challenges' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">{t.tabs.challenges}</h2>
            <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
              {t.actions.createChallenge}
            </button>
          </div>
          <EmptyState
            title={t.tabs.challenges}
            message={t.emptyStates.challenges}
            action={{ label: t.actions.createChallenge }}
          />
        </div>
      )}
    </DashboardLayout>
  )
}
