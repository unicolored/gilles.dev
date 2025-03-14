import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gilles-nx-signup-form',
  standalone: true,
  imports: [CommonModule],
  template: `<p>login works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
})
export class SignupFormComponent {}
