import { Component, inject, Input, WritableSignal, ChangeDetectionStrategy, signal } from '@angular/core';
import { ModeEnum } from '../../app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { PageIdSlugEnum } from '../../app.global';

@Component({
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  selector: 'gilles-nx-header',
  template: `
    <nav class="g-navbar">
      <div class="items">
        @for (item of navItems; track item) {
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
    </nav>
    `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./header.component.scss'],
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
