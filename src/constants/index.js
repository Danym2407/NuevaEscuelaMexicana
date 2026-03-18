/**
 * Constants used throughout the application
 */

// User roles
export const USER_ROLES = {
  ADMIN: 'admin',
  TEACHER: 'teacher',
  STUDENT: 'student',
}

// Route paths
export const ROUTES = {
  LOGIN: '/login',
  ADMIN_DASHBOARD: '/admin/dashboard',
  TEACHER_DASHBOARD: '/teacher/dashboard',
  STUDENT_CHALLENGES: '/student/challenges',
  STUDENT_PROGRESS: '/student/progress',
  STUDENT_EVIDENCE: '/student/evidence',
}

// API endpoints
export const API_ENDPOINTS = {
  // Auth
  LOGIN: '/users/login',
  MY_PROFILE: '/users/myProfile',

  // Admin
  INSTITUTIONS: '/admin/institutions',
  USERS: '/admin/users',
  STATISTICS: '/admin/statistics',

  // Teacher
  GROUPS: '/teacher/groups',
  STUDENTS: '/teacher/students',
  SEQUENCES: '/teacher/sequences',
  CHALLENGES: '/teacher/challenges',
  EVIDENCE: '/teacher/evidence',

  // Student
  MY_CHALLENGES: '/student/challenges',
  SUBMIT_EVIDENCE: '/student/evidence',
  MY_PROGRESS: '/student/progress',
  SOCRATES_CHAT: '/student/socrates',
}

// Local storage keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'authToken',
  USER_DATA: 'userData',
  USER_ROLE: 'userRole',
  THEME: 'theme',
  LANGUAGE: 'language',
}

// Messages
export const MESSAGES = {
  NO_DATA: 'No data available',
  LOADING: 'Loading...',
  ERROR: 'An error occurred',
  SUCCESS: 'Operation successful',
  LOGIN_SUCCESS: 'Login successful',
  LOGIN_ERROR: 'Invalid email or password',
}

// HTTP status codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
}

// Validation rules
export const VALIDATION = {
  MIN_PASSWORD_LENGTH: 8,
  MAX_NAME_LENGTH: 100,
  MAX_EMAIL_LENGTH: 255,
}

// Pagination defaults
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  DEFAULT_PAGE: 1,
}

// Form field types
export const FORM_FIELD_TYPES = {
  TEXT: 'text',
  EMAIL: 'email',
  PASSWORD: 'password',
  NUMBER: 'number',
  SELECT: 'select',
  CHECKBOX: 'checkbox',
  RADIO: 'radio',
  TEXTAREA: 'textarea',
  FILE: 'file',
  DATE: 'date',
}

// Challenge status
export const CHALLENGE_STATUS = {
  DRAFT: 'draft',
  ACTIVE: 'active',
  COMPLETED: 'completed',
  ARCHIVED: 'archived',
}

// Formation fields (Campos Formativos - NEM curriculum)
export const FORMATION_FIELDS = {
  LANGUAGE_COMMUNICATION: 'Lenguaje y Comunicación',
  MATHEMATICAL_THINKING: 'Pensamiento Matemático',
  CRITICAL_THINKING: 'Pensamiento Crítico',
  SOCIAL_EMOTIONAL: 'Socio Emocional',
  ARTISTIC_EXPRESSION: 'Expresión Artística',
  PHYSICAL_WELLBEING: 'Bienestar Físico',
}

// Learning evidence types
export const EVIDENCE_TYPES = {
  DOCUMENT: 'document',
  IMAGE: 'image',
  VIDEO: 'video',
  AUDIO: 'audio',
  LINK: 'link',
  TEXT: 'text',
}

// File upload limits
export const FILE_UPLOAD = {
  MAX_FILE_SIZE_MB: 50,
  MAX_FILES: 10,
  ALLOWED_EXTENSIONS: ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.jpg', '.jpeg', '.png', '.gif', '.mp4', '.mov', '.mp3'],
}

// Debounce/Throttle delays (in milliseconds)
export const DELAYS = {
  SEARCH: 300,
  INPUT: 500,
  CLICK: 200,
}

// Animation durations (in milliseconds)
export const ANIMATIONS = {
  SHORT: 150,
  NORMAL: 300,
  LONG: 500,
}

// Breakpoints for responsive design
export const BREAKPOINTS = {
  MOBILE: 640,      // sm
  TABLET: 1024,     // lg
  DESKTOP: 1280,    // xl
}
