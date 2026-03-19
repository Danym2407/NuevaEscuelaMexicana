/**
 * EmptyState Component (Reusable)
 * Display a friendly message when there are no items
 */

import { AlertCircle } from 'lucide-react'

export default function EmptyState({ 
  title, 
  message, 
  icon: Icon = AlertCircle,
  action = null 
}) {
  return (
    <div className="bg-white rounded-lg shadow p-12 border border-gray-200 text-center">
      <div className="flex justify-center mb-4">
        <Icon className="w-12 h-12 text-gray-400" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6">{message}</p>
      {action && (
        <button className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium">
          {action.label}
        </button>
      )}
    </div>
  )
}
