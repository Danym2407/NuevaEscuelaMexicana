# Nueva Escuela Mexicana

Educational platform for the Mexican New School model. This is a modern, responsive web application built with React and Vite.

## Project Overview

This platform provides three main modules:

1. **Admin Module** - Institution and user management, dashboard analysis
2. **Teacher Module** - Class management, didactic sequence creation, challenge design and monitoring
3. **Student Module** - Challenge completion, evidence submission, AI-powered tutoring with "Sócrates"

## Tech Stack

- **Frontend Framework**: React 18.3
- **Build Tool**: Vite 7.3
- **Styling**: Tailwind CSS 3.4 + PostCSS
- **UI Components**: Radix UI (accessible dialogs, tables, dropdowns, etc.)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Routing**: React Router v6
- **Language**: JavaScript (JSX) - 100% code in English

## Code Conventions

All code follows consistent conventions:

- **Variables & Functions**: `camelCase` (e.g., `userName`, `getUserData`)
- **Classes & Components**: `PascalCase` (e.g., `UserService`, `ProductController`)
- **Constants**: `UPPERCASE` (e.g., `MAX_RETRIES`, `API_TIMEOUT`)
- **Files & Folders**: `camelCase` for files and folders except components which use `PascalCase`
- **All code is in English** - no Spanish in code, logs, errors, or responses

## Project Structure

```
src/
├── pages/               # Page components
│   ├── LoginPage.jsx
│   ├── admin/
│   │   └── AdminDashboard.jsx
│   ├── teacher/
│   │   └── TeacherDashboard.jsx
│   └── student/
│       └── StudentDashboard.jsx
├── contexts/            # React contexts
│   └── AuthContext.jsx
├── services/            # API services
│   └── api.js
├── components/          # Reusable components
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── styles/              # Global styles
├── App.jsx              # Main app component
└── main.jsx             # React entry point
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file in the project root:
```bash
VITE_API_URL=http://localhost:3000/api
```

### Development

Start the development server:
```bash
npm run dev
```

The app will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This generates optimized files in the `dist/` folder.

## API Endpoints

### Authentication

- **POST** `/api/users/login` - Login with email and password
  - Body: `{ email: string, password: string }`
  - Returns: `{ token: string, user: {} }`

- **GET** `/api/users/myProfile` - Get current user profile
  - Headers: `Authorization: Bearer {token}`
  - Returns: `{ _id: string, email: string, fullName: string, role: string }`

### User Roles

- `admin` - System administrator
- `teacher` - Educational instructor
- `student` - Learning participant

## Color Palette - Grayscale Implementation

The project uses a **grayscale color system** as a temporary implementation. The colors below will eventually be mapped to the final design colors. Each grayscale tone corresponds to a specific UI purpose and will be replaced with the brand colors.

| Gray Level | Tailwind Class | Hex Code | RGB | Purpose / Future Color |
|------------|---|---|---|---|
| Ultra Light | gray-50 | #f9fafb | 249, 250, 251 | Primary background - Will become light brand accent |
| Very Light | gray-100 | #f3f4f6 | 243, 244, 246 | Secondary background - Will become secondary light |
| Light | gray-200 | #e5e7eb | 229, 231, 235 | Tertiary background - Will become border light |
| Light Gray | gray-300 | #d1d5db | 209, 213, 219 | Light borders - Will become border secondary |
| Medium Light | gray-400 | #9ca3af | 156, 163, 175 | Disabled elements - Will become disabled state |
| Medium Gray | gray-500 | #6b7280 | 107, 114, 128 | Secondary text - Will become secondary text |
| Medium Dark | gray-600 | #4b5563 | 75, 85, 99 | Primary text - Will become primary text |
| Dark Gray | gray-700 | #374151 | 55, 65, 81 | Strong text, buttons - Will become primary action |
| Very Dark Gray | gray-800 | #1f2937 | 31, 41, 55 | Headers, footers - Will become dark brand |
| Almost Black | gray-900 | #111827 | 17, 24, 39 | High contrast - Will become darkest brand |

### Usage in Tailwind

Use these classes throughout the application:
- `bg-gray-50` for main backgrounds
- `bg-gray-100` for secondary backgrounds
- `text-gray-900` for primary text
- `border-gray-300` for borders
- `bg-gray-700` for primary buttons
- `hover:bg-gray-800` for button hover states

### Converting to Final Colors

When final colors are approved, update `tailwind.config.js`:

```javascript
export default {
  theme: {
    extend: {
      colors: {
        primary: '#YourPrimaryColor',
        secondary: '#YourSecondaryColor',
        // ... other final colors
      }
    }
  }
}
```

Then replace gray classes with the new color classes throughout the codebase.

## Authentication Flow

1. User visits the app and is redirected to `/login`
2. User enters email and password
3. Backend validates and returns a JWT token
4. Token is stored in localStorage
5. User is redirected to their role-specific dashboard
6. All subsequent API calls include the token in the Authorization header
7. Token is automatically added via axios interceptor
8. On logout, token is removed from storage

## Development Workflow

### Before Starting

1. Review code conventions above
2. Ensure VS Code has Prettier or similar formatter installed
3. All code is auto-formatted on save

### Creating New Components

- Use `PascalCase` for component filenames
- Place in appropriate `components/` subdirectory
- Always use functional components with hooks
- Export as default

### Styling Guidelines

- Use Tailwind CSS utility classes
- Avoid inline styles
- Use grayscale palette from the table above
- Ensure responsive design (mobile-first)
- Test on desktop, tablet, and mobile

### Git Workflow

- Create feature branches from `main`
- Commit messages in English: `feat: description` or `fix: description`
- Keep commits atomic and focused
- Push to remote and create PR for review

## Project Timeline

### April (Phase 1)
- ✅ Admin module setup (institution registration)
- ✅ Teacher module setup (groups & students)
- ✅ Basic UX/UI (responsive, mobile-first)

### May (Phase 2)
- 🚀 Student module with access system
- 🚀 AI integration (didactic sequences & Sócrates chatbot)
- 🚀 Challenge constructor (AI-assisted)
- 🚀 AI feedback system (configurable)

### June (Phase 3)
- 🚀 Pedagogical analysis module
- 🚀 Final reports and AI analytics
- 🚀 System completion and deployment

## Troubleshooting

### Port already in use
Change the dev port in `vite.config.js`:
```javascript
server: {
  port: 5174, // Change this number
}
```

### API connection errors
Check that:
- Backend server is running
- `VITE_API_URL` in `.env.local` is correct
- Browser console shows actual error message

### Build errors
Clear node_modules and reinstall:
```bash
rm -r node_modules package-lock.json
npm install
npm run build
```

## Contributing

When contributing to this project:

1. Follow code conventions (camelCase, PascalCase, UPPERCASE)
2. Write all code in English
3. Use meaningful commit messages
4. Test on multiple device sizes
5. Update documentation if adding new features

## License

This project is proprietary and confidential.

---

**Project Status**: Development Phase 1 ✅ | Phase 2 🚀 | Phase 3 🚀

For questions or issues, contact the development team.
