import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarData } from 'js-interface';

@Component({
  selector: 'gilles-nx-navbar-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar-menu.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
})
export class NavbarMenuComponent {
  @Input() navbarData: NavbarData = {};
  @Input() cssclass!: string;
  @Input() horizontal = true;
}
