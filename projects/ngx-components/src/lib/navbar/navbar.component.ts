import { Component, Inject, InjectionToken, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarMenuComponent } from './menu/navbar-menu.component';
import { NavbarData } from 'js-interface';

export const NAVBAR_DATA_MAIN = new InjectionToken<string>('');
export const NAVBAR_DATA_MOBILE = new InjectionToken<string>('');

@Component({
  selector: 'gilles-nx-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarMenuComponent],
  templateUrl: './navbar.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent {
  @Input() navbarDataMain!: NavbarData;
  @Input() navbarDataMobile!: NavbarData;

  constructor(
    @Inject(NAVBAR_DATA_MAIN) private readonly defaultNavbarDataMain: NavbarData,
    @Inject(NAVBAR_DATA_MOBILE) private readonly defaultNavbarDataMobile: NavbarData,
  ) {
    this.navbarDataMain = this.navbarDataMain ?? this.defaultNavbarDataMain;
    this.navbarDataMobile = this.navbarDataMobile ?? this.defaultNavbarDataMobile;
  }
}
