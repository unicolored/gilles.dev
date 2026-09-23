import { Component, inject, Input, WritableSignal, ChangeDetectionStrategy } from '@angular/core';
import { ModeEnum } from '../../app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


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
