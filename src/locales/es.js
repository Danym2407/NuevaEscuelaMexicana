/**
 * Spanish translations (i18n)
 * All user-facing text is in Spanish
 * Code, variable names, and logic remain in English
 */

export const es = {
  common: {
    welcome: 'Bienvenido',
    logout: 'Cerrar sesión',
    loading: 'Cargando...',
    error: 'Error',
    success: 'Éxito',
    cancel: 'Cancelar',
    save: 'Guardar',
    delete: 'Eliminar',
    edit: 'Editar',
    create: 'Crear',
    back: 'Atrás',
    next: 'Siguiente',
    previous: 'Anterior',
    close: 'Cerrar',
    search: 'Buscar',
    filter: 'Filtrar',
  },

  dashboard: {
    title: 'Panel de Control',
    welcomeMessage: 'Bienvenido',
    getStarted: 'Primeros pasos',
  },

  teacher: {
    dashboard: {
      title: 'Panel de Control del Docente',
      pageTitle: 'Panel Docente',
      gettingStartedTitle: 'Primeros pasos',
    },
    tabs: {
      overview: 'Resumen',
      groups: 'Grupos y Estudiantes',
      sequences: 'Secuencias Didácticas',
      challenges: 'Retos de Aprendizaje',
    },
    stats: {
      activeGroups: 'Grupos Activos',
      registeredStudents: 'Estudiantes Registrados',
      activeChallenges: 'Retos Activos',
      evidenceSubmitted: 'Evidencia Presentada',
    },
    actions: {
      createGroup: 'Crear Grupo',
      createSequence: 'Crear Secuencia',
      createChallenge: 'Crear Reto',
    },
    steps: [
      {
        number: 1,
        title: 'Crear o unirse a un grupo',
        description: 'Agrega tus cursos y lista de estudiantes',
      },
      {
        number: 2,
        title: 'Diseñar una secuencia didáctica',
        description: 'Usa IA para ayudarte a crear tu mapa de aprendizaje',
      },
      {
        number: 3,
        title: 'Crear retos de aprendizaje',
        description: 'Construye tareas interesantes para tus estudiantes',
      },
    ],
    emptyStates: {
      groups: 'No hay grupos creados. Crea tu primer grupo para comenzar.',
      sequences:
        'No hay secuencias creadas. Usa IA para diseñar tu primera secuencia.',
      challenges:
        'No hay retos creados. Crea tu primer reto después de diseñar una secuencia.',
    },
  },

  student: {
    dashboard: {
      title: 'Panel de Control del Estudiante',
      pageTitle: 'Mi Panel de Estudiante',
    },
    tabs: {
      challenges: 'Mis Retos',
      submissions: 'Mis Entregas',
      progress: 'Mi Progreso',
    },
    stats: {
      activeChallenges: 'Retos Activos',
      submittedEvidence: 'Evidencia Presentada',
      pendingReview: 'Pendiente de Revisión',
      completed: 'Completados',
    },
  },

  admin: {
    dashboard: {
      title: 'Panel de Control de Administrador',
      pageTitle: 'Panel Administrativo',
    },
    tabs: {
      overview: 'Resumen',
      users: 'Usuarios',
      reports: 'Reportes',
      settings: 'Configuración',
    },
    stats: {
      totalUsers: 'Usuarios Totales',
      activeTeachers: 'Docentes Activos',
      activeStudents: 'Estudiantes Activos',
      totalChallenges: 'Retos Totales',
    },
  },

  auth: {
    login: 'Iniciar sesión',
    register: 'Registrarse',
    email: 'Correo electrónico',
    password: 'Contraseña',
    confirmPassword: 'Confirmar contraseña',
    rememberMe: 'Recuérdame',
    forgotPassword: '¿Olvidaste tu contraseña?',
    noAccount: '¿No tienes cuenta?',
    haveAccount: '¿Ya tienes cuenta?',
  },

  errors: {
    required: 'Este campo es requerido',
    invalidEmail: 'Correo electrónico inválido',
    passwordMismatch: 'Las contraseñas no coinciden',
    connectionError: 'Error de conexión. Por favor, intenta de nuevo.',
    unauthorized: 'Usuario o contraseña incorrectos',
    serverError: 'Error del servidor. Por favor, intenta más tarde.',
  },
}

export default es
