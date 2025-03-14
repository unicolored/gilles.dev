import { Component, inject, Input, WritableSignal } from '@angular/core';
import { ModeEnum } from '../../app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  selector: 'gilles-nx-header',
  template: `
    <nav class="g-navbar">
      <div class="items">
        <ng-container *ngFor="let item of navItems">
          <a
            class="item"
            [routerLink]="item.route"
            [routerLinkActive]="'active'"
            [routerLinkActiveOptions]="{ exact: true }"
            [title]="item.name"
          >
            {{ item.name }}
          </a>
        </ng-container>
      </div>

      <div class="actions"></div>
    </nav>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() mode!: WritableSignal<ModeEnum>;
  private router = inject(Router);

  navItems = [
    {
      name: $localize`Hello!`,
      route: '/',
    },
    {
      name: $localize`About`,
      route: '/about',
    },
    {
      name: $localize`Contact`,
      route: '/contact',
    },
  ];
}
