import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Mail, Lock, AlertCircle, Loader } from 'lucide-react'

export default function LoginPage() {
  const navigate = useNavigate()
  const { login, isLoading, error: authError } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }

    try {
      const user = await login(email, password)
      // Route based on user role
      if (user.role === 'teacher') {
        navigate('/teacher/dashboard')
      } else if (user.role === 'student') {
        navigate('/student/challenges')
      } else if (user.role === 'admin') {
        navigate('/admin/dashboard')
      }
    } catch (err) {
      setError(err.message || 'Login failed')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 safe-top safe-bottom">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-200 mb-4">
            <span className="text-xl font-bold text-gray-800">NEM</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Nueva Escuela Mexicana</h1>
          <p className="mt-2 text-gray-600">Sign in to your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow px-6 py-8 space-y-6">
          {/* Error messages */}
          {(error || authError) && (
            <div className="flex items-start gap-3 p-4 bg-gray-100 border border-gray-300 rounded-lg">
              <AlertCircle className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-700">{error || authError}</p>
            </div>
          )}

          {/* Email field */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 bg-white text-gray-900 placeholder-gray-500"
                placeholder="you@example.com"
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Password field */}
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 bg-white text-gray-900 placeholder-gray-500"
                placeholder="Your password"
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2.5 px-4 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader className="w-4 h-4 animate-spin" />
                Signing in...
              </>
            ) : (
              'Sign in'
            )}
          </button>

          {/* Footer text */}
          <div className="text-center pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Demo credentials: Use the provided test account
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
