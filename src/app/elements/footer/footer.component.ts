import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { environment } from '../../../environments/environment';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, FaIconComponent],
  selector: 'gilles-nx-footer',
  template: `
    <footer class="footer not-prose">
      <div class="footer-grid-item footer-social justify-center">
        <ul>
          <li>
            <a rel="me" target="_blank" href="https://github.com/unicolored" title="GitHub Profile">
              <fa-icon [icon]="['fab', 'github-alt']" [fixedWidth]="true" size="2x"></fa-icon>
            </a>
          </li>
          <li>
            <a rel="me" target="_blank" href="https://x.com/GillesHoarau" title="X Profile">
              <fa-icon [icon]="['fab', 'x-twitter']" [fixedWidth]="true" size="2x"></fa-icon>
            </a>
          </li>
        </ul>
        <br />
        <p class="w-full text-center mt-2">
          <a [routerLink]="'/'" [href]="homepage" class="cursor-default no-underline">Gilles Hoarau. Freelance.</a>
        </p>
      </div>

      <!--&lt;!&ndash;    <span> CURRENT MODE:: {{this.mode()}}</span>&ndash;&gt;-->
      <!--  </nav>-->
      <!--    <span *ngIf="this.mode() === 'light'" (click)="setMode('dark')">switch to dark</span>-->
      <!--    <span *ngIf="this.mode() === 'dark'" (click)="setMode('light')">switch to light</span>-->
      <!--&lt;!&ndash;  <button&ndash;&gt;-->
      <!--&lt;!&ndash;    class="flex transition-transform hover:scale-125 align-middle"&ndash;&gt;-->
      <!--&lt;!&ndash;    (click)="clearMode()">&ndash;&gt;-->
      <!--&lt;!&ndash;    <span>auto</span>&ndash;&gt;-->
      <!--&lt;!&ndash;  </button>&ndash;&gt;-->
    </footer>
  `,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  homepage = environment.endpoints._self;
}
