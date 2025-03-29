import { Component, effect, inject, InjectionToken, OnInit, PLATFORM_ID, Renderer2, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser, PRECONNECT_CHECK_BLOCKLIST, provideImgixLoader } from '@angular/common';
import { environment } from '../environments/environment';
import { ThreeCardComponent } from './elements/three-card/three-card.component';
import { CloudinaryModule } from '@cloudinary/ng/dist';
import { faGithubAlt, faXTwitter } from '@awesome.me/kit-19be47d78a/icons/classic/brands';
import { faUnicolored } from '@awesome.me/kit-19be47d78a/icons/kit/custom';
import {
  faChevronsLeft,
  faChevronsRight,
  faXmarkLarge,
  faPhoneRotary,
  faEnvelope,
  faCommentSmile,
  faHandWave,
  faUserCowboy,
  faLaptopCode,
  faStarChristmas,
  faHeart,
} from '@awesome.me/kit-19be47d78a/icons/sharp-duotone/solid';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './elements/header/header.component';
import { FooterComponent } from './elements/footer/footer.component';
import { HttpService, WEB_PAGE_METAS_MAP } from 'ngx-services';

const FONT_AWESOME_ICON_DEFINITION_LIST = new InjectionToken<IconDefinition[]>('');

export type ModeEnum = 'light' | 'dark' | null;

@Component({
  imports: [CommonModule, RouterModule, ThreeCardComponent, CloudinaryModule, HeaderComponent, FooterComponent],
  providers: [
    HttpService,
    {
      provide: WEB_PAGE_METAS_MAP,
      useValue: environment.webPageMetasMap,
    },
    { provide: PRECONNECT_CHECK_BLOCKLIST, useValue: 'https://www.gilleshoarau.com' },
    provideImgixLoader('https://res.cloudinary.com/unicolored'),
    {
      provide: FONT_AWESOME_ICON_DEFINITION_LIST,
      useValue: [
        faXmarkLarge,
        faChevronsLeft,
        faChevronsRight,
        faGithubAlt,
        faXTwitter,
        faUnicolored,
        faPhoneRotary,
        faHeart,
        faEnvelope,
        faCommentSmile,
        faHandWave,
        faUserCowboy,
        faLaptopCode,
        faStarChristmas,
      ],
    },
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  mode = signal<ModeEnum>(null);
  loading = false;
  private readonly fontAwesomeIconDefinitionList: IconDefinition[] = inject(FONT_AWESOME_ICON_DEFINITION_LIST);
  library = inject(FaIconLibrary);
  platformID = inject(PLATFORM_ID);

  constructor(private renderer: Renderer2) {
    this.library.addIcons(...this.fontAwesomeIconDefinitionList);

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
