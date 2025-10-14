import { Component, effect, inject, OnInit, PLATFORM_ID, Renderer2, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser, PRECONNECT_CHECK_BLOCKLIST, provideImgixLoader } from '@angular/common';
import { environment } from '../environments/environment';
import { ThreeCardComponent } from './elements/three-card/three-card.component';
import { CloudinaryModule } from '@cloudinary/ng/dist';
import { HeaderComponent } from './elements/header/header.component';
import { FooterComponent } from './elements/footer/footer.component';
import { HttpService, WEB_PAGE_METAS_MAP } from 'ngx-services';
import { webPageMetasMap } from '../environments/metas';
import { ApiService } from './services/api.service';

export type ModeEnum = 'light' | 'dark' | null;

@Component({
  imports: [CommonModule, RouterModule, ThreeCardComponent, CloudinaryModule, HeaderComponent, FooterComponent],
  providers: [
    HttpService,
    ApiService,
    {
      provide: WEB_PAGE_METAS_MAP,
      useValue: webPageMetasMap,
    },
    { provide: PRECONNECT_CHECK_BLOCKLIST, useValue: 'https://www.gilles.dev' },
    provideImgixLoader('https://res.cloudinary.com/unicolored/cloud-coelis/prod/'),
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  mode = signal<ModeEnum>(null);
  loading = false;
  platformID = inject(PLATFORM_ID);

  constructor(private renderer: Renderer2) {
    effect(() => {
      this.setHtmlClass(this.mode());
    });
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformID)) {
      this.mode.set(window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');

      if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
        this.mode.set('dark');
        this.setHtmlClass('dark');
      }

      window.matchMedia('(prefers-color-scheme:dark)').onchange = (e) => {
        this.mode.set(e.matches ? 'dark' : 'light');
        this.setHtmlClass('dark');
      };
    }
  }

  private setHtmlClass(mode: ModeEnum) {
    if (isPlatformBrowser(this.platformID)) {
      const html = document.documentElement;
      if (mode === 'light') {
        this.renderer.removeClass(html, 'dark');
        this.renderer.addClass(html, 'light');
      }
      if (mode === 'dark') {
        this.renderer.removeClass(html, 'light');
        this.renderer.addClass(html, 'dark');
      }
    }
  }

  protected readonly environment = environment;
}
