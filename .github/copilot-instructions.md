# AI Agent Instructions for chrisjohannesson.com-V1

## Project Overview
This is a React-based personal website project using modern web technologies. The project uses Webpack for bundling and SASS for styling.

## Architecture & Structure

### Core Components
- `src/App.js`: Root component with main layout structure (navbar, content area with asides, footer)
- `src/components/`: Reusable React components
- `src/pages/`: Page-specific components (Home, About, Blog, etc.)
- `src/styles/`: SCSS files following component-based structure

### Key Patterns
1. Component-based architecture with matching SCSS files (e.g., `Navbar.js` pairs with `navbar.scss`)
2. Page wrapper structure with Google Ads sidebars (see `App.js`)
3. React Router based navigation (see `components/Routing.js`)

## Development Workflow

### Setup & Running
```bash
npm install        # Install dependencies
npm run app       # Start dev server (runs on http://127.0.0.1:3003)
npm run build     # Production build
```

### Code Style & Linting
- ESLint with Airbnb config
- Run `npm run lint` to check for issues
- Run `npm run lint:fix` to automatically fix issues

## Build Configuration
The project uses a sophisticated Webpack configuration (`webpack.config.js`):
- Development: Source maps & hot reloading enabled
- Production: Asset optimization & code splitting
- SASS compilation with different loaders for dev/prod
- SVG files imported as React components
- Assets handled with specific loaders based on file type

### Asset Management
- JavaScript/JSX: Babel transpilation with caching
- Styles: SASS compilation, extracted in production
- Images: URL loader with 8KB limit for base64 encoding
- Fonts/PDFs: File loader with hashed names
- SVGs: Converted to React components

## Project Conventions
1. CSS naming follows BEM-like pattern (see `page-wrapper`, `content-wrapper`)
2. PDF resources fetched from external domain: `resources.chrisjohannesson.com`
3. Component structure:
   - Functional components with arrow function syntax
   - PropTypes for type checking
   - SCSS imports at component level

## Integration Points
- External resource dependencies (PDF files)
- Google Ads integration points in aside elements
- React Router for client-side routing
- Bootstrap 5.x for base styling

## Common Tasks
- Adding a new page:
  1. Create component in `src/pages/`
  2. Add matching SCSS in `src/styles/`
  3. Update routing in `components/Routing.js`