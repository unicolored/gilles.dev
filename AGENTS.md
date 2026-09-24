# AGENTS.md - Agent Coding Guidelines

This document provides guidelines for agentic coding agents working in this repository.

## Project Overview

- **Framework:** Angular 20 with standalone components, signals, and zoneless change detection
- **Package Manager:** Yarn 4 (with corepack)
- **TypeScript:** Strict mode enabled
- **CSS:** TailwindCSS v4 with custom CSS imports

## Build, Lint, and Test Commands

### Development

```bash
yarn dev          # Start dev server on port 4242 with SSL
yarn watch        # Watch mode for development builds
```

### Building

```bash
yarn build        # Production build (runs prebuild first)
yarn prebuild     # Set env vars, build ngx-services lib, generate portfolio data
```

### Testing

```bash
yarn test         # Run Karma tests via ng test
```

### Linting and Formatting

```bash
yarn lint         # Run Angular ESLint
yarn eslint       # Run ESLint on src and projects
yarn check        # Prettier check (read-only)
yarn format       # Prettier write (modifies files)
```

### Other Commands

```bash
yarn i18n         # Extract i18n strings
yarn deploy       # Deploy to GitHub Pages
```

## Code Style Guidelines

### TypeScript

- **Strict mode** is enabled in tsconfig.json
- Use `noImplicitOverride`, `noPropertyAccessFromIndexSignature`, `noImplicitReturns`, `noFallthroughCasesInSwitch`
- Always define return types for functions when possible
- Use `const` by default, `let` only when reassignment is needed

### Angular Patterns

- **Standalone components** - Use `standalone: true` (default in Angular 17+)
- **Signals** - Prefer signals for component state over RxJS BehaviorSubjects
- **Dependency Injection** - Use `inject()` function instead of constructor injection:
  ```typescript
  private service = inject(ServiceName);
  ```
- **Zoneless** - Use `provideZonelessChangeDetection()` in app config
- **Lazy loading** - Use `loadComponent` and `loadChildren` for routes

### Import Ordering

Organize imports in this order (separate with blank lines):

1. Angular core modules (@angular/\*)
2. Angular community modules (angularx-qrcode, etc.)
3. External libraries (rxjs, three, cloudinary, etc.)
4. Internal services/components from ngx-services
5. Internal application code (services, components, interfaces)
6. Environment files

```typescript
// Example import order
import { Component, inject, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpService } from 'ngx-services';
import { environment } from '../../environments/environment';
import { ApiService } from './services/api.service';
import { Post } from './interfaces/api-post';
```

### Naming Conventions

- **Components:** kebab-case (e.g., `header.component.ts`)
- **Services:** camelCase with `Service` suffix (e.g., `api.service.ts`)
- **Interfaces:** PascalCase (e.g., `ApiPost`)
- **Enums:** PascalCase with enum members in camelCase or UPPER_SNAKE_CASE
- **Constants:** UPPER_SNAKE_CASE for configuration values
- **CSS Classes:** kebab-case (via Tailwind)

### File Organization

```
src/
  app/
    elements/       # Reusable UI components
    pages/          # Page-level components
    services/      # Application services
    interfaces/    # TypeScript interfaces/types
  environments/    # Environment configuration
  styles/          # CSS files
projects/
  ngx-services/    # Library package
```

### Error Handling

- Use try/catch with async functions, return fallback values:
  ```typescript
  try {
    const data = await lastValueFrom(this.http.get(...));
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return []; // Fallback value
  }
  ```
- For observables, use `catchError` with `of()` to return default values:
  ```typescript
  pipe(
    catchError((error) => {
      console.error('Error:', error);
      return of({ items: [] });
    }),
  );
  ```

### Templates and Styles

- Angular schematics are configured for inline templates and styles:
  ```json
  "@schematics/angular:component": {
    "inlineTemplate": true,
    "inlineStyle": true,
    "skipTests": true
  }
  ```
- Use TailwindCSS utility classes in templates
- Custom CSS is imported via `@import` in styles.css

### Prettier Configuration

Located in `.prettierrc`:

- `singleQuote: true`
- `printWidth: 120`
- `tabWidth: 2`
- `semi: true`
- Uses `prettier-plugin-tailwindcss`

### ESLint Configuration

Located in `eslint.config.mjs`:

- Uses `typescript-eslint` with recommended rules
- `semi: error` (required semicolons)
- Ignores `dist/**/*`

## Testing

- Test files use `.spec.ts` suffix
- Karma is configured as test runner
- Angular schematics generate specs with `skipTests: true` by default

## Dependencies

Key dependencies:

- `@angular/core`: ^20.3.9
- `tailwindcss`: ^4.1.13
- `rxjs`: ~7.8.0
- `three`: ^0.175.0
- `ngx-services`: Local library in `projects/ngx-services/`

## Environment

- Development runs on `https://0.0.0.0:4242` with SSL
- Use `NODE_TLS_REJECT_UNAUTHORIZED=0` for local development if needed
- Environment files: `src/environments/environment.ts` (dev) and `environment.production.ts`
