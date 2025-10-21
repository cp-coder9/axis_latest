# Architex Axis - Complete Project Specification

## Project Overview

**Architex Axis** is a modern, feature-rich project management platform built specifically for architecture and design firms. It provides role-based dashboards for administrators, freelancers, and clients, enabling seamless collaboration, time tracking, file management, and project oversight.

The platform features a comprehensive shadcn/ui migration with modern React architecture, Firebase backend, and production-ready infrastructure.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Project Architecture](#project-architecture)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Configuration Files](#configuration-files)
6. [Database Schema](#database-schema)
7. [API Services](#api-services)
8. [UI Components](#ui-components)
9. [Authentication & Authorization](#authentication--authorization)
10. [Core Features](#core-features)
11. [Development Setup](#development-setup)
12. [Deployment](#deployment)
13. [Testing Strategy](#testing-strategy)
14. [Performance Optimizations](#performance-optimizations)
15. [Accessibility Features](#accessibility-features)
16. [Security Considerations](#security-considerations)
17. [Monitoring & Analytics](#monitoring--analytics)
18. [Future Enhancements](#future-enhancements)
19. [Conclusion](#conclusion)

## Project Architecture

### Frontend Architecture

- **Framework**: React 18.2.0 with TypeScript 5.2.2
- **Build Tool**: Vite 5.0 with optimized chunking
- **Routing**: React Router 6.22 with role-based routing
- **State Management**: React Context API with custom hooks
- **UI Library**: shadcn/ui (Radix UI primitives + Tailwind CSS)
- **Styling**: Tailwind CSS 3.3.5 with custom design system
- **Icons**: Lucide React + Tabler Icons

### Backend Architecture

- **Database**: Firebase Firestore (NoSQL)
- **Authentication**: Firebase Auth
- **File Storage**: Firebase Storage + Cloudinary
- **Real-time**: Firebase real-time listeners
- **Security**: Firebase Security Rules

### Development Tools

- **Linting**: ESLint with TypeScript rules
- **Testing**: Vitest + React Testing Library + Playwright
- **Code Quality**: Prettier, Stylelint
- **Performance**: Custom performance monitoring utilities

## Technology Stack

### Core Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "typescript": "^5.2.2",
  "vite": "^5.4.20",
  "@radix-ui/react-*": "Various versions",
  "tailwindcss": "^3.3.5",
  "firebase": "^12.4.0",
  "react-router-dom": "^6.22.0",
  "react-hook-form": "^7.62.0",
  "zod": "^4.1.0",
  "recharts": "^3.1.2",
  "date-fns": "^4.1.0"
}
```

### Development Dependencies

```json
{
  "@types/node": "^20.10.0",
  "@types/react": "^18.2.37",
  "@types/react-dom": "^18.2.15",
  "@vitejs/plugin-react": "^4.1.1",
  "vitest": "^1.6.1",
  "playwright": "^1.43.1",
  "eslint": "^8.53.0",
  "typescript-eslint": "^8.40.0"
}
```

## Project Structure

```text
architex-axis/
├── public/                          # Static assets
│   ├── vite.svg
│   └── [other static files]
├── src/
│   ├── api/                        # API integration layer
│   │   └── timers/                 # Timer API endpoints
│   ├── components/                 # React components
│   │   ├── ui/                     # shadcn/ui components
│   │   ├── admin/                  # Admin-specific components
│   │   ├── freelancer/             # Freelancer components
│   │   ├── client/                 # Client components
│   │   ├── auth/                   # Authentication components
│   │   ├── charts/                 # Chart components
│   │   ├── dashboard/              # Dashboard components
│   │   ├── file/                   # File management
│   │   ├── files/                  # Enhanced file management
│   │   ├── messaging/              # Messaging system
│   │   ├── mobile/                 # Mobile optimizations
│   │   ├── navigation/             # Navigation components
│   │   ├── performance/            # Performance monitoring
│   │   ├── profile/                # User profile components
│   │   ├── project/                # Project management
│   │   ├── theme/                  # Theme system
│   │   └── timer/                  # Timer components
│   ├── contexts/                   # React Context providers
│   │   ├── modules/                # Context modules
│   │   ├── AppContext.tsx          # Main app context
│   │   └── TimerSyncContext.tsx    # Timer synchronization
│   ├── demo/                       # Demo pages
│   ├── demos/                      # Additional demos
│   ├── hooks/                      # Custom React hooks
│   ├── lib/                        # Utility libraries
│   ├── pages/                      # Page components
│   │   ├── dashboards/             # Dashboard pages
│   │   ├── admin/                  # Admin pages
│   │   ├── freelancer/             # Freelancer pages
│   │   └── client/                 # Client pages
│   ├── services/                   # Business logic & API calls
│   │   ├── dashboard/              # Dashboard services
│   │   ├── messaging/              # Messaging services
│   │   └── websocket/              # WebSocket services
│   ├── tests/                      # Test files
│   │   ├── __mocks__/             # Test mocks
│   │   ├── fixtures/              # Test fixtures
│   │   ├── helpers/               # Test helpers
│   │   ├── integration/           # Integration tests
│   │   ├── messaging/             # Messaging tests
│   │   └── timer/                 # Timer tests
│   ├── types/                      # TypeScript definitions
│   ├── utils/                      # Utility functions
│   │   └── performance/           # Performance utilities
│   ├── validators/                 # Data validation schemas
│   ├── App.tsx                     # Main App component
│   ├── Router.tsx                  # Application routing
│   ├── firebase.ts                 # Firebase configuration
│   ├── globals.css                 # Global styles
│   └── main.tsx                    # Application entry point
├── tests/                          # Additional test files
├── docs/                           # Documentation
├── memory-bank/                    # Project context & progress
├── scripts/                        # Build & utility scripts
├── e2e/                            # End-to-end tests
├── .env.example                    # Environment variables template
├── package.json                    # Dependencies & scripts
├── tsconfig.json                   # TypeScript configuration
├── vite.config.ts                  # Vite configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── components.json                 # shadcn/ui configuration
├── firebase.json                   # Firebase configuration
├── firestore.rules                 # Firestore security rules
├── firestore.indexes.json          # Firestore indexes
└── eslint.config.js                # ESLint configuration
```

## Configuration Files

### package.json

```json
{
  "name": "architex-axis-shadcn-migration",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "dev:with-emulator": "VITE_USE_FIREBASE_EMULATOR=true vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:timer": "vitest run tests/timers",
    "test:e2e": "playwright test",
    "test:e2e:timer": "node scripts/run-timer-tests.js",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### vite.config.ts

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react-vendor';
            if (id.includes('@radix-ui')) return 'radix-vendor';
            if (id.includes('recharts')) return 'chart-vendor';
            return 'vendor';
          }
        }
      }
    }
  }
})
```

### tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        primary: { DEFAULT: "hsl(var(--primary))" },
        // ... extensive color system
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

## Database Schema

### Firestore Collections

#### Users Collection

```typescript
interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole; // ADMIN | FREELANCER | CLIENT
  title: string;
  hourlyRate: number;
  phone: string;
  company: string;
  avatarUrl: string;
  createdAt: Timestamp;
  lastActive: Timestamp;
  skills?: string[];
  preferences?: UserPreferences;
}
```

#### Projects Collection

```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  clientId: string;
  leadArchitectId: string;
  assignedTeamIds: string[];
  status: ProjectStatus;
  projectNumber: string;
  budget?: number;
  deadline?: Timestamp;
  jobCards: JobCard[];
  totalTimeSpentMinutes?: number;
  totalEarnings?: number;
}
```

#### Job Cards Collection

```typescript
interface JobCard {
  id: string;
  projectId: string;
  title: string;
  description: string;
  status: JobCardStatus;
  estimatedTime?: number;
  allocatedHours?: number;
  assignedArchitectIds: string[];
  timeLogs?: TimeLog[];
}
```

#### Time Logs Collection

```typescript
interface TimeLog {
  id: string;
  startTime: Timestamp;
  endTime: Timestamp;
  durationMinutes: number;
  projectId: string;
  jobCardId: string;
  loggedById: string;
  hourlyRate?: number;
  earnings?: number;
}
```

#### Messages Collection

```typescript
interface Message {
  id: string;
  projectId: string;
  userId: string;
  content: string;
  timestamp: Timestamp;
  type?: 'text' | 'file' | 'system';
  readBy?: string[];
}
```

#### Files Collection

```typescript
interface ProjectFile {
  id: string;
  name: string;
  size: number;
  type: string;
  url: string;
  permissions: FilePermissions;
  projectId?: string;
  category?: FileCategory;
  uploadedAt: Timestamp;
  uploaderId: string;
}
```

## API Services

### Service Architecture

- **userService.ts**: User management operations
- **projectService.ts**: Project CRUD operations
- **fileService.ts**: File upload/download operations
- **timeTrackingService.ts**: Timer and time log management
- **messagingService.ts**: Real-time messaging
- **authService.ts**: Authentication operations

### Key Service Methods

#### Project Service

```typescript
export const getProjectsByUser = async (userId: string, userRole: UserRole): Promise<Project[]>
export const createProject = async (projectData: ProjectCreationData, createdBy: User): Promise<string>
export const updateProject = async (projectId: string, updates: Partial<Project>): Promise<void>
export const deleteProject = async (projectId: string): Promise<void>
export const subscribeToProjects = (userId: string, userRole: UserRole, callback: (projects: Project[]) => void): (() => void)
```

#### Timer Service

```typescript
export const startTimer = async (projectId: string, jobCardId: string, userId: string): Promise<void>
export const stopTimer = async (projectId: string, jobCardId: string, userId: string): Promise<void>
export const getTimeLogs = async (projectId: string, userId?: string): Promise<TimeLog[]>
export const generateTimeTrackingReport = async (filters: TimeReportFilters): Promise<TimeTrackingReport>
```

## UI Components

### shadcn/ui Components Used

- **Layout**: Card, Tabs, Sheet, Dialog, Drawer
- **Forms**: Input, Select, Checkbox, Radio, Textarea, Form
- **Navigation**: Breadcrumb, Pagination, Navigation Menu
- **Feedback**: Alert, Toast, Progress, Skeleton
- **Data Display**: Table, Badge, Avatar, Separator
- **Overlays**: Popover, Tooltip, Hover Card

### Custom Components

- **Dashboard Components**: Dashboard cards, widgets, analytics displays
- **Timer Components**: Timer controls, time displays, progress indicators
- **File Components**: File upload, file browser, preview components
- **Messaging Components**: Chat interfaces, message threads
- **Chart Components**: Custom chart wrappers using Recharts

### Component Architecture

```typescript
// Example component structure
interface ComponentProps {
  // Props interface
}

export const ComponentName: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  return (
    <div className="component-classes">
      {/* Component JSX */}
    </div>
  );
};
```

## Authentication & Authorization

### User Roles

```typescript
enum UserRole {
  ADMIN = 'ADMIN',
  FREELANCER = 'FREELANCER',
  CLIENT = 'CLIENT'
}
```

### Role Permissions

```typescript
interface RolePermissions {
  canViewBilling: boolean;
  canManageUsers: boolean;
  canAccessAllProjects: boolean;
  canModifyProjectSettings: boolean;
  canDeleteProjects: boolean;
  canCreateProjects: boolean;
  canManageTeam: boolean;
  canViewAnalytics: boolean;
  canAccessAdminSettings: boolean;
  canUploadFiles: boolean;
  canDeleteFiles: boolean;
  canViewAllFiles: boolean;
  canManageFilePermissions: boolean;
}
```

### Route Guards

- **AuthGuard**: Protects authenticated routes
- **RoleRouter**: Redirects users to role-specific dashboards
- **Route-level permissions**: Component-level access control

## Core Features

### 1. Role-Based Dashboards

#### Admin Dashboard

- User management and role assignment
- System-wide analytics and reporting
- Project oversight and budget tracking
- Activity monitoring across all projects

#### Freelancer Dashboard

- Project assignments and task management
- Time tracking with start/stop timers
- Earnings dashboard with payment history
- Weekly time logs and performance metrics

#### Client Dashboard

- Active project overview and progress tracking
- Secure document access and downloads
- Direct messaging with project teams
- Budget and timeline monitoring

### 2. Time Tracking System

- Start/stop/pause timers for job cards
- Automatic time logging to Firestore
- Real-time synchronization across devices
- Weekly/monthly time summaries
- Hourly rate calculations and earnings tracking

### 3. Project Management

- Hierarchical structure: Projects → Job Cards → Tasks
- Status tracking and progress monitoring
- Team assignment and collaboration
- File attachment and version control
- Budget and time allocation tracking

### 4. File Management

- Secure cloud storage via Firebase Storage
- File permission controls (Project Team, Client Visible, Admin Only)
- File categorization and organization
- Version control and audit trails
- Bulk operations and sharing capabilities

### 5. Real-time Messaging

- Project-based chat channels
- Real-time message delivery
- Read receipts and typing indicators
- File sharing in conversations
- Message search and filtering

### 6. Analytics & Reporting

- Project performance metrics
- User activity tracking
- Revenue and earnings analytics
- Custom date range filtering
- Export capabilities (PDF, CSV)

## Development Setup

### Prerequisites

- Node.js v18+
- npm v9+
- Git
- Firebase CLI

### Installation Steps

```bash
# 1. Clone repository
git clone <repository-url>
cd architex-axis

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local with Firebase credentials

# 4. Start development server
npm run dev
```

### Firebase Setup

```bash
# 1. Install Firebase CLI
npm install -g firebase-tools

# 2. Login to Firebase
firebase login

# 3. Initialize Firebase project
firebase init

# 4. Deploy security rules and indexes
firebase deploy --only firestore:rules
firebase deploy --only firestore:indexes
```

### Development with Emulator

```bash
# Start Firebase emulator
firebase emulators:start

# Run with emulator
npm run dev:with-emulator
```

## Deployment

### Build Process

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Firebase Hosting Deployment

```bash
# Deploy to Firebase Hosting
firebase deploy --only hosting

# Deploy everything (hosting, functions, firestore)
firebase deploy
```

### Build Optimizations

- **Code Splitting**: Automatic chunking by route and component
- **Tree Shaking**: Unused code elimination
- **Asset Optimization**: Image and font optimization
- **Minification**: Terser-based minification
- **Vendor Chunking**: Separate chunks for React, UI libraries

## Testing Strategy

### Unit Testing (Vitest)

```typescript
// Example test structure
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { Button } from '@/components/ui/button';

test('Button renders correctly', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

### Integration Testing

- Component integration tests
- Service layer testing
- Context provider testing
- Custom hook testing

### End-to-End Testing (Playwright)

```typescript
// Example E2E test
import { test, expect } from '@playwright/test';

test('user can login and access dashboard', async ({ page }) => {
  await page.goto('/');
  await page.fill('[data-testid="email"]', 'user@example.com');
  await page.fill('[data-testid="password"]', 'password');
  await page.click('[data-testid="login-button"]');
  await expect(page).toHaveURL('/freelancer/dashboard');
});
```

### Test Coverage Goals

- **Unit Tests**: >80% coverage
- **Integration Tests**: Critical user flows
- **E2E Tests**: Core user journeys
- **Performance Tests**: 60fps animations, <3s load times

## Performance Optimizations

### Code Splitting Strategy

- Route-based code splitting
- Component lazy loading
- Vendor chunk separation
- Dynamic imports for heavy components

### Bundle Analysis

```bash
# Analyze bundle size
npm run build
npx vite-bundle-analyzer dist
```

### Performance Monitoring

- Custom performance utilities
- FPS monitoring for animations
- Bundle size tracking
- Load time optimization

## Accessibility Features

### WCAG 2.1 AA Compliance

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Focus management

### Accessibility Components

- Skip-to-main navigation
- Focus trap management
- Screen reader announcements
- High contrast mode support

## Security Considerations

### Firebase Security Rules

```javascript
// Example security rule
match /projects/{projectId} {
  allow read: if request.auth != null && (
    // Admin can read all projects
    exists(/databases/$(database)/documents/users/$(request.auth.uid)) &&
    get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'ADMIN'
    // ... other role-based rules
  );
}
```

### Authentication Security

- Firebase Auth integration
- Role-based access control
- Secure token management
- Session timeout handling

### Data Protection

- Input validation with Zod schemas
- SQL injection prevention
- XSS protection
- Secure file upload validation

## Monitoring & Analytics

### Error Tracking

- Sentry integration for error monitoring
- Custom error boundaries
- User feedback collection

### Application Performance Monitoring

- Core Web Vitals tracking
- Custom performance metrics
- User interaction analytics

### Usage Analytics

- User behavior tracking
- Feature usage statistics
- Conversion funnel analysis

## Future Enhancements

### Planned Features

- **Mobile App**: React Native implementation
- **Advanced Analytics**: Machine learning insights
- **Integration APIs**: Third-party tool integrations
- **Advanced Collaboration**: Video calling, screen sharing
- **Workflow Automation**: Custom workflow builders

### Technical Improvements

- **Microservices**: Backend API migration
- **GraphQL**: More efficient data fetching
- **Offline Support**: PWA capabilities
- **Advanced Caching**: Service worker implementation

## Conclusion

Architex Axis represents a modern, scalable project management solution specifically designed for architecture and design firms. The platform combines:

- **Modern Tech Stack**: React 18, TypeScript, Firebase, shadcn/ui
- **Role-Based Architecture**: Tailored experiences for admins, freelancers, and clients
- **Production-Ready Features**: Time tracking, file management, messaging, analytics
- **Performance Optimized**: Code splitting, lazy loading, optimized bundles
- **Accessible & Secure**: WCAG compliance, Firebase security rules
- **Developer Experience**: Hot reloading, comprehensive testing, TypeScript

The codebase is well-structured, thoroughly documented, and ready for production deployment with proper monitoring and maintenance procedures in place.

---

**Version**: 1.0.0
**Last Updated**: October 13, 2025
**Status**: Production Ready (pending final TypeScript error resolution)
