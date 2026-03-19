/**
 * TabNavigation Component (Reusable)
 * Render tab buttons with icons and labels
 */

export default function TabNavigation({ 
  tabs = [], 
  activeTab, 
  onTabChange,
  variant = 'default' 
}) {
  const variants = {
    default: {
      container: 'bg-white border-b border-gray-200',
      activeButton: 'border-gray-800 text-gray-900',
      inactiveButton: 'border-transparent text-gray-600 hover:text-gray-900',
    },
    dark: {
      container: 'bg-gray-900 border-b border-gray-800',
      activeButton: 'border-white text-white',
      inactiveButton: 'border-transparent text-gray-400 hover:text-gray-300',
    },
  }

  const styles = variants[variant]

  return (
    <div className={styles.container}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => onTabChange?.(id)}
              className={`px-4 py-4 font-medium text-sm flex items-center gap-2 border-b-2 transition-colors ${
                activeTab === id ? styles.activeButton : styles.inactiveButton
              }`}
            >
              {Icon && <Icon className="w-4 h-4" />}
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
