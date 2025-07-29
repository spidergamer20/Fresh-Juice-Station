# Fresh Juice Station - Full Stack Juice Ordering Application

## Overview

Fresh Juice Station is a modern, colorful, and mobile-friendly web application for a premium juice delivery service operating in Hayatabad, Peshawar. The application features a vibrant fruit-themed design inspired by modern food service websites, providing a customer-facing interface for browsing and ordering fresh juices, along with a comprehensive admin dashboard for managing products and orders. Built with React frontend, Express backend, and in-memory storage for development, the application emphasizes beautiful design, user experience, and efficient order management with real-time notifications.

## User Preferences

Preferred communication style: Simple, everyday language.
Design preferences: Colorful, vibrant, fruit-themed design with glowing effects and visual animations.
Target audience: Premium juice delivery customers in Hayatabad, Peshawar.
Admin access: Restricted to affankhkh3434@gmail.com email only.

## Recent Changes (January 2025)

✓ Created beautiful colorful homepage with glowing title and fruit-themed background
✓ Implemented comprehensive menu section with juice categories, photos, and pricing
✓ Built working order form with Hayatabad delivery validation
✓ Added admin-only login system for affankhkh3434@gmail.com
✓ Created admin dashboard with product and order management
✓ Implemented real-time notifications with sound alerts for new orders
✓ Added SEO optimization with meta tags and structured data
✓ Enhanced visual effects with glowing buttons and hover animations
✓ Made website fully mobile-responsive and production-ready
✓ Integrated Firebase configuration for future authentication and storage
✓ Added comprehensive documentation and deployment instructions
✓ Integrated PostgreSQL database with Drizzle ORM for persistent data storage
✓ Migrated from in-memory storage to database with automatic data seeding
✓ Added admin image upload functionality - no more URL copying needed
✓ Enhanced order management with pending/completed status tracking
✓ Implemented real-time order notifications with sound alerts for admins
✓ Added order completion and removal system for better workflow management

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend, backend, and data layers:

- **Frontend**: React-based single-page application with component-based architecture
- **Backend**: Express.js REST API server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations and persistent data storage
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build System**: Vite for frontend bundling and development server
- **Deployment**: Production-ready build system with ESBuild for backend compilation

The architecture supports both development and production environments with proper error handling, logging, and database management.

## Key Components

### Frontend Architecture
- **React Application**: Built using modern React patterns with hooks and context
- **Component Library**: Extensive use of shadcn/ui components for consistent UI
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query for server state and React Context for local state
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Styling**: Tailwind CSS with CSS variables for theming support

### Backend Architecture
- **Express Server**: RESTful API with middleware for request logging and error handling
- **Authentication**: Simple email-based admin authentication system
- **Database Layer**: Drizzle ORM with PostgreSQL for type-safe database operations
- **Storage Interface**: Abstracted storage layer that supports both in-memory (development) and database (production) implementations
- **API Routes**: Organized route handlers for authentication, products, and orders

### Database Schema
The application uses three main entities:
- **Users**: Admin user management with email-based identification
- **Products**: Juice products with pricing, ingredients, and availability status
- **Orders**: Customer orders with delivery information and order tracking

## Data Flow

1. **Customer Journey**: Customers browse products → select items → fill order form → submit order
2. **Admin Workflow**: Admin login → manage products (CRUD operations) → view/update orders
3. **API Communication**: Frontend communicates with backend through REST endpoints using React Query
4. **Database Operations**: Backend uses Drizzle ORM to interact with PostgreSQL database
5. **Real-time Updates**: React Query handles cache invalidation and automatic refetching

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with TypeScript support
- **Component Library**: Radix UI primitives via shadcn/ui
- **HTTP Client**: Fetch API with React Query for caching and synchronization
- **Form Handling**: React Hook Form with Hookform Resolvers for Zod integration
- **Validation**: Zod for runtime type validation
- **Styling**: Tailwind CSS with PostCSS processing
- **Date Handling**: date-fns for date manipulation
- **Carousel**: Embla Carousel for image galleries

### Backend Dependencies
- **Runtime**: Node.js with TypeScript via tsx
- **Web Framework**: Express.js with body parsing middleware
- **Database**: Neon Database (PostgreSQL) with connection pooling
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Build Tool**: ESBuild for production compilation

### Development Tools
- **Type Checking**: TypeScript with strict mode enabled
- **Build System**: Vite for frontend development and building
- **Database Migrations**: Drizzle Kit for schema management
- **Linting & Formatting**: Built-in TypeScript checking
- **Development Server**: Vite dev server with HMR support

## Deployment Strategy

### Development Environment
- Frontend served by Vite development server with hot module replacement
- Backend runs via tsx with automatic restart on file changes
- Database migrations managed through Drizzle Kit
- Environment variables loaded from local configuration

### Production Build
- Frontend built to static assets using Vite
- Backend compiled to single JavaScript file using ESBuild
- Database schema pushed using Drizzle migrations
- Assets served statically with Express in production

### Database Management
- PostgreSQL database hosted on Neon (serverless PostgreSQL)
- Schema defined in TypeScript using Drizzle ORM
- Migrations handled automatically during deployment
- Connection pooling for optimal performance

### Security Considerations
- Admin authentication limited to specific email address
- CORS handling for cross-origin requests
- Environment variable management for sensitive data
- SQL injection prevention through parameterized queries

The application is designed to be easily deployable to various platforms including Replit, Vercel, or traditional hosting providers, with minimal configuration required for different environments.