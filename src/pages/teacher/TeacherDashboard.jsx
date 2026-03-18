import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { LogOut, BookOpen, Users, FileText, Zap } from 'lucide-react'

export default function TeacherDashboard() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Teacher Dashboard</h1>
            <p className="text-sm text-gray-600">Welcome, {user?.fullName}</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            {[
              { id: 'overview', label: 'Overview', icon: BookOpen },
              { id: 'groups', label: 'Groups & Students', icon: Users },
              { id: 'sequences', label: 'Didactic Sequences', icon: FileText },
              { id: 'challenges', label: 'Learning Challenges', icon: Zap },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`px-4 py-4 font-medium text-sm flex items-center gap-2 border-b-2 transition-colors ${
                  activeTab === id
                    ? 'border-gray-800 text-gray-900'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Quick actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
                <div className="text-3xl font-bold text-gray-900 mb-1">0</div>
                <div className="text-sm text-gray-600">Active Groups</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
                <div className="text-3xl font-bold text-gray-900 mb-1">0</div>
                <div className="text-sm text-gray-600">Registered Students</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
                <div className="text-3xl font-bold text-gray-900 mb-1">0</div>
                <div className="text-sm text-gray-600">Active Challenges</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
                <div className="text-3xl font-bold text-gray-900 mb-1">0</div>
                <div className="text-sm text-gray-600">Evidence Submitted</div>
              </div>
            </div>

            {/* Getting started */}
            <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Getting Started</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-semibold text-gray-700 w-6 h-6 flex items-center justify-center bg-gray-300 rounded-full">1</span>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Create or join a group</p>
                    <p className="text-xs text-gray-600">Add your classes and student roster</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-semibold text-gray-700 w-6 h-6 flex items-center justify-center bg-gray-300 rounded-full">2</span>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Design a didactic sequence</p>
                    <p className="text-xs text-gray-600">Use AI to help create your learning roadmap</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-semibold text-gray-700 w-6 h-6 flex items-center justify-center bg-gray-300 rounded-full">3</span>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Create learning challenges</p>
                    <p className="text-xs text-gray-600">Build engaging tasks for your students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Groups & Students Tab */}
        {activeTab === 'groups' && (
          <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Groups & Students</h2>
              <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                Create Group
              </button>
            </div>
            <p className="text-gray-600 text-sm">No groups created yet. Create your first group to get started.</p>
          </div>
        )}

        {/* Didactic Sequences Tab */}
        {activeTab === 'sequences' && (
          <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Didactic Sequences</h2>
              <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                Create Sequence
              </button>
            </div>
            <p className="text-gray-600 text-sm">No sequences created yet. Use AI to help you design your first sequence.</p>
          </div>
        )}

        {/* Learning Challenges Tab */}
        {activeTab === 'challenges' && (
          <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Learning Challenges</h2>
              <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                Create Challenge
              </button>
            </div>
            <p className="text-gray-600 text-sm">No challenges created yet. Create your first challenge after designing a sequence.</p>
          </div>
        )}
      </div>
    </div>
  )
}
