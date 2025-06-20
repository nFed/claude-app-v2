# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Status

This is a Next.js project with TypeScript, Tailwind CSS, and Supabase integration.

## Tech Stack

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Supabase**: Backend-as-a-Service platform
- **ESLint**: Code linting

## Development Commands

- `npm run dev`: Start the development server
- `npm run build`: Build the application for production
- `npm run start`: Start the production server
- `npm run lint`: Run ESLint to check code quality
- `npm run type-check`: Run TypeScript compiler to check types

## Setup Instructions

1. Copy `.env.local.example` to `.env.local`
2. Add your Supabase project URL and anon key to `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```
3. Run `npm install` to install dependencies
4. Run `npm run dev` to start the development server

## Architecture

- `/src/app/`: Next.js App Router pages and layouts
- `/src/lib/`: Utility functions and configurations
- `/public/`: Static assets
- `tailwind.config.ts`: Tailwind CSS configuration
- `next.config.ts`: Next.js configuration