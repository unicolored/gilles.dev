# gilles.dev — Agent Guide

## Overview

Personal portfolio site for **Gilles Hoarau** — freelance graphic designer & web developer.  
Built with Angular 19, SSR, Tailwind CSS 4, Algolia search, Three.js, Cloudinary.

**Domain:** https://gilles.dev  
**Deploy:** GitHub Pages via `ngh --dir=dist/gilles.dev/browser`

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Angular 19.2 (standalone components, zoneless change detection) |
| Rendering | SSR + SSG (prerender: true) via `@angular/ssr` |
| Styling | Tailwind CSS 4 + custom SCSS (`src/styles/`) |
| Search | Algolia (instantsearch.js v4, algoliasearch v5) |
| 3D | Three.js (background rotating wireframe cube) |
| Images | Cloudinary (transform via Cloudinary URL API + `@cloudinary/ng`) |
| Icons | (TODO: Have to find a free library of icons compatible) |
| i18n | Angular `@angular/localize` (xliff) |
| Backend data | WordPress REST API (via internal `ngx-services` library) |
| Schema | `schema-dts` for JSON-LD structured data |
| Lint | ESLint flat config + Prettier |
| Package mgr | Yarn (v4, with `yarnrc.yml`) |

---

## Routes

| Path | Component | Lazy |
|---|---|---|
| `/` | `HomeComponent` | Yes |
| `/about` | `AboutComponent` | Yes |
| `/contact` | `ContactComponent` | Yes |
| `/portfolio` | `PortfolioComponent` | Yes |
| `/portfolio/category/:category` | `PortfolioComponent` | Yes |
| `/portfolio/item/:objectId` | `PortfolioItemComponent` | Yes |
| `**` | `NotFoundComponent` | No |

---

## Key Architecture Decisions

### 1. Zoneless Change Detection
Uses `provideZonelessChangeDetection()` — no zone.js. Signals + `effect()` for reactivity.

### 2. SSR + SSG
- `prerender: true` in angular.json — pre-renders routes at build time
- `@angular/platform-server` + Express for server
- Hydration with `withEventReplay()`

### 3. View Transitions
```ts
withViewTransitions()  // in provideRouter
enableViewTransitions: true  // in RouterModule.forRoot
```
Custom CSS in `_view-transition.scss`.

### 4. Algolia Search
- Two search indexes: `GHCOMsearchable_posts` (portfolio items) and `GHCOMposts_attachment`
- `InstantSearchService` wraps `algoliasearch/lite` client
- InstantSearch widgets (`connectHits`, `connectConfigure`) for reactive UI
- Search filtering by `taxonomies.category` (design, dev)
- Single item lookup via `filters: 'objectID:xxx'`

### 5. Image Pipeline
- Portfolio images sourced from WordPress, transformed via Cloudinary
- URL format: `f_webp,q_auto,w_600,c_fill,ar_16:9/{publicId}.webp`
- `extractText()` helper strips dimensions from original URL to get public ID

### 6. Dark/Light Mode
- Detected via `prefers-color-scheme` media query
- `dark`/`light` class on `<html>` element
- Controlled via `AppComponent.mode` signal

### 7. SEO
- `WebPageService` from ngx-services injects meta tags + JSON-LD schema per route
- Config in `environments/metas.ts` with `schema-dts`

---

## Data Flow

```
WordPress REST API
  ↓  WordpressService (ngx-services)
  ↓  AppService (cached via shareReplay)
  ↓  PortfolioItemAttachmentsComponent

Algolia
  ↓  InstantSearchService
  ↓  connectHits / connectConfigure
  ↓  PortfolioHitsComponent / PortfolioItemComponent
```

---

## Portfolios — Two Approaches

1. **Current (Algolia-based):**
   - `PortfolioHitsComponent` — grid of hits from Algolia search
   - `PortfolioItemComponent` — detail from Algolia objectID + WP media attachments via REST
   - `/portfolio/category/:category` filters by `taxonomies.category`

2. **Legacy (WordPress direct):**
   - `PortfolioPostsComponent` — direct WP REST API post list (not used in routes)

---

## NPM Scripts

| Script | Command |
|---|---|
| `start` | `ng serve gilles.dev` |
| `build` | `ng build` |
| `prod` | `ng build --configuration production --base-href "https://gilles.dev/"` |
| `deploy` | `ngh --dir=dist/gilles.dev/browser` |
| `i18n` | `ng extract-i18n ...` |
| `lint` | `ng lint` |
| `format` | `npx prettier -w ./src ./projects` |
| `test` | `ng test` (Karma) |
| `serve:ssr:gilles.dev` | Node SSR server |

---

## Environment Config

```ts
environment = {
  maintenance: boolean,
  endpoints: { _self: string },
  algolia: { appId, apiKey },
  webPageMetasMap: Map<PageIdSlugEnum, WebPageMetas>
}
```

Production env overrides `endpoints._self` and Algolia keys.

---

## Conventions

- **Standalone components** everywhere (no NgModules except `AppRoutingModule` for root routing)
- **OnPush** not explicit — zoneless handles it
- **`input()` / `output()`** functions over `@Input()` / `@Output()` decorators
- **Control flow** uses `@if`, `@for`, `@defer` templates
- **SCSS** with `@use` (not `@import`)
- **i18n** with `i18n` attribute + `$localize` tag
- **Tests** skipped by default (schematics config in angular.json)

---

## Contact

Email: `contact@gilles.dev` (obfuscated + clipboard copy)  
GitHub: `@unicolored`  
X: `@GillesHoarau`
