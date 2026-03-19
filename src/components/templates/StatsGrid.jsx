/**
 * StatsGrid Component (Reusable)
 * Display multiple statistics in a responsive grid
 */

export default function StatsGrid({ stats = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="bg-white rounded-lg shadow p-6 border border-gray-200 hover:shadow-lg transition-shadow"
        >
          <div className="text-sm text-gray-600 font-medium mb-2">{stat.label}</div>
          <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
          {stat.change && (
            <div className={`text-xs font-medium mt-2 ${
              stat.change > 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change > 0 ? '+' : ''}{stat.change}%
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
