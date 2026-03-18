import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Interceptor para agregar el token de autenticación
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, (error) => Promise.reject(error))

// Servicio de autenticación
export const authService = {
  login: async (email, password) => {
    try {
      const response = await apiClient.post('/users/login', {
        email,
        password,
      })
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token)
      }
      return response.data
    } catch (error) {
      throw error.response?.data?.message || 'Login failed'
    }
  },

  getMyProfile: async () => {
    try {
      const response = await apiClient.get('/users/myProfile')
      return response.data
    } catch (error) {
      throw error.response?.data?.message || 'Failed to fetch profile'
    }
  },

  logout: () => {
    localStorage.removeItem('authToken')
  },
}

export default apiClient
