/**
 * DashboardLayout Component (Reusable Template)
 * Base layout for all dashboard pages
 * Handles header, tabs, and main content structure
 */

export default function DashboardLayout({ 
  title, 
  subtitle,
  tabs = [], 
  activeTab, 
  onTabChange,
  children,
  showHeader = true 
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {showHeader && (
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
              {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
            </div>
          </div>
        </header>
      )}

      {/* Tabs Navigation */}
      {tabs.length > 0 && (
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-8">
              {tabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => onTabChange?.(id)}
                  className={`px-4 py-4 font-medium text-sm flex items-center gap-2 border-b-2 transition-colors ${
                    activeTab === id
                      ? 'border-gray-800 text-gray-900'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
    </div>
  )
}
