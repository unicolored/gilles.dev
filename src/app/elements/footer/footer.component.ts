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
      <p class="mb-0 text-left font-serif text-xl">Gilles Hoarau. Developer <br /><small>Aube, France</small></p>
      <p class="mt-0 text-left">
        <!--Check <a href="/cv">my resume</a>.<br />-->
        👋 <a href="mailto:hello@gilles.dev">hello&#64;gilles.dev</a>
      </p>
      <div class="footer-grid-item footer-social justify-center">
        <ul>
          <!--<li>
            <a rel="me" target="_blank" href="https://unicolo.red" title="Red Journey" class="footer-icon">
              <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="-0.25 -1.5 20 20">
                <path
                  d="M10.727,12.364h1.455v-1.455h-1.091c-.201,0-.364-.163-.364-.364V.727h-1.455v10.182h0s0,0,0,0c0,.803.651,1.455,1.455,1.455Z"
                />
                <path
                  d="M15.091,13.454c0,.201-.163.364-.364.364H4.909v1.455h10.182c.803,0,1.455-.651,1.455-1.455v-1.455h-1.455v1.091Z"
                />
                <path
                  d="M15.818,2.182h0s-1.455,0-1.455,0c-1.205,0-2.182.977-2.182,2.182v4.364h0c0,1.205.977,2.182,2.182,2.182h1.455c1.205,0,2.182-.977,2.182-2.182h0v-4.364c0-1.205-.977-2.182-2.182-2.182ZM16.545,5.818h-1.455v1.455h1.455v1.455h0c0,.402-.326.727-.727.727h0s-1.455,0-1.455,0c-.402,0-.727-.326-.727-.727v-4.364h0c0-.402.326-.727.727-.727h1.455c.402,0,.727.326.727.727h0v1.455Z"
                />
                <path
                  d="M7.818,8.727h0v-4.364c0-1.205-.977-2.182-2.182-2.182h0s-1.455,0-1.455,0c-1.205,0-2.182.977-2.182,2.182v4.364h0c0,1.205.977,2.182,2.182,2.182h1.455c1.205,0,2.182-.977,2.182-2.182ZM3.455,8.727v-4.364h0c0-.402.326-.727.727-.727h1.455c.402,0,.727.326.727.727h0v1.455h-1.455v1.455h1.455v1.455h0c0,.402-.326.727-.727.727h0s-1.455,0-1.455,0c-.402,0-.727-.326-.727-.727Z"
                />
              </svg>
            </a>
          </li>-->
          <li>
            <a rel="me" target="_blank" href="https://github.com/unicolored" title="GitHub Profile" class="footer-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                <path
                  d="M266.1 392.7C266.1 413.6 255.2 447.8 229.4 447.8C203.6 447.8 192.7 413.6 192.7 392.7C192.7 371.8 203.6 337.6 229.4 337.6C255.2 337.6 266.1 371.8 266.1 392.7zM560 342.2C560 374.1 556.8 407.9 542.5 437.2C504.6 513.8 400.4 512 325.8 512C250 512 139.6 514.7 100.2 437.2C85.6 408.2 80 374.1 80 342.2C80 300.3 93.9 260.7 121.5 228.6C116.3 212.8 113.8 196.2 113.8 179.8C113.8 158.3 118.7 147.5 128.4 128C173.7 128 202.7 137 237.2 164C266.2 157.1 296 154 325.9 154C352.9 154 380.1 156.9 406.3 163.2C440.3 136.5 469.3 128 514.1 128C523.9 147.5 528.7 158.3 528.7 179.8C528.7 196.2 526.1 212.5 521 228C548.5 260.4 560 300.3 560 342.2zM495.7 392.7C495.7 348.8 469 310.1 422.2 310.1C403.3 310.1 385.2 313.5 366.2 316.1C351.3 318.4 336.4 319.3 321.1 319.3C305.9 319.3 291 318.4 276 316.1C257.3 313.5 239 310.1 220 310.1C173.2 310.1 146.5 348.8 146.5 392.7C146.5 480.5 226.9 494 296.9 494L345.1 494C415.4 494 495.7 480.6 495.7 392.7zM413.1 337.6C387.3 337.6 376.4 371.8 376.4 392.7C376.4 413.6 387.3 447.8 413.1 447.8C438.9 447.8 449.8 413.6 449.8 392.7C449.8 371.8 438.9 337.6 413.1 337.6z"
                />
              </svg>
            </a>
          </li>
        </ul>
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
})
export class FooterComponent {
  homepage = environment.endpoints._self;
}
