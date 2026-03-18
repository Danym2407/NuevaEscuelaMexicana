# Setup Guide - Nueva Escuela Mexicana Project

## ✅ Project Successfully Created!

Congratulations! Your Nueva Escuela Mexicana platform is ready for development. Here's what has been set up:

## 📦 What's Included

### Project Structure
- ✅ React 18.3 with Vite 7.3 (lightning-fast builds)
- ✅ Tailwind CSS 3.4 for responsive, utility-first styling
- ✅ Radix UI components for accessible interfaces
- ✅ Framer Motion for smooth animations
- ✅ Lucide React for consistent iconography
- ✅ React Router v6 for client-side routing
- ✅ Axios for HTTP requests
- ✅ ESLint for code quality

### Modules Configured
- ✅ **Admin Module** - AdminDashboard.jsx
- ✅ **Teacher Module** - TeacherDashboard.jsx
- ✅ **Student Module** - StudentDashboard.jsx
- ✅ **Authentication System** - Login + AuthContext
- ✅ **Protected Routes** - Role-based access control

### Architecture
- ✅ API service layer with axios interceptor
- ✅ Auth context for global state management
- ✅ Base components (Button, Card, Input, etc.)
- ✅ Custom hooks (useForm, useAsync, useAPI, etc.)
- ✅ Utility functions and constants
- ✅ Grayscale color system (ready for brand colors)

## 🚀 Getting Started

### 1. Start Development Server
```bash
npm run dev
```

This will:
- Start Vite dev server on http://localhost:5173
- Enable Hot Module Replacement (HMR)
- Auto-format code on save (with configured formatter)

### 2. Configure API Endpoint
Update `.env.local`:
```
VITE_API_URL=http://localhost:YOUR_BACKEND_PORT/api
```

### 3. Test Login
Use credentials from your backend to test:
- Admin role will show admin dashboard
- Teacher role will show teacher dashboard
- Student role will show student dashboard

## 📁 Project Structure

```
NuevaEscuelaMexicana/
├── src/
│   ├── pages/              # Page-level components
│   │   ├── LoginPage.jsx
│   │   ├── admin/
│   │   ├── teacher/
│   │   └── student/
│   ├── components/         # Reusable UI components
│   │   ├── base/BaseComponents.jsx
│   │   └── ProtectedRoute.jsx
│   ├── contexts/           # React contexts
│   │   └── AuthContext.jsx
│   ├── services/           # API & business logic
│   │   └── api.js
│   ├── hooks/              # Custom React hooks
│   │   └── useCustomHooks.js
│   ├── utils/              # Utility functions
│   │   └── helpers.js
│   ├── constants/          # Application constants
│   │   └── index.js
│   ├── App.jsx             # Main app component with routing
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles
├── public/                 # Static files
├── index.html              # HTML entry point
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── eslint.config.js        # ESLint configuration
├── package.json            # Dependencies and scripts
├── .env.example            # Environment variables template
├── .env.local              # Local environment (not committed)
├── .gitignore              # Git ignore file
├── README.md               # Project documentation
├── COLOR_SYSTEM.md         # Color palette & mapping guide
└── SETUP_GUIDE.md          # This file
```

## 🎨 Color System

The project uses **grayscale colors** as placeholders. See `COLOR_SYSTEM.md` for:
- Complete color palette table
- Hex codes and RGB values
- Usage examples
- How to map final brand colors

Key grayscale classes:
- `bg-gray-50` - Primary background
- `bg-gray-700` - Primary buttons
- `text-gray-900` - Primary text
- `border-gray-300` - Borders

## 🔐 Authentication

### Login Flow
1. User enters email and password
2. Backend validates and returns JWT token
3. Token stored in localStorage
4. User redirected to role-specific dashboard
5. Token auto-included in all API requests

### Protected Routes
- Admin users → `/admin/dashboard`
- Teachers → `/teacher/dashboard`
- Students → `/student/challenges`

## 🛠️ Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter (if configured)
npm run lint
```

## 📝 Code Conventions

All code follows consistent English-only conventions:

| Scope | Convention | Example |
|-------|-----------|---------|
| Variables | camelCase | `userName`, `getUserData` |
| Functions | camelCase | `handleClick`, `fetchUserData` |
| Components | PascalCase | `LoginPage`, `UserCard` |
| Classes | PascalCase | `UserService`, `ApiClient` |
| Constants | UPPERCASE | `MAX_RETRIES`, `API_TIMEOUT` |
| Files | camelCase | `helpers.js`, `api.js` |
| Component Files | PascalCase | `LoginPage.jsx`, `UserCard.jsx` |

**All code is in English** - no Spanish in code, logs, or errors.

## 🎯 Next Steps

### Immediate (This Sprint)
1. [ ] Connect to your backend API
2. [ ] Update `.env.local` with API URL
3. [ ] Test login with admin/teacher/student accounts
4. [ ] Verify each dashboard loads correctly

### Phase 1 (April)
1. [ ] Implement admin module features:
   - Institution registration
   - User management
   - Dashboard analytics

2. [ ] Enhance teacher module:
   - Groups & students management
   - Didactic sequence design
   - Basic challenge creation

3. [ ] Improve UX/UI:
   - Finalize responsive layouts
   - Implement mobile navigation
   - Add loading states

### Phase 2 (May)
1. [ ] Complete student module:
   - Student access system
   - Challenge listing
   - Evidence submission

2. [ ] Integrate AI features:
   - LLM integration for sequences
   - Sócrates chatbot
   - AI-assisted challenge builder

3. [ ] Add validation system:
   - Configurable rubrics
   - Feedback generation
   - Performance tracking

### Phase 3 (June)
1. [ ] Pedagogical analysis module
2. [ ] Advanced reporting system
3. [ ] System optimization & deployment

## 🐛 Troubleshooting

### Port Already in Use
```bash
# View what's using the port
netstat -ano | findstr :5173

# Change dev port in vite.config.js
server: {
  port: 5174, // Change this
}
```

### Module Import Errors
- Ensure file extensions are `.jsx` or `.js`
- Check import paths are correct
- Verify exported names match imported names

### API Connection Issues
- Verify backend is running
- Check `VITE_API_URL` in `.env.local`
- Look at browser Network tab for request details
- Check backend CORS configuration

### Dependencies Installation Issues
```bash
# Clear cache and reinstall
rm -r node_modules package-lock.json
npm install
```

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI Components](https://radix-ui.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/feature-name`
2. Follow code conventions (see above)
3. Write descriptive commit messages
4. Test on desktop, tablet, and mobile
5. Push and create pull request

## 📞 Support

For issues or questions:
- Review README.md for general info
- Check COLOR_SYSTEM.md for styling questions
- Inspect browser console for error messages
- Review API responses in Network tab

---

**Happy coding! 🎉**

Last Updated: March 18, 2026
Project Status: Phase 1 Initialization ✅
