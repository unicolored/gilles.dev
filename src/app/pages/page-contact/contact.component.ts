import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { PageInterface } from '../page.interface';
import { WEB_PAGE_METAS_MAP, WebPageMetas, WebPageService } from 'ngx-services';
import { environment } from '../../../environments/environment';
import { PageIdSlugEnum } from '../../app.global';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="page-prose prose lg:prose-lg">
      <section class="main contact">
        <div class="hero-title pt-2 pb-5">
          <h1>
            <fa-icon [icon]="['fasds', 'phone-rotary']" [fixedWidth]="true"></fa-icon>
            &nbsp; <span i18n>Call me</span>
          </h1>
          <p class="mb-10" i18n>
            Whether you have a creative&nbsp;venture or an everyday&nbsp;challenge, I&nbsp;would be happy
            to&nbsp;discuss <fa-icon [icon]="['fasds', 'comment-smile']" [fixedWidth]="true" size="2x"></fa-icon>
          </p>
        </div>
        <div class="pt-2 pb-5 content">
          <!--<div class="myPhone">
            <a href="tel:+33663078396">
              <fa-icon [icon]="['fas', 'mobile-screen-button']" [fixedWidth]="true"></fa-icon>
              +33 6 63 07 83 96
            </a>
          </div>-->
          <div class="myEmail" #emailElement (click)="copyEmailToClipboard()">
            <a>
              <fa-icon [icon]="['fasds', 'envelope']" [fixedWidth]="true"></fa-icon>
              <span>{{ this.myEmail }}</span>
            </a>
            <span *ngIf="copySuccess" class="copy-success-tooltip" [class.show]="copySuccess" i18n>Copied!</span>
          </div>
        </div>
      </section>
    </main>
  `,
  //styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit, PageInterface {
  pageId = PageIdSlugEnum.contact;
  myEmail = 'contact@gilles.dev';
  @ViewChild('emailElement', { static: true }) emailElement!: ElementRef;
  copySuccess = false;

  private readonly webPageService = inject(WebPageService);
  private webPageMetasMap = inject<Map<string, WebPageMetas>>(WEB_PAGE_METAS_MAP);

  // library = inject(FaIconLibrary);
  // protected readonly faPhoneRotary = faPhoneRotary;

  ngOnInit(): void {
    // Add multiple icons to the library
    // this.library.addIcons(fasCalendar, fasMobileScreenButton, fasArrowUpRightFromSquare, fasEnvelope);

    if (this.webPageMetasMap.has(this.pageId)) {
      this.webPageService.setMetas(this.webPageMetasMap.get(this.pageId), environment.endpoints?.['_self']);
    }
  }

  async copyEmailToClipboard() {
    if (this.emailElement?.nativeElement) {
      try {
        await navigator.clipboard.writeText(this.myEmail);
        this.copySuccess = true;
      } catch (err) {
        console.log(err);
        this.copySuccess = false;
      }
    }
    setTimeout(() => {
      this.copySuccess = false;
    }, 1000);
  }
}
