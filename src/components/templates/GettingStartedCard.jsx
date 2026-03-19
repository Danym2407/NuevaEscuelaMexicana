/**
 * GettingStartedCard Component (Reusable)
 * Display a list of sequential steps for onboarding
 */

export default function GettingStartedCard({ title, steps = [] }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">{title}</h2>
      <div className="space-y-3">
        {steps.map((step) => (
          <div key={step.number} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
            <span className="text-sm font-semibold text-gray-700 w-6 h-6 flex items-center justify-center bg-gray-300 rounded-full flex-shrink-0">
              {step.number}
            </span>
            <div className="flex-1">
              <p className="font-medium text-gray-900">{step.title}</p>
              <p className="text-xs text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
