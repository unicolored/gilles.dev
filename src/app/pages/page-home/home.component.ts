import { Component, inject, OnInit } from '@angular/core';
import { PageInterface } from '../page.interface';
import { WEB_PAGE_METAS_MAP, WebPageMetas, WebPageService } from 'ngx-services';
import { PageIdSlugEnum } from '../../app.global';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { SharedNgComponentsModule } from '../shared-ng-components.module';
import { InstantSearchService } from '../../services/instantsearch.service';

@Component({
  standalone: true,
  imports: [CommonModule, SharedNgComponentsModule],
  template: `
    <main class="page-prose">
      <div class="hero pt-8 pb-4">
        <div class="hero-content w-full text-left">
          <section class="w-full">
            <header class="not-prose text-center">
              <h1 class="text-5xl leading-snug font-bold">Gilles HOARAU</h1>
              <h2 class="text-accent font-mono text-xl leading-snug font-bold" i18n>Creative Full-Stack Developer</h2>
            </header>

            <article class="hidden">
              <h3 class="leading-snug font-bold">
                <span i18n>I've been working on creative projects for many many years 🙏</span>
              </h3>
              <p>
                <span i18n>
                  I became expert in every steps, including graphic designs, websites and web apps, online payment,
                  performant hosting. May&nbsp;I&nbsp;help&nbsp;you?
                </span>
              </p>
            </article>
          </section>
        </div>
      </div>
    </main>
  `,
  styleUrls: [],
})
export class HomeComponent implements OnInit, PageInterface {
  pageId = PageIdSlugEnum.home;

  private readonly webPageService = inject(WebPageService);
  private webPageMetasMap = inject<Map<string, WebPageMetas>>(WEB_PAGE_METAS_MAP);
  public searchService = inject(InstantSearchService);

  ngOnInit() {
    if (this.webPageMetasMap.has(this.pageId)) {
      this.webPageService.setMetas(this.webPageMetasMap.get(this.pageId), environment.endpoints?.['_self']);
    }
  }
}
