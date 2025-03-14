import { Component } from '@angular/core';
import { PagesService } from '../pages.service';
import { RouterModule } from '@angular/router';
import { PageModel } from '../page.model';
import { PageInterface } from '../page.interface';

@Component({
  standalone: true,
  imports: [RouterModule],
  template: `
    <main class="page-prose">
      <section>
        <div class="pt-6 pb-10">
          <h1><strong>Nothing here! 🤔</strong></h1>
        </div>

        <div class="pt-2 pb-5">
          <a class="cta" routerLink="/" i18n> Home sweet Home </a>
        </div>
      </section>
    </main>
  `,
  styleUrls: ['../pages.common.scss'],
})
export class NotFoundComponent extends PageModel implements PageInterface {
  pageId = '404';
  constructor(pagesService: PagesService) {
    super(pagesService);
    this.setTitle(this.pageId);
  }
}
