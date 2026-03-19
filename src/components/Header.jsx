import { useAuth } from '../contexts/AuthContext'
import { LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  // Map roles to Spanish names
  const getRoleDisplay = (role) => {
    const roleMap = {
      teacher: 'Docente',
      student: 'Estudiante',
      admin: 'Administrador',
    }
    return roleMap[role] || role
  }

  return (
    <header className="bg-gray-800 text-gray-50 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Logo and Title */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded bg-gray-50">
              <span className="text-lg font-bold text-gray-800">NEM</span>
            </div>
            <span className="text-lg font-semibold">Reto Fase 4</span>
          </div>

          {/* Right side - User Info and Logo */}
          <div className="flex items-center gap-6">
            {/* User Info */}
            <div className="text-right">
              <p className="text-sm opacity-75">{getRoleDisplay(user?.role)}</p>
              <p className="font-semibold text-base">
                {user?.first_name || user?.username}
              </p>
            </div>

            {/* Logo */}
            <div className="flex items-center gap-4">
              {/* Check if logo exists */}
              <img
                src="/logo.png"
                alt="Logo"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  // If logo doesn't exist, show nothing or a placeholder
                  e.target.style.display = 'none'
                }}
              />

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors duration-200 text-gray-50"
                title="Cerrar sesión"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm">Salir</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
