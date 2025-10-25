import { RenderMode, ServerRoute } from '@angular/ssr';
import { ApiService } from './services/api.service';
import { inject } from '@angular/core';

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
      return await apiService.loadPortfolioItemSlugs();
    },
  },
  {
    path: 'blog/page/:page',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      const apiService = inject(ApiService);
      return await apiService.loadPageNumbers();
    },
  },
  {
    path: 'blog/post/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      const apiService = inject(ApiService);
      return await apiService.loadBlogPostSlugs();
    },
  },
  {
    path: 'remote/:pin',
    renderMode: RenderMode.Client,
  },
  {
    path: 'tv/:pin',
    renderMode: RenderMode.Client,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
