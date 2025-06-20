# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Status

This is a Next.js project with TypeScript, Tailwind CSS, and Supabase integration.

## Tech Stack

### Core Framework

- **Next.js 15**: React framework with App Router
- **React 18**: Stable React version with all modern features
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS v3**: Utility-first CSS framework (stable version)
- **Supabase**: Backend-as-a-Service platform

### Development & Quality

- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Vitest**: Testing framework

### State & Data Management

- **React Query**: Data fetching and caching
- **Zustand**: Client-side state management

### UI & Forms

- **Radix UI**: Accessible component primitives
- **React Hook Form**: Form handling
- **Zod**: Runtime validation
- **Lucide React**: Beautiful icons

## Development Commands

- `npm run dev`: Start the development server
- `npm run build`: Build the application for production
- `npm run start`: Start the production server
- `npm run lint`: Run ESLint to check code quality
- `npm run type-check`: Run TypeScript compiler to check types
- `npm run test`: Run tests with Vitest
- `npm run test:watch`: Run tests in watch mode
- `npm run format`: Format code with Prettier
- `npm run format:check`: Check code formatting

## Project Structure

This application follows modern Next.js best practices with a clean, scalable architecture:

- `/src/app/`: Next.js App Router pages and layouts
- `/src/components/`: Reusable UI components
  - `/ui/`: Base UI components (Button, Card, Badge, etc.)
  - `/layout/`: Layout components (Header, Footer)
  - `/sections/`: Page sections (Hero, Features, CTA)
- `/src/hooks/`: Custom React hooks for common functionality
- `/src/lib/`: Utility functions and configurations
- `/src/store/`: Zustand state management stores
- `/src/types/`: TypeScript type definitions
- `/src/utils/`: Helper utilities and functions
- `/src/test/`: Test setup and utilities
- `/public/`: Static assets

## Features Implemented

### ✅ Completed Features

1. **Modern UI Components**: Full suite of accessible components built with Radix UI
2. **Responsive Design**: Mobile-first responsive layout with Tailwind CSS
3. **Smooth Animations**: Framer Motion integration for enhanced user experience
4. **State Management**: Zustand stores for UI and authentication state
5. **Custom Hooks**: Reusable hooks for common patterns (localStorage, debounce, media queries)
6. **Clean Architecture**: Well-organized component structure with proper separation of concerns
7. **Type Safety**: Full TypeScript coverage with strict type checking
8. **Modern Styling**: Updated design system with CSS custom properties

## Setup Instructions

1. Copy `.env.example` to `.env.local`
2. Add your Supabase project URL and anon key to `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-project-url-here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   ```
3. Run `npm install` to install dependencies
4. Run `npm run dev` to start the development server

## Recent Fixes Applied

### 🔧 Environment Configuration
- **Removed duplicate .env files**: Consolidated `.env.example` and `.env.local.example` into single `.env.example` template
- **Created proper .env.local**: Working environment file with Supabase configuration

### 🎨 Tailwind CSS Configuration  
- **Downgraded from Tailwind v4 to v3**: Better stability and compatibility
- **Fixed PostCSS configuration**: Proper plugin setup for Tailwind and Autoprefixer
- **Added tailwind.config.ts**: Complete configuration with custom colors and design tokens
- **Updated globals.css**: Proper @tailwind directives and custom CSS properties

### ⚡ React Version Stability
- **Downgraded from React 19 to React 18**: Better compatibility with all dependencies
- **Fixed type definitions**: Proper @types/react and @types/react-dom versions
- **Resolved peer dependency conflicts**: Clean dependency tree

### 🧹 Code Quality
- **Fixed all ESLint warnings**: Clean code with no linting errors
- **Removed unused variables**: Proper parameter handling in auth store
- **Updated error handling**: Simplified catch blocks without unused variables

## Architecture

- `/src/app/`: Next.js App Router pages and layouts
- `/src/components/`: Reusable UI components
- `/src/hooks/`: Custom React hooks
- `/src/lib/`: Utility functions and configurations
- `/src/store/`: State management (Zustand stores)
- `/src/types/`: TypeScript type definitions
- `/src/utils/`: Helper utilities and functions
- `/src/test/`: Test setup and utilities
- `/public/`: Static assets

## Installed Libraries

All essential libraries are already installed and configured:

### ✅ Already Installed

- **@tanstack/react-query** + **@tanstack/react-query-devtools**: Data fetching & caching
- **zustand**: State management with devtools and persistence
- **react-hook-form** + **@hookform/resolvers**: Form handling
- **zod**: Runtime validation
- **@radix-ui/react-dialog** + **@radix-ui/react-dropdown-menu** + **@radix-ui/react-separator** + **@radix-ui/react-slot**: Accessible UI components
- **lucide-react**: Beautiful icons
- **clsx** + **tailwind-merge**: Class name utilities
- **class-variance-authority**: Utility for creating variant-based component APIs
- **framer-motion**: Smooth animations and transitions
- **@supabase/ssr**: Modern Supabase authentication
- **prettier** + **prettier-plugin-tailwindcss**: Code formatting
- **vitest** + **@testing-library/react** + **@testing-library/jest-dom**: Testing framework

### Optional Future Additions

```bash
# Additional Radix components (as needed)
npm install @radix-ui/react-select @radix-ui/react-tooltip @radix-ui/react-tabs

# E2E Testing (when ready)
npm install -D playwright

# Performance monitoring
npm install @vercel/analytics @vercel/speed-insights

# Error tracking
npm install @sentry/nextjs

# Database ORM (if needed)
npm install drizzle-orm @drizzle-team/drizzle-kit
```

## Code Quality Guidelines

### TypeScript Standards

- Always use strict typing - avoid `any`
- Define interfaces for all data structures
- Use proper generic types for reusable components
- Leverage discriminated unions for complex state

### Component Standards

- Use `forwardRef` for components that need DOM access
- Implement proper prop validation with TypeScript interfaces
- Use compound component patterns for complex UI
- Always handle loading and error states

### Performance Best Practices

- Implement proper memoization with `useMemo` and `useCallback`
- Use `React.lazy()` for code splitting large components
- Optimize images with Next.js Image component
- Minimize bundle size with proper tree shaking
