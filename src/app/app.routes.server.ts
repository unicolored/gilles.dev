import { RenderMode, ServerRoute } from '@angular/ssr';
//import { ApiService } from './services/api.service';
//import { inject } from '@angular/core';

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
      // const apiService = inject(ApiService);
      // return await apiService.loadPortfolioItemSlugs();
      return [
        {
          slug: 'bibliotheque-saint-laurent',
        },
        {
          slug: 'la-compagnie-du-loup-bleu',
        },
        {
          slug: 'regina-caeli',
        },
        {
          slug: 'champagne-y-laval',
        },
        {
          slug: 'm-d-france',
        },
        {
          slug: 'champagne-bernard-robert',
        },
        {
          slug: 'on-the-move',
        },
        {
          slug: 'unicolored',
        },
        {
          slug: 'studio-grappe-champagne-et-vin',
        },
      ];
      //return [{ slug: 'regina-caeli' }];
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
