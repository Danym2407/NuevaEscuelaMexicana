# ⚡ Quick Reference - Commands & Tips

## 🚀 Essential Commands

### Start Development
```bash
npm run dev
```
- Opens `http://localhost:5173`
- Hot reload enabled
- Code auto-formats on save

### Build for Production
```bash
npm run build
```
- Creates optimized `dist/` folder
- File size: ~76 KB gzipped
- Ready for deployment

### Preview Build
```bash
npm run preview
```
- Serve the production build locally
- Test before deploying

### Lint Code
```bash
npm run lint
```
- Check code quality
- Fix errors before commit

---

## 📋 Environment Setup

### Create `.env.local`
```bash
VITE_API_URL=http://localhost:3000/api
```
**Change `3000` to your backend port**

### Create Test User (Backend)
You'll need:
- Email: test@example.com
- Password: password123
- Role: admin / teacher / student

---

## 🧭 Navigation

### After Login
| Role | URL | Page |
|------|-----|------|
| Admin | `/admin/dashboard` | Admin Panel |
| Teacher | `/teacher/dashboard` | Teacher Dashboard |
| Student | `/student/challenges` | Student Hub |

### Public Routes
| Route | Page |
|-------|------|
| `/login` | Login Form |
| `/` | Redirects to login or dashboard |

---

## 🎨 Color Changing (Quick Guide)

### Currently Using: Grayscale
All colors use `gray-X00` classes (gray-50 to gray-900)

### When You Have Brand Colors:

1. **Open** `tailwind.config.js`
2. **Replace** in `theme.extend.colors`:
```javascript
gray: {
  50: '#YOUR_LIGHT_COLOR',
  700: '#YOUR_PRIMARY_COLOR',
  900: '#YOUR_DARK_COLOR',
}
```
3. **Or** add new colors:
```javascript
primary: '#YOUR_COLOR',
secondary: '#YOUR_COLOR',
```
4. **Replace** classes in components:
```jsx
// Old
className="bg-gray-700"

// New
className="bg-primary"
```

---

## 🐛 Common Issues & Fixes

### Port 5173 Already in Use
```bash
# Edit vite.config.js
server: {
  port: 5174,  // Change number
}
```

### API Connection Failed
- ✓ Check backend is running
- ✓ Verify port in `.env.local`
- ✓ Look at Network tab in DevTools
- ✓ Check CORS in backend

### Module Not Found Error
- ✓ Check import path is correct
- ✓ Use `.jsx` extension for components
- ✓ Check exported name matches import

### Build Fails
```bash
# Clear and reinstall
rm -r node_modules package-lock.json
npm install
npm run build
```

---

## 📁 Add New Page

### Example: New Teacher Feature

1. **Create file**: `src/pages/teacher/ClassManagement.jsx`
```javascript
export default function ClassManagement() {
  return <div>Class Management</div>
}
```

2. **Add route** in `src/App.jsx`:
```javascript
import ClassManagement from './pages/teacher/ClassManagement'

<Route path="/teacher/classes" element={<ClassManagement />} />
```

3. **Add link** in sidebar/navigation

---

## 📦 Add New Component

### Example: User Avatar Component

1. **Create file**: `src/components/UserAvatar.jsx`
```javascript
export function UserAvatar({ name, size = 'md' }) {
  const initials = name.split(' ').map(n => n[0]).join('')
  
  return (
    <div className="flex items-center justify-center rounded-full bg-gray-300">
      {initials}
    </div>
  )
}
```

2. **Use in another file**:
```javascript
import { UserAvatar } from './components/UserAvatar'

<UserAvatar name="John Doe" />
```

---

## 🎯 API Integration Pattern

### Example: Fetch Students

1. **Add endpoint** in `src/constants/index.js`:
```javascript
API_ENDPOINTS: {
  STUDENTS: '/teacher/students',
}
```

2. **Create service** in `src/services/api.js`:
```javascript
export const teacherService = {
  getStudents: async (groupId) => {
    const response = await apiClient.get(`/teacher/students?group=${groupId}`)
    return response.data
  },
}
```

3. **Use in component**:
```javascript
import { teacherService } from '../services/api'
import { useAsync } from '../hooks/useCustomHooks'

function StudentList({ groupId }) {
  const { data: students, isLoading } = useAsync(
    () => teacherService.getStudents(groupId)
  )
  
  return students?.map(s => <StudentCard key={s.id} student={s} />)
}
```

---

## 🎨 Styling Quick Tips

### Common Patterns

**Primary Button**
```jsx
<button className="px-4 py-2 bg-gray-700 text-white hover:bg-gray-800 rounded-lg">
  Click me
</button>
```

**Card**
```jsx
<div className="bg-white rounded-lg shadow border border-gray-200 p-6">
  Content here
</div>
```

**Input Field**  
```jsx
<input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-gray-500 focus:ring-1 focus:ring-gray-500" />
```

**Responsive Grid**
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Items */}
</div>
```

---

## 🔐 Using Protected Routes

### Already Protected
- `/admin/*` - Only admins
- `/teacher/*` - Only teachers
- `/student/*` - Only students

### Create New Protected Route
```javascript
import { ProtectedRoute } from '../components/ProtectedRoute'

<Route
  path="/admin/settings"
  element={
    <ProtectedRoute requiredRole="admin">
      <AdminSettings />
    </ProtectedRoute>
  }
/>
```

---

## 🚀 Deploy to Production

### Build
```bash
npm run build
```

### Deploy `dist/` folder to:
- Vercel
- Netlify
- GitHub Pages
- Your server

### Update backend URL
- Change `VITE_API_URL` in production `.env`
- Deploy `dist/` folder only

---

## 📊 File Reference

| File | Purpose |
|------|---------|
| `tailwind.config.js` | Colors, spacing, fonts |
| `vite.config.js` | Build settings, ports |
| `src/constants/index.js` | All constants & strings |
| `src/services/api.js` | All API calls |
| `src/contexts/AuthContext.jsx` | Auth state |
| `src/App.jsx` | All routes |

---

## 🎯 Useful Keyboard Shortcuts (DevTools)

| Shortcut | Action |
|----------|--------|
| `F12` | Open DevTools |
| `Ctrl+Shift+C` | Inspect element |
| `Ctrl+Shift+J` | Open console |
| `Ctrl+Shift+I` | Open inspector |
| `Ctrl+Shift+M` | Toggle device toolbar |

---

## 💡 Pro Tips

1. **Use React DevTools** - Inspect component props & state
2. **Check Network tab** - See API requests/responses
3. **Use Chrome DevTools Device Emulation** - Test mobile
4. **Keep components small** - Easier to test & maintain
5. **Use custom hooks** - Share logic between components
6. **Document complex code** - Help future developers

---

## 📞 Quick Help

**Need to...** | **File**
---|---
...change colors | `COLOR_PALETTE_REFERENCE.md`
...add a page | `README.md` > Project Structure
...understand the flow | `DEVELOPER_NOTES.md`
...understand setup | `SETUP_GUIDE.md`

---

**Last Updated**: March 18, 2026
