import { Component, Input, signal, WritableSignal } from '@angular/core';
import { ModeEnum } from '../../app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PageIdSlugEnum } from '../../app.global';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  selector: 'gilles-nx-header',
  template: `
    <nav class="g-navbar">
      <div class="items">
        @for (item of navItems; track item.name; let i = $index) {
          <a
            class="item"
            [routerLink]="item.route"
            [routerLinkActive]="'active'"
            [routerLinkActiveOptions]="{ exact: true }"
            [title]="item.name"
          >
            {{ item.name }}
          </a>
        }
      </div>

      <div class="actions">
        <button class="search-link" [routerLink]="['search']">
          <svg
            class="hover:fill-accent dark:hover:fill-dark-accent fill-dark-bkg dark:fill-bkg cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path
              d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"
            />
          </svg>
        </button>
      </div>

      <!-- Burger button for mobile -->
      <button class="burger" (click)="toggleMenu()">
        <span></span>
        <span></span>
        <span></span>
      </button>

      @if (isMenuOpen()) {
        <div class="mobile-menu">
          <button class="close-btn" (click)="toggleMenu()">×</button>
          @for (item of navItems; track item.name) {
            <a
              class="mobile-item"
              [routerLink]="item.route"
              [routerLinkActive]="'active'"
              [routerLinkActiveOptions]="{ exact: true }"
              [title]="item.name"
              (click)="toggleMenu()"
            >
              {{ item.name }}
            </a>
          }
        </div>
      }
    </nav>
  `,
})
export class HeaderComponent {
  @Input() mode!: WritableSignal<ModeEnum>;

  navItems = [
    {
      name: `👋 Hello`,
      route: '/',
    },
    {
      name: `CV`,
      route: '/' + PageIdSlugEnum.cv,
    },
    {
      name: `Skills`,
      route: '/' + PageIdSlugEnum.skills,
    },
    {
      name: `Tools`,
      route: '/' + PageIdSlugEnum.tools,
    },
    {
      name: `Portfolio`,
      route: '/' + PageIdSlugEnum.portfolio,
    },
    // {
    //   name: `Blog`,
    //   route: '/blog',
    // },
    // {
    //   name: `Contact`,
    //   route: '/contact',
    // },
  ];
  //
  // Assuming navItems is already defined, e.g., as a signal or array
  isMenuOpen = signal(false);

  toggleMenu(): void {
    this.isMenuOpen.set(!this.isMenuOpen());
  }
}
