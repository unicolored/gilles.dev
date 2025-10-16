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

      <div class="actions"></div>

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
