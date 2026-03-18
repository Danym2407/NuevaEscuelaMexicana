import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import LoginPage from './pages/LoginPage'
import AdminDashboard from './pages/admin/AdminDashboard'
import TeacherDashboard from './pages/teacher/TeacherDashboard'
import StudentDashboard from './pages/student/StudentDashboard'
import { Loader } from 'lucide-react'

// Protected route component
function ProtectedRoute({ children, requiredRole }) {
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
    return <Navigate to="/login" replace />
  }

  return children
}

function AppRoutes() {
  const { isLoading, isAuthenticated } = useAuth()

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader className="w-8 h-8 animate-spin text-gray-700" />
      </div>
    )
  }

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<LoginPage />} />

      {/* Admin routes */}
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute requiredRole="admin">
            <Routes>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
            </Routes>
          </ProtectedRoute>
        }
      />

      {/* Teacher routes */}
      <Route
        path="/teacher/*"
        element={
          <ProtectedRoute requiredRole="teacher">
            <Routes>
              <Route path="dashboard" element={<TeacherDashboard />} />
              <Route path="*" element={<Navigate to="/teacher/dashboard" replace />} />
            </Routes>
          </ProtectedRoute>
        }
      />

      {/* Student routes */}
      <Route
        path="/student/*"
        element={
          <ProtectedRoute requiredRole="student">
            <Routes>
              <Route path="challenges" element={<StudentDashboard />} />
              <Route path="*" element={<Navigate to="/student/challenges" replace />} />
            </Routes>
          </ProtectedRoute>
        }
      />

      {/* Default redirect */}
      <Route path="/" element={<Navigate to={isAuthenticated ? "/teacher/dashboard" : "/login"} replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  )
}

export default App
