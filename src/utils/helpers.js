/**
 * Utility functions for the application
 */

/**
 * Validate email format
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Format date to readable string
 */
export function formatDate(date, locale = 'en-US') {
  return new Date(date).toLocaleDateString(locale)
}

/**
 * Format time
 */
export function formatTime(date, locale = 'en-US') {
  return new Date(date).toLocaleTimeString(locale)
}

/**
 * Format date and time
 */
export function formatDateTime(date, locale = 'en-US') {
  return new Date(date).toLocaleString(locale)
}

/**
 * Truncate text to specified length
 */
export function truncateText(text, maxLength = 50) {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

/**
 * Get initials from full name
 */
export function getInitials(fullName) {
  return fullName
    .split(' ')
    .map((name) => name[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

/**
 * Debounce function
 */
export function debounce(func, delay = 300) {
  let timeoutId

  return function (...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

/**
 * Throttle function
 */
export function throttle(func, limit = 300) {
  let inThrottle

  return function (...args) {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

/**
 * Check if device is mobile
 */
export function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )
}

/**
 * Check if device is tablet
 */
export function isTabletDevice() {
  return /iPad|Android/i.test(navigator.userAgent) && !isMobileDevice()
}

/**
 * Get viewport size
 */
export function getViewportSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  }
}

/**
 * Local storage utilities
 */
export const localStorageUtils = {
  setItem: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('Error setting localStorage item:', error)
    }
  },

  getItem: (key) => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : null
    } catch (error) {
      console.error('Error getting localStorage item:', error)
      return null
    }
  },

  removeItem: (key) => {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error('Error removing localStorage item:', error)
    }
  },

  clear: () => {
    try {
      localStorage.clear()
    } catch (error) {
      console.error('Error clearing localStorage:', error)
    }
  },
}

/**
 * Deep clone object
 */
export function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof Array) return obj.map((item) => deepClone(item))
  if (obj instanceof Object) {
    const clonedObj = {}
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key])
      }
    }
    return clonedObj
  }
}

/**
 * Group array by property
 */
export function groupBy(array, property) {
  return array.reduce((accumulator, object) => {
    const key = object[property]
    if (!accumulator[key]) {
      accumulator[key] = []
    }
    accumulator[key].push(object)
    return accumulator
  }, {})
}

/**
 * Sort array by property
 */
export function sortBy(array, property, ascending = true) {
  return [...array].sort((a, b) => {
    if (a[property] < b[property]) return ascending ? -1 : 1
    if (a[property] > b[property]) return ascending ? 1 : -1
    return 0
  })
}

/**
 * Filter array by multiple properties
 */
export function filterByMultiple(array, filters) {
  return array.filter((item) =>
    Object.keys(filters).every((key) => item[key] === filters[key]),
  )
}

/**
 * Unique values from array
 */
export function getUniqueValues(array, property) {
  return [...new Set(array.map((item) => item[property]))]
}
