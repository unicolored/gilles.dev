import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  selector: 'gilles-nx-footer',
  template: `
    <footer class="footer not-prose">
      <div class="footer-grid-item footer-social justify-center">
        <ul>
          <li>
            <a rel="me" target="_blank" href="https://unicolo.red" title="Red Journey"> unicolored </a>
          </li>
          <li>
            <a rel="me" target="_blank" href="https://github.com/unicolored" title="GitHub Profile"> github </a>
          </li>
        </ul>
        <br />
        <p class="w-full text-center mt-10">
          <a [routerLink]="'/'" [href]="homepage" class="cursor-default no-underline">Gilles. Developer.</a>
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
  //styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  homepage = environment.endpoints._self;
}
