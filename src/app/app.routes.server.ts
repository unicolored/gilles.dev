import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // {
  //   path: PageIdSlugEnum.blog + '/article/:slug',
  //   renderMode: RenderMode.Prerender,
  //   getPrerenderParams: async () => {
  //     const blogService = inject(BlogService);
  //
  //     const slugs = await blogService.loadBlogArticlesSlugs();
  //
  //     return slugs;
  //   },
  // },
  // {
  //   path: '**',
  //   renderMode: RenderMode.Prerender,
  // },
];
