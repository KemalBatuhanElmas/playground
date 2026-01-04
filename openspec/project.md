# Project Context

## Purpose
React 19 web application built with Vite 7. This is a modern, minimal setup providing fast development experience with Hot Module Replacement (HMR). Previously hosted a "profilenest" project with login/splash screens. Currently serves as a clean template for building React applications.

## Tech Stack
- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool and development server with HMR
- **ESM Modules** - Modern JavaScript module system
- **JSX** (not TypeScript) - React component syntax
- **ESLint 9.39.1** - Linting with flat config format
- **Babel** - Fast Refresh via @vitejs/plugin-react

### Dev Dependencies
- eslint-plugin-react-hooks - React Hooks linting rules
- eslint-plugin-react-refresh - Vite integration for React Refresh
- @types/react & @types/react-dom - Type definitions for IDE support

## Project Conventions

### Code Style
- **Module System**: ESM modules exclusively (package.json has "type": "module")
- **Component Files**: JSX format for React components (`.jsx` extension)
- **Styling**: Component-level CSS files (e.g., `App.css`, `index.css`)
- **Naming**:
  - PascalCase and UPPER_CASE variables are allowed to be unused (ESLint rule)
  - Standard JavaScript naming conventions apply
- **ECMAScript**: ES2020+ features supported
- **Source Maps**: Enabled in development

### Architecture Patterns
- **Entry Point**: `src/main.jsx` - Renders root App component into `#root` div
- **Component Structure**: React functional components with hooks
- **Build Tool**: Vite with Fast Refresh using Babel
- **Hot Module Replacement**: Enabled in development for instant updates
- **Output Directory**: `dist/` (ignored by ESLint and git)

### Testing Strategy
No testing framework currently configured. Consider adding:
- Vitest (recommended for Vite projects)
- React Testing Library
- Or Jest with appropriate Vite integration

### Git Workflow
- **Main Branch**: `main` (primary branch for PRs and deployments)
- **Current State**: Working directory has untracked OpenSpec files and deleted legacy files
- **History**: Previously contained "profilenest" project, now reset to clean React + Vite template

## Domain Context
This is a general-purpose React application template. No specific domain constraints or business logic currently implemented. The application can be adapted for various use cases including:
- User authentication/profile management (based on git history)
- Dashboard applications
- Web-based tools and utilities

## Important Constraints
- **No TypeScript**: Project uses JSX, not TypeScript. Do not introduce .ts/.tsx files
- **ESM Only**: All code must use ESM import/export syntax
- **React 19**: Use React 19 APIs and patterns (no legacy class components)
- **Vite Configuration**: Must remain compatible with Vite 7.x
- **ESLint Flat Config**: Must use new flat config format, not legacy .eslintrc

## External Dependencies
Currently no external APIs, services, or systems integrated. The project is self-contained with only npm package dependencies.
