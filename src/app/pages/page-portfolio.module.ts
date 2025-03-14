import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { SharedNgComponentsModule } from './shared-ng-components.module';
import { ThreeCardComponent } from '../elements/three-card/three-card.component';
import { PortfolioHitsComponent } from '../elements/portfolio/portfolio-hits.component';
import { ModalComponent } from '../elements/modal/modal.component';
import { PortfolioComponent } from './page-portfolio/portfolio.component';

export const routes: Route[] = [
  { path: 'category/:category', pathMatch: 'full', component: PortfolioComponent },
  { path: 'item/:item', pathMatch: 'full', component: PortfolioComponent },
  { path: '', pathMatch: 'full', component: PortfolioComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedNgComponentsModule,
    ThreeCardComponent,
    NgOptimizedImage,
    PortfolioHitsComponent,
    ModalComponent,
  ],
  declarations: [PortfolioComponent],
  exports: [PortfolioComponent],
})
export class PagePortfolioModule {}
