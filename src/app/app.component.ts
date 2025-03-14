import { Component, effect, inject, OnInit, Renderer2, signal } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule, PRECONNECT_CHECK_BLOCKLIST, provideImgixLoader } from '@angular/common';
import { environment } from '../environments/environment';
import { ThreeCardComponent } from './elements/three-card/three-card.component';
import { PagesService } from './pages/pages.service';
import { CloudinaryModule } from '@cloudinary/ng/dist';
import { faGithubAlt, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faXmarkLarge, faChevronsLeft, faChevronsRight } from '@fortawesome/sharp-duotone-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './elements/header/header.component';
import { FooterComponent } from './elements/footer/footer.component';
import { AngularFireModule } from '@angular/fire/compat';
import { HttpService, WEB_PAGE_METAS_MAP } from 'ngx-services';
import { FONT_AWESOME_ICON_DEFINITION_LIST } from '../../projects/ngx-services/src/webPage/web-page.base.component';

export type ModeEnum = 'light' | 'dark' | null;

@Component({
  imports: [CommonModule, RouterModule, ThreeCardComponent, CloudinaryModule, HeaderComponent, FooterComponent],
  providers: [
    // AppService,
    // WordpressService,
    HttpService,
    // AuthService,
    // AuthGuard,
    // LoggedInGuard,
    {
      provide: WEB_PAGE_METAS_MAP,
      useValue: environment.webPageMetasMap,
    },
    { provide: PRECONNECT_CHECK_BLOCKLIST, useValue: 'https://www.gilleshoarau.com' },
    provideImgixLoader('https://res.cloudinary.com/unicolored'),
    {
      provide: FONT_AWESOME_ICON_DEFINITION_LIST,
      useValue: [faXmarkLarge, faChevronsLeft, faChevronsRight, faGithubAlt, faXTwitter],
    },
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  mode = signal<ModeEnum>(null);
  loading = false;
  darkClass = 'dark';

  // Access html tag element

  // @HostBinding('class.dark') get mode() {
  //   return true;
  //   // return this.darkMode();
  // }

  private readonly fontAwesomeIconDefinitionList: IconDefinition[] = inject(FONT_AWESOME_ICON_DEFINITION_LIST);
  // appService = inject(AppService);
  library = inject(FaIconLibrary);
  // store = inject(Store);

  constructor(
    router: Router,
    pagesService: PagesService,
    private renderer: Renderer2,
  ) {
    this.library.addIcons(...this.fontAwesomeIconDefinitionList);

    AngularFireModule.initializeApp(environment.firebaseConfig);

    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const language: 'en' | 'fr' = 'en'; // Extract language from route or any other source
        pagesService.updateCanonicalUrl(language);
      }
    });

    // this.darkMode.update((value) => {
    //   if (value === null) {
    //     window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
    //     return window.matchMedia('(prefers-color-scheme:dark)').matches;
    //   }
    //   return JSON.parse(
    //     window.localStorage.getItem('darkMode')
    //     || JSON.stringify(window.matchMedia('(prefers-color-scheme:dark)').matches)
    //   );
    // });
    effect(() => {
      this.setHtmlClass(this.mode());
      // if (this.darkMode() === null) {
      //   window.localStorage.removeItem('darkMode');
      //   window.localStorage.setItem('darkMode', JSON.stringify(window.matchMedia('(prefers-color-scheme:dark)').matches));
      //
      // } else {
      //   window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
      // }
    });

    // this.router.events.subscribe((event: unknown) => {
    //   switch (true) {
    //     case event instanceof NavigationStart:
    //       this.loading = true;
    //       break;
    //     case event instanceof NavigationEnd:
    //     case event instanceof NavigationCancel:
    //     case event instanceof NavigationError:
    //       this.loading = false;
    //       break;
    //     default:
    //       break;
    //   }
    // });
  }

  ngOnInit(): void {
    this.mode.set(window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');

    if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
      this.mode.set('dark');
      this.setHtmlClass('dark');
    } /*else if (window.matchMedia('(prefers-color-scheme:light)').matches) {
      this.mode.set('light');
      this.setHtmlClass('light');
    }*/

    // const html = document.documentElement;
    // window.matchMedia('(prefers-color-scheme:light)').onchange = (e) => {
    //   console.log('CHANGED FOR LIGHT', e.matches);
    //
    //   this.mode.set(e.matches ? 'light' : 'dark');
    //   this.setHtmlClass('light');
    //   // this.renderer.removeClass(html, this.darkClass);
    // };

    window.matchMedia('(prefers-color-scheme:dark)').onchange = (e) => {
      this.mode.set(e.matches ? 'dark' : 'light');
      this.setHtmlClass('dark');
      // this.renderer.addClass(html, this.darkClass);
    };
  }

  private setHtmlClass(mode: ModeEnum) {
    const html = document.documentElement;
    if (mode === 'light') {
      this.renderer.removeClass(html, 'dark');
      this.renderer.addClass(html, 'light');
    }
    if (mode === 'dark') {
      // this.darkMode.set(true);
      this.renderer.removeClass(html, 'light');
      this.renderer.addClass(html, 'dark');
    }
  }

  protected readonly environment = environment;
}
