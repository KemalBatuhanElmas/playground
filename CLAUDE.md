<!-- OPENSPEC:START -->
# OpenSpec Instructions

These instructions are for AI assistants working in this project.

Always open `@/openspec/AGENTS.md` when the request:
- Mentions planning or proposals (words like proposal, spec, change, plan)
- Introduces new capabilities, breaking changes, architecture shifts, or big performance/security work
- Sounds ambiguous and you need the authoritative spec before coding

Use `@/openspec/AGENTS.md` to learn:
- How to create and apply change proposals
- Spec format and conventions
- Project structure and guidelines

Keep this managed block so 'openspec update' can refresh the instructions.

<!-- OPENSPEC:END -->

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React 19 application built with Vite 7 as the build tool and development server. The project uses ESM modules and JSX (not TypeScript).

## Development Commands

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Run ESLint
npm run lint

# Preview production build
npm run preview
```

## Architecture

- **Entry Point**: `src/main.jsx` - Renders the root `App` component into `#root` div
- **Main Component**: `src/App.jsx` - Currently contains a simple counter demo
- **Styling**: Component-level CSS files (e.g., `App.css`, `index.css`)
- **Build Tool**: Vite with `@vitejs/plugin-react` for Fast Refresh using Babel

## ESLint Configuration

The project uses the new ESLint flat config format (`eslint.config.js`) with:
- React Hooks rules enforced
- React Refresh/Vite integration
- Custom rule: `no-unused-vars` allows PascalCase and UPPER_CASE variables
- Ignores `dist` directory

## Project History

Based on git history, this repository previously contained a "profilenest" project with login/splash screens. The current state is a fresh React + Vite setup (standard Vite template).
