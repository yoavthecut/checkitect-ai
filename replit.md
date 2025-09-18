# Checkitect AI - Automated AI Compliance for Urban Planning

## Overview

Checkitect AI is a web application that provides automated compliance checking for urban building plans using artificial intelligence. The platform helps architects, developers, and municipalities verify building plans against regulations faster and more accurately than manual processes. Built as a full-stack TypeScript application with React frontend and Express backend, it features a modern landing page showcasing the product's capabilities and benefits.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React with TypeScript**: Modern component-based UI built with React 18 and TypeScript for type safety
- **Vite Build System**: Fast development server and optimized production builds
- **Routing**: Client-side routing using Wouter for lightweight navigation
- **Styling**: Tailwind CSS with shadcn/ui component system for consistent, modern design
- **State Management**: TanStack Query (React Query) for server state management and API caching
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **UI Components**: Comprehensive component library using Radix UI primitives with custom styling

### Backend Architecture
- **Express.js Server**: RESTful API server with TypeScript support
- **Development Integration**: Vite middleware integration for seamless full-stack development
- **API Structure**: Modular route handling with centralized error management
- **Storage Layer**: Abstracted storage interface supporting in-memory storage with planned database integration
- **Session Management**: Express session handling with PostgreSQL store configuration

### Database Design
- **Drizzle ORM**: Type-safe database queries and schema management
- **PostgreSQL**: Relational database configured for production use
- **Schema**: User management system with extensible structure for future compliance data models
- **Migrations**: Database schema versioning and migration support

### Development Workflow
- **TypeScript Configuration**: Strict type checking across frontend, backend, and shared modules
- **Path Aliases**: Clean import paths using @ for frontend components and @shared for common code
- **Hot Reloading**: Development server with instant updates for both frontend and backend changes
- **Error Handling**: Runtime error overlays and comprehensive error boundaries

### UI/UX Design System
- **Design Tokens**: CSS custom properties for consistent theming and spacing
- **Component Variants**: Class variance authority for systematic component styling
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Accessibility**: ARIA-compliant components with keyboard navigation support
- **Animation**: Subtle transitions and hover effects for enhanced user experience

### Performance Optimization
- **Code Splitting**: Automatic route-based code splitting for optimal loading
- **Asset Optimization**: Image optimization and efficient resource loading
- **Caching Strategy**: Query caching and stale-while-revalidate patterns
- **Bundle Optimization**: Tree shaking and minification for production builds

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection and query execution
- **drizzle-orm**: Type-safe ORM for database operations and schema management
- **express**: Web application framework for API server
- **react**: Frontend UI framework with hooks and modern patterns
- **vite**: Build tool and development server

### UI and Styling
- **@radix-ui**: Accessible, unstyled UI components for complex interactions
- **tailwindcss**: Utility-first CSS framework for rapid styling
- **class-variance-authority**: Utility for creating component variants
- **lucide-react**: Consistent icon library for UI elements

### Form and Data Management
- **react-hook-form**: Performant form library with validation
- **@hookform/resolvers**: Form validation resolvers for various schema libraries
- **zod**: TypeScript-first schema validation library
- **@tanstack/react-query**: Data fetching and caching for server state

### Development and Build Tools
- **typescript**: Static type checking and enhanced developer experience
- **@vitejs/plugin-react**: React support for Vite build system
- **postcss**: CSS processing and optimization
- **autoprefixer**: Automatic CSS vendor prefixing

### Utility Libraries
- **clsx**: Utility for constructing className strings conditionally
- **date-fns**: Modern JavaScript date utility library
- **wouter**: Minimalist routing for React applications
- **nanoid**: Tiny, secure URL-friendly unique string ID generator