import { useNavigate } from 'react-router-dom'
import { Users, BookOpen, Settings } from 'lucide-react'

export default function RoleSelectionPage() {
  const navigate = useNavigate()

  const roles = [
    {
      id: 'teacher',
      label: 'Soy Docente',
      description: 'Diseña retos alineados a la NEM para tus estudiantes.',
      icon: BookOpen,
      color: 'bg-gray-100',
      iconColor: 'text-gray-600',
    },
    {
      id: 'student',
      label: 'Soy Estudiante',
      description: 'Entra a resolver los retos y demuestra lo que sabes.',
      color: 'bg-gray-100',
      icon: Users,
      iconColor: 'text-gray-600',
    },
    {
      id: 'admin',
      label: 'Administrativo',
      description: 'Gestiona la plataforma y consulta estadísticas globales.',
      color: 'bg-gray-100',
      icon: Settings,
      iconColor: 'text-gray-600',
    },
  ]

  const handleRoleSelect = (roleId) => {
    // Navega a login, el login manejará el rol según el usuario que inicie sesión
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 safe-top safe-bottom">
      {/* Header */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-800">
            <span className="text-xl font-bold text-gray-50">NEM</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Nueva Escuela Mexicana</h1>
        </div>
        <div className="inline-block px-4 py-2 bg-gray-300 text-gray-800 text-sm font-semibold rounded-full mb-4">
          ESCUELA PRIMARIA GENERAL
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Fase 4 - Retos de Aprendizaje</h2>
        <p className="text-gray-600 text-lg">
          Selecciona tu perfil para continuar con el diseño o resolución de retos educativos.
        </p>
      </div>

      {/* Role Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto mb-8">
        {roles.map((role) => {
          const Icon = role.icon
          return (
            <button
              key={role.id}
              onClick={() => handleRoleSelect(role.id)}
              className="group bg-gray-50 border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center transform hover:-translate-y-2 hover:scale-105"
            >
              {/* Icon Container */}
              <div className={`${role.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`w-10 h-10 ${role.iconColor}`} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{role.label}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">{role.description}</p>

              {/* Button */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <span className="inline-flex items-center gap-2 text-gray-700 font-semibold group-hover:gap-3 transition-all duration-300">
                  Continuar
                  <span>→</span>
                </span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Footer */}
      <div className="text-center text-gray-500 text-sm mt-8">
        <p>Nueva Escuela Mexicana © 2026</p>
      </div>
    </div>
  )
}
