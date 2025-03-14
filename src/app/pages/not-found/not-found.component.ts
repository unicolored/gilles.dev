import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageInterface } from '../page.interface';
import { environment } from '../../../environments/environment';
import { WEB_PAGE_METAS_MAP, WebPageMetas, WebPageService } from 'ngx-services';

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
export class NotFoundComponent implements OnInit, PageInterface {
  pageId = '404';

  private readonly webPageService = inject(WebPageService);
  private webPageMetasMap = inject<Map<string, WebPageMetas>>(WEB_PAGE_METAS_MAP);

  ngOnInit() {
    if (this.webPageMetasMap.has(this.pageId)) {
      this.webPageService.setMetas(this.webPageMetasMap.get(this.pageId), environment.endpoints?.['_self']);
    }
  }
}
