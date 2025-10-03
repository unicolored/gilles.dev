import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    //loadComponent: () => import('./pages/page-home/home.component').then((m) => m.HomeComponent),
    loadComponent: () => import('./pages/page-about/about.component').then((m) => m.AboutComponent),
  },
  // {
  //   path: 'about',
  //   loadComponent: () => import('./pages/page-about/about.component').then((m) => m.AboutComponent),
  // },
  {
    path: 'cv',
    loadComponent: () => import('./pages/page-xp/xp.component').then((m) => m.XpComponent),
  },
  // {
  //   path: 'contact',
  //   loadComponent: () => import('./pages/page-contact/contact.component').then((m) => m.ContactComponent),
  // },
  {
    path: 'portfolio',
    pathMatch: 'full',
    loadComponent: () => import('./pages/page-portfolio/portfolio.component').then((m) => m.PortfolioComponent),
  },
  {
    path: 'projects',
    pathMatch: 'full',
    loadComponent: () => import('./pages/page-projects/projects.component').then((m) => m.ProjectsComponent),
  },
  {
    path: 'portfolio/category/:category',
    pathMatch: 'full',
    loadComponent: () => import('./pages/page-portfolio/portfolio.component').then((m) => m.PortfolioComponent),
  },
  {
    path: 'portfolio/item/:slug',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/page-portfolio/portfolio-item.component').then((m) => m.PortfolioItemComponent),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabledBlocking',
      onSameUrlNavigation: 'ignore',
      enableViewTransitions: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
