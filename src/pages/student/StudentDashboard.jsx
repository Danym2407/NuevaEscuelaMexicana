import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { LogOut, Target, MessageCircle, Upload } from 'lucide-react'

export default function StudentDashboard() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('challenges')

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
            <h1 className="text-2xl font-bold text-gray-900">My Learning Center</h1>
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
              { id: 'challenges', label: 'My Challenges', icon: Target },
              { id: 'progress', label: 'My Progress', icon: Upload },
              { id: 'evidence', label: 'Evidence', icon: Upload },
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
        {/* My Challenges Tab */}
        {activeTab === 'challenges' && (
          <div className="space-y-6">
            {/* Quick info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
                <div className="text-3xl font-bold text-gray-900 mb-1">0</div>
                <div className="text-sm text-gray-600">Active Challenges</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
                <div className="text-3xl font-bold text-gray-900 mb-1">0</div>
                <div className="text-sm text-gray-600">Completed</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
                <div className="text-3xl font-bold text-gray-900 mb-1">0%</div>
                <div className="text-sm text-gray-600">Overall Progress</div>
              </div>
            </div>

            {/* Challenges list */}
            <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Available Challenges</h2>
              <div className="space-y-4">
                <div className="text-center py-12">
                  <Target className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-600 text-sm">No challenges assigned yet</p>
                  <p className="text-gray-500 text-xs mt-1">Wait for your teacher to create and assign challenges</p>
                </div>
              </div>
            </div>

            {/* Socrates Tutor */}
            <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="w-6 h-6 text-gray-700" />
                <h3 className="text-lg font-semibold text-gray-900">Sócrates - Your AI Tutor</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Sócrates is your AI-powered learning companion. Ask questions and get personalized guidance while working on challenges.
              </p>
              <button className="w-full px-4 py-2.5 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                Open Chat with Sócrates
              </button>
            </div>
          </div>
        )}

        {/* My Progress Tab */}
        {activeTab === 'progress' && (
          <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">My Progress</h2>
            <div className="text-center py-12">
              <p className="text-gray-600 text-sm">No progress data yet</p>
              <p className="text-gray-500 text-xs mt-1">Complete challenges to see your progress</p>
            </div>
          </div>
        )}

        {/* Evidence Tab */}
        {activeTab === 'evidence' && (
          <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">My Evidence</h2>
              <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                Upload Evidence
              </button>
            </div>
            <div className="text-center py-12">
              <Upload className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-600 text-sm">No evidence submitted yet</p>
              <p className="text-gray-500 text-xs mt-1">Upload your work after completing challenges</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
