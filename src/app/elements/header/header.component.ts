import { Component, Input, WritableSignal } from '@angular/core';
import { ModeEnum } from '../../app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  selector: 'gilles-nx-header',
  template: `
    <nav class="g-navbar">
      <div class="items">
        @for (item of navItems; track item.name) {
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
  styleUrls: [
    //'./header.component.css',
    '../header-footer.css',
  ],
})
export class HeaderComponent {
  @Input() mode!: WritableSignal<ModeEnum>;

  navItems = [
    {
      name: `👋`,
      route: '/',
    },
    {
      name: `Curriculum Vitae`,
      route: '/cv',
    },
    {
      name: `Portfolio`,
      route: '/portfolio',
    },
    {
      name: `Blog`,
      route: '/blog',
    },
    // {
    //   name: `Contact`,
    //   route: '/contact',
    // },
  ];
}
