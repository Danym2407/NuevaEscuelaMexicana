import { forwardRef } from 'react'

/**
 * Button component with consistent styling
 */
export const Button = forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      disabled = false,
      className = '',
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      'font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary: 'bg-gray-700 text-white hover:bg-gray-800 focus:ring-gray-700',
      secondary: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
      danger: 'bg-gray-700 text-white hover:bg-gray-800 focus:ring-gray-700',
    }

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2.5 text-sm',
      lg: 'px-6 py-3 text-base',
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'

/**
 * Card component for content containers
 */
export function Card({ children, className = '', ...props }) {
  return (
    <div
      className={`bg-white rounded-lg shadow border border-gray-200 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

/**
 * Card header
 */
export function CardHeader({ children, className = '' }) {
  return <div className={`px-6 py-4 border-b border-gray-200 ${className}`}>{children}</div>
}

/**
 * Card content
 */
export function CardContent({ children, className = '' }) {
  return <div className={`p-6 ${className}`}>{children}</div>
}

/**
 * Card footer
 */
export function CardFooter({ children, className = '' }) {
  return (
    <div className={`px-6 py-4 border-t border-gray-200 flex gap-3 ${className}`}>{children}</div>
  )
}

/**
 * Input field component
 */
export const Input = forwardRef(({ className = '', ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 bg-white text-gray-900 placeholder-gray-500 ${className}`}
      {...props}
    />
  )
})

Input.displayName = 'Input'

/**
 * Label component
 */
export function Label({ htmlFor, children, className = '' }) {
  return (
    <label htmlFor={htmlFor} className={`block text-sm font-medium text-gray-700 ${className}`}>
      {children}
    </label>
  )
}

/**
 * Badge component
 */
export function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-gray-200 text-gray-800',
    success: 'bg-gray-100 text-gray-900',
    warning: 'bg-gray-200 text-gray-800',
    error: 'bg-gray-200 text-gray-800',
  }

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}

/**
 * Alert component
 */
export function Alert({ children, variant = 'info', icon: Icon, className = '' }) {
  const variants = {
    info: 'bg-gray-50 border-gray-300 text-gray-700',
    success: 'bg-gray-50 border-gray-300 text-gray-700',
    warning: 'bg-gray-50 border-gray-300 text-gray-700',
    error: 'bg-gray-50 border-gray-300 text-gray-700',
  }

  return (
    <div className={`flex items-start gap-3 p-4 border rounded-lg ${variants[variant]} ${className}`}>
      {Icon && <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />}
      <div>{children}</div>
    </div>
  )
}

/**
 * Spinner component
 */
export function Spinner({ size = 'md', className = '' }) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  }

  return <div className={`animate-spin rounded-full border-4 border-gray-200 border-t-gray-700 ${sizes[size]} ${className}`} />
}

/**
 * Empty state component
 */
export function EmptyState({ icon: Icon, title, description, action, className = '' }) {
  return (
    <div className={`text-center py-12 ${className}`}>
      {Icon && <Icon className="w-12 h-12 text-gray-300 mx-auto mb-3" />}
      <p className="text-gray-700 font-medium mb-1">{title}</p>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      {action}
    </div>
  )
}

/**
 * Loading skeleton
 */
export function Skeleton({ className = '', ...props }) {
  return (
    <div
      className={`bg-gray-200 animate-pulse rounded ${className}`}
      {...props}
    />
  )
}
