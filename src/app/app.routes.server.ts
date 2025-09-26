import { RenderMode, ServerRoute } from '@angular/ssr';

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
    path: 'portfolio/item/:objectId',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return [{ objectId: '...' }];
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
