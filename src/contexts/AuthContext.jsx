import { createContext, useContext, useState, useEffect } from 'react'
import { authService } from '../services/api'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Check if user is already authenticated on mount
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('authToken')
      if (token) {
        try {
          const profile = await authService.getMyProfile()
          setUser(profile)
          setIsAuthenticated(true)
        } catch (err) {
          console.error('Auth check failed:', err)
          localStorage.removeItem('authToken')
          setIsAuthenticated(false)
        }
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [])

  const login = async (email, password) => {
    try {
      setIsLoading(true)
      setError(null)
      const response = await authService.login(email, password)
      const profile = await authService.getMyProfile()
      setUser(profile)
      setIsAuthenticated(true)
      return profile
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Login failed'
      setError(errorMessage)
      setIsAuthenticated(false)
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    authService.logout()
    setUser(null)
    setIsAuthenticated(false)
    setError(null)
  }

  const value = {
    user,
    isLoading,
    error,
    isAuthenticated,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
