import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { LogOut, Building2, Users, BarChart3 } from 'lucide-react'

export default function AdminDashboard() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

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
            <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
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

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Institution Management Card */}
          <div className="bg-white rounded-lg shadow p-6 border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gray-100 rounded-lg">
                <Building2 className="w-6 h-6 text-gray-700" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">Institutions</h2>
            </div>
            <p className="text-gray-600 text-sm mb-4">Manage schools and educational institutions</p>
            <button className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
              Manage Institutions
            </button>
          </div>

          {/* User Management Card */}
          <div className="bg-white rounded-lg shadow p-6 border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gray-100 rounded-lg">
                <Users className="w-6 h-6 text-gray-700" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">Users</h2>
            </div>
            <p className="text-gray-600 text-sm mb-4">Manage teachers and administrators</p>
            <button className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
              Manage Users
            </button>
          </div>

          {/* Statistics Card */}
          <div className="bg-white rounded-lg shadow p-6 border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gray-100 rounded-lg">
                <BarChart3 className="w-6 h-6 text-gray-700" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">Statistics</h2>
            </div>
            <p className="text-gray-600 text-sm mb-4">View system-wide metrics and analytics</p>
            <button className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
              View Statistics
            </button>
          </div>
        </div>

        {/* Upcoming sections */}
        <div className="mt-12 bg-white rounded-lg shadow p-6 border border-gray-300">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Features Coming Soon</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              AI-powered pedagogical analysis dashboard
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              Automated AI-assisted administrative reports
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              AI consumption metrics and usage tracking
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
