import { RenderMode, ServerRoute } from '@angular/ssr';
import { inject } from '@angular/core';
import { ApiService } from './services/api.service';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'portfolio/category/:category',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      // const blogService = inject(BlogService);
      //
      // const slugs = await blogService.loadBlogArticlesSlugs();
      //
      // return slugs;
      return [{ category: 'Web' }];
    },
  },
  {
    path: 'portfolio/item/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      const apiService = inject(ApiService);
      const slugs = await apiService.loadPortfolioItemSlugs();
      return [{ slug: '...' }];
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
