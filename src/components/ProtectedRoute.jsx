import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Loader } from 'lucide-react'

/**
 * Protected route wrapper that checks authentication and user role
 */
export function ProtectedRoute({ children, requiredRole = null }) {
  const { isAuthenticated, user, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader className="w-8 h-8 animate-spin text-gray-700" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (requiredRole && user?.role !== requiredRole) {
    // User is authenticated but doesn't have the required role
    // Redirect to their home dashboard based on their role
    const roleRoutes = {
      admin: '/admin/dashboard',
      teacher: '/teacher/dashboard',
      student: '/student/challenges',
    }
    return <Navigate to={roleRoutes[user?.role] || '/login'} replace />
  }

  return children
}

/**
 * Public route wrapper that redirects authenticated users
 */
export function PublicRoute({ children, redirectTo = '/' }) {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader className="w-8 h-8 animate-spin text-gray-700" />
      </div>
    )
  }

  if (isAuthenticated) {
    return <Navigate to={redirectTo} replace />
  }

  return children
}
