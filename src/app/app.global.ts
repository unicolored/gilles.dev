export const PageIdSlugEnum = {
  home: 'home',
  about: 'about',
  cv: 'developer',
  skills: 'skills',
  tools: 'tools',
  contact: 'contact',
  search: 'search',
  portfolio: 'portfolio',
} as const;

export type PageIdSlugKeys = (typeof PageIdSlugEnum)[keyof typeof PageIdSlugEnum];

export const PortfolioListSlug = {
  ecommerce: 'gilles-dev-online-store',
  development: 'gilles-dev-development',
  logo: 'gilles-dev-logo-design',
  threed: 'gilles-dev-3d-stuff',
  visual: 'gilles-dev-visual-identity',
} as const;

// Convert object key in a type
export type PortfolioListSlugKeys = (typeof PortfolioListSlug)[keyof typeof PortfolioListSlug];
