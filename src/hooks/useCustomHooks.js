import { useState, useCallback } from 'react'

/**
 * Custom hook for form state management
 */
export function useForm(initialValues, onSubmit) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target
    setValues((prevValues) => ({
      ...prevValues,
      [name]: type === 'checkbox' ? checked : value,
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined,
      }))
    }
  }, [errors])

  const handleBlur = useCallback((e) => {
    const { name } = e.target
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }))
  }, [])

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      setIsSubmitting(true)
      try {
        await onSubmit(values)
      } catch (error) {
        console.error('Form submission error:', error)
      } finally {
        setIsSubmitting(false)
      }
    },
    [values, onSubmit],
  )

  const setFieldValue = useCallback((name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }, [])

  const setFieldError = useCallback((name, error) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }))
  }, [])

  const resetForm = useCallback(() => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
  }, [initialValues])

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    setFieldError,
    resetForm,
  }
}

/**
 * Custom hook for async data fetching
 */
export function useAsync(asyncFunction, immediate = true) {
  const [status, setStatus] = useState('idle')
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const execute = useCallback(async (...args) => {
    setStatus('pending')
    setData(null)
    setError(null)

    try {
      const response = await asyncFunction(...args)
      setData(response)
      setStatus('success')
      return response
    } catch (err) {
      setError(err)
      setStatus('error')
      throw err
    }
  }, [asyncFunction])

  useEffect(() => {
    if (immediate) {
      execute()
    }
  }, [execute, immediate])

  return { execute, status, data, error, isLoading: status === 'pending' }
}

/**
 * Custom hook for API calls with loading and error handling
 */
export function useAPI(apiFunction) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  const call = useCallback(
    async (...args) => {
      setIsLoading(true)
      setError(null)
      try {
        const result = await apiFunction(...args)
        setData(result)
        return result
      } catch (err) {
        const errorMessage = err.message || 'An error occurred'
        setError(errorMessage)
        throw err
      } finally {
        setIsLoading(false)
      }
    },
    [apiFunction],
  )

  return { call, isLoading, error, data }
}

/**
 * Custom hook for URL search parameters
 */
export function useSearchParams() {
  const navigate = useNavigate()
  const params = new URLSearchParams(location.search)

  const updateParams = useCallback(
    (newParams) => {
      const updated = new URLSearchParams(params)
      Object.entries(newParams).forEach(([key, value]) => {
        if (value === null) {
          updated.delete(key)
        } else {
          updated.set(key, value)
        }
      })
      navigate(`?${updated.toString()}`)
    },
    [params, navigate],
  )

  return { params, updateParams }
}

/**
 * Custom hook for localStorage state
 */
export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error('Error reading localStorage:', error)
      return initialValue
    }
  })

  const setValue = useCallback(
    (value) => {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      try {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      } catch (error) {
        console.error('Error writing to localStorage:', error)
      }
    },
    [key, storedValue],
  )

  const removeValue = useCallback(() => {
    try {
      window.localStorage.removeItem(key)
      setStoredValue(initialValue)
    } catch (error) {
      console.error('Error removing from localStorage:', error)
    }
  }, [key, initialValue])

  return [storedValue, setValue, removeValue]
}

/**
 * Custom hook for window size
 */
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

/**
 * Custom hook for media queries
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }

    const listener = () => {
      setMatches(media.matches)
    }

    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [matches, query])

  return matches
}

// Note: useEffect must be imported from React where this is used
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
