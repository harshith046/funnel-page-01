# NeoFlow - Revolutionary SaaS Platform

## Overview

This is a full-stack web application built for a modern SaaS platform called "NeoFlow". The application features a futuristic, neon-themed landing page with AI-powered analytics, real-time collaboration, and enterprise security features. It's built with React on the frontend and Express.js on the backend, using TypeScript throughout and a modern component-based architecture.

## System Architecture

The application follows a monorepo structure with clear separation between client, server, and shared code:

- **Frontend**: React SPA with Vite build system
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: Client-side routing with Wouter
- **State Management**: Zustand for modal state, React Query for server state

## Key Components

### Frontend Architecture
- **Component Library**: Built on shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with custom neon theme and glassmorphism effects
- **Animations**: Framer Motion for smooth transitions and particle effects
- **UI Patterns**: Modal-based authentication, smooth scrolling navigation
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

### Backend Architecture
- **Server Framework**: Express.js with TypeScript
- **Database Layer**: Drizzle ORM with PostgreSQL
- **Storage Pattern**: Interface-based storage with in-memory implementation (ready for database integration)
- **API Design**: RESTful endpoints with `/api` prefix
- **Development**: Hot reload with tsx, Vite middleware integration

### Data Models
- **User Schema**: Basic user model with username/password authentication
- **Validation**: Zod schemas for type-safe data validation
- **Migration Support**: Drizzle Kit for database migrations

## Data Flow

1. **Client Requests**: React components make API calls through React Query
2. **Server Processing**: Express routes handle requests via storage interface
3. **Data Persistence**: Currently uses in-memory storage, ready for PostgreSQL integration
4. **Response Handling**: Standardized error handling and JSON responses
5. **State Management**: Client state managed by Zustand, server state by React Query

## External Dependencies

### Core Framework Dependencies
- **React 18**: Modern React with hooks and concurrent features
- **Express**: Web server framework
- **TypeScript**: Type safety across the stack
- **Vite**: Fast build tool and development server

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality component library
- **Radix UI**: Accessible primitive components
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

### Database and Validation
- **Drizzle ORM**: Type-safe database toolkit
- **Neon Database**: Serverless PostgreSQL provider
- **Zod**: TypeScript-first schema validation

### Development Tools
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler
- **PostCSS**: CSS processing tool

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Assets**: Static files served from built frontend

### Environment Configuration
- **Development**: Uses tsx for hot reload, Vite dev server
- **Production**: Built assets served by Express static middleware
- **Database**: Configurable via `DATABASE_URL` environment variable

### Hosting Platform
- **Replit Integration**: Configured for Replit autoscale deployment
- **Port Configuration**: Internal port 5000, external port 80
- **Module Dependencies**: Node.js 20, PostgreSQL 16

## Changelog

Changelog:
- June 20, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.