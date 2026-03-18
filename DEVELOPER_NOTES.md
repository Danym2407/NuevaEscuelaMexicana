# Developer Notes & Best Practices

## Code Style Guide

### Naming Conventions (REQUIRED)

**Variables & Functions - camelCase**
```javascript
// ✅ CORRECT
const userName = 'John'
function getUserData() {}
const handleFormSubmit = () => {}

// ❌ WRONG
const user_name = 'John'
function getUserData() {} // Function should be verb
const user_data = {}
```

**Classes & Components - PascalCase**
```javascript
// ✅ CORRECT
class UserService {}
function LoginPage() {}
export const AdminDashboard = () => {}

// ❌ WRONG
class userService {}
function loginPage() {}
const admin_dashboard = () => {}
```

**Constants - UPPERCASE**
```javascript
// ✅ CORRECT
const MAX_RETRIES = 3
const API_TIMEOUT = 5000
const USER_ROLES = { ADMIN: 'admin', TEACHER: 'teacher' }

// ❌ WRONG
const max_retries = 3
const apiTimeout = 5000
const userRoles = {}
```

**Files & Folders - kebab-case or camelCase**
```
// ✅ CORRECT
src/
  pages/LoginPage.jsx
  services/api.js
  contexts/AuthContext.jsx
  utils/helpers.js

// ❌ WRONG
src/
  pages/login-page.jsx
  Services/API.js
  Contexts/auth_context.jsx
```

### English-Only Code (REQUIRED)

**All code must be in English - no Spanish!**

```javascript
// ✅ CORRECT
const handleStudentSubmission = () => {}
// Usuario guardado exitosamente
// Student saved successfully

// ❌ WRONG
const manejarEnvio = () => {}
// Usuario guardado exitosamente (Spanish variable names)
```

### Import Organization

```javascript
// 1. React imports
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'

// 2. UI Component imports
import { Button, Card } from './components'
import { SomeIcon } from 'lucide-react'

// 3. Service/Context imports
import { authService } from '../services/api'
import { useAuth } from '../contexts/AuthContext'

// 4. Utility imports
import { formatDate, debounce } from '../utils/helpers'

// 5. Constants
import { ROUTES, USER_ROLES } from '../constants'

// 6. Styles
import './styles.css'
```

## Component Best Practices

### Functional Components Only

```javascript
// ✅ CORRECT - Functional with hooks
export function UserProfile({ userId }) {
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    loadUser(userId)
  }, [userId])
  
  return <div>{user?.name}</div>
}

// ❌ WRONG - Class components (deprecated pattern)
class UserProfile extends React.Component {
  state = { user: null }
  // ...
}
```

### Props Destructuring

```javascript
// ✅ CORRECT
export function UserCard({ name, email, role }) {
  return <div>{name} - {role}</div>
}

// ✅ ALSO CORRECT - With defaults
export function UserCard({ name = '', email = '', role = 'user' }) {
  return <div>{name}</div>
}

// ❌ WRONG - No destructuring
export function UserCard(props) {
  return <div>{props.name}</div>
}
```

### Custom Hooks

```javascript
// ✅ CORRECT - Reusable hook
function useUserData(userId) {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    loadUser(userId).then(setUser)
  }, [userId])
  
  return { user, isLoading }
}

// Usage
function Profile() {
  const { user, isLoading } = useUserData(123)
  return <div>{user?.name}</div>
}
```

## State Management

### useAuth Context

```javascript
// ✅ CORRECT - Using auth context
function Dashboard() {
  const { user, logout, isAuthenticated } = useAuth()
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }
  
  return <div>Welcome {user?.name}</div>
}
```

### Form State with useForm Hook

```javascript
// ✅ CORRECT
function LoginForm() {
  const { values, errors, handleChange, handleSubmit } = useForm(
    { email: '', password: '' },
    async (values) => {
      await login(values.email, values.password)
    }
  )
  
  return (
    <form onSubmit={handleSubmit}>
      <input name="email" value={values.email} onChange={handleChange} />
      {errors.email && <span>{errors.email}</span>}
    </form>
  )
}
```

## API Calls

### Using the API Service

```javascript
// ✅ CORRECT - With error handling
async function fetchUserData() {
  try {
    const profile = await authService.getMyProfile()
    return profile
  } catch (error) {
    console.error('Failed to fetch profile:', error)
    throw error
  }
}

// ✅ CORRECT - With useAsync hook
function UserView({ userId }) {
  const { execute, data, error, isLoading } = useAsync(
    () => userService.getUser(userId)
  )
  
  if (isLoading) return <Loader />
  if (error) return <ErrorMessage error={error} />
  return <div>{data?.name}</div>
}
```

### Error Handling

```javascript
// ✅ CORRECT - Proper error messages
try {
  const response = await apiClient.post('/login', data)
} catch (error) {
  const message = error.response?.data?.message || 'API error occurred'
  console.error('Login failed:', message)
  setError(message)
}

// ❌ WRONG - Generic errors
try {
  await apiClient.post('/login', data)
} catch (error) {
  console.log('Error') // Not helpful!
  alert('Something went wrong')
}
```

## Styling with Tailwind

### Utility Classes

```javascript
// ✅ CORRECT - Using utility classes
<div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
  <h2 className="text-lg font-semibold text-gray-900">Title</h2>
  <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800">
    Action
  </button>
</div>

// ❌ WRONG - Inline styles
<div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
```

### Responsive Design

```javascript
// ✅ CORRECT - Mobile-first
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Stack on mobile, 2 cols on tablet, 3 cols on desktop */}
</div>

// ✅ CORRECT - Conditional rendering
{isMobileDevice() && <MobileMenu />}
{isTabletDevice() && <TabletView />}
```

### Grayscale Colors Usage

```javascript
// ✅ CORRECT - Using grayscale palette
<div className="bg-gray-50"> {/* Main background */}
  <header className="bg-white border-b border-gray-200">
    <h1 className="text-gray-900">Title</h1>
    <button className="bg-gray-700 hover:bg-gray-800 text-white">
      Primary Action
    </button>
  </header>
</div>
```

## Performance Tips

### Memoization

```javascript
// ✅ CORRECT - Memo for expensive components
const UserCard = React.memo(({ user }) => {
  return <div>{user.name}</div>
})

// ✅ CORRECT - useCallback for handlers
function List({ items }) {
  const handleDelete = useCallback((id) => {
    deleteItem(id)
  }, [])
  
  return items.map(item => (
    <Item key={item.id} onDelete={handleDelete} />
  ))
}
```

### Code Splitting

```javascript
// ✅ CORRECT - Lazy loading routes
const AdminDashboard = React.lazy(() => 
  import('../pages/admin/AdminDashboard')
)

<Suspense fallback={<Loader />}>
  <AdminDashboard />
</Suspense>
```

## Testing Guidelines

### Naming Test Files

```
components/
  UserCard.jsx
  UserCard.test.jsx

pages/
  LoginPage.jsx
  LoginPage.test.jsx
```

### Test Structure

```javascript
// ✅ CORRECT - Clear test structure
describe('LoginPage', () => {
  test('should render login form', () => {
    render(<LoginPage />)
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument()
  })
  
  test('should show error on invalid credentials', async () => {
    // ... test implementation
  })
})
```

## Common Mistakes to Avoid

### ❌ Mistake 1: Missing Dependencies

```javascript
// ❌ WRONG - Missing dependency
useEffect(() => {
  loadData(userId)
}, []) // userId is missing!

// ✅ CORRECT
useEffect(() => {
  loadData(userId)
}, [userId])
```

### ❌ Mistake 2: Key Props in Lists

```javascript
// ❌ WRONG - Using index as key
{items.map((item, index) => (
  <div key={index}>{item.name}</div>
))}

// ✅ CORRECT - Using unique ID
{items.map((item) => (
  <div key={item.id}>{item.name}</div>
))}
```

### ❌ Mistake 3: State in Loops

```javascript
// ❌ WRONG - Creating state in loop
function ItemList() {
  for (let i = 0; i < items.length; i++) {
    const [count, setCount] = useState(0) // ❌ NO! Conditionalcall
  }
}

// ✅ CORRECT - State at component level
function ItemList() {
  const [counts, setCounts] = useState({})
}
```

### ❌ Mistake 4: Forgetting async/await

```javascript
// ❌ WRONG - Promise not awaited
function loadUser() {
  authService.getMyProfile() // Not handling the promise
}

// ✅ CORRECT
async function loadUser() {
  try {
    const user = await authService.getMyProfile()
    setUser(user)
  } catch (error) {
    setError(error)
  }
}
```

## Debugging Tips

### Console Logging (Development Only)

```javascript
// ✅ CORRECT - Helpful logs
console.error('Failed to load user:', userId, error)
console.warn('Slow API response:', apiResponseTime)
console.log('Rendering component:', componentName)

// ❌ WRONG - Vague logs
console.log('Error')
console.log('Done')
```

### React Developer Tools

- Install React DevTools extension
- Inspect component props and state
- Track rendering performance
- Check context values

### Network Debugging

- Open DevTools → Network tab
- Watch API requests/responses
- Check status codes and headers
- Inspect response payloads

## Git Workflow

### Commit Messages Format

```
feat: Add user registration feature
fix: Correct validation error message
refactor: Extract button component
docs: Update API documentation
test: Add login tests
```

### Don't Commit

- `node_modules/`
- `.env.local` (use `.env.example`)
- `dist/` build folder
- `.DS_Store` or platform files
- Console.log() debugging code

## Code Review Checklist

Before requesting code review, verify:

- [ ] All code is in English
- [ ] camelCase for variables/functions
- [ ] PascalCase for components/classes
- [ ] UPPERCASE for constants
- [ ] No console.log() left in code
- [ ] Error handling implemented
- [ ] Props/parameters documented
- [ ] Mobile responsiveness tested
- [ ] No accessibility violations
- [ ] Performance is acceptable

## Questions?

Refer to:
- `README.md` - Project overview
- `COLOR_SYSTEM.md` - Color palette info
- `SETUP_GUIDE.md` - Setup instructions
- Browser console for runtime errors
- Network tab for API issues

---

**Last Updated:** March 18, 2026
