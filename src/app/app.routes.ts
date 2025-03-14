import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/page-home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/page-about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/page-contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: 'portfolio',
    pathMatch: 'full',
    loadComponent: () => import('./pages/page-portfolio/portfolio.component').then((m) => m.PortfolioComponent),
  },
  {
    path: 'portfolio/category/:category',
    pathMatch: 'full',
    loadComponent: () => import('./pages/page-portfolio/portfolio.component').then((m) => m.PortfolioComponent),
  },
  {
    path: 'portfolio/item/:objectId',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/page-portfolio/portfolio-item.component').then((m) => m.PortfolioItemComponent),
  },
  { path: '**', component: NotFoundComponent },
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
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
