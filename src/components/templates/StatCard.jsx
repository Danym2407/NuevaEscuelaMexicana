/**
 * StatCard Component (Reusable)
 * Display a key statistic with label and value
 */

export default function StatCard({ value = 0, label, icon: Icon, variant = 'default' }) {
  const variants = {
    default: 'bg-white border-gray-200',
    primary: 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-300',
    success: 'bg-gradient-to-br from-green-50 to-green-100 border-green-200',
    warning: 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200',
    danger: 'bg-gradient-to-br from-red-50 to-red-100 border-red-200',
  }

  return (
    <div className={`rounded-lg shadow p-6 border ${variants[variant]}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium mb-2">{label}</p>
          <p className="text-4xl font-bold text-gray-900">{value}</p>
        </div>
        {Icon && <Icon className="w-8 h-8 text-gray-400" />}
      </div>
    </div>
  )
}
