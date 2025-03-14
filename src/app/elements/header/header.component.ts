import {
  Component,
  ElementRef,
  HostListener,
  inject,
  Input,
  OnInit,
  Signal,
  viewChild,
  WritableSignal,
} from '@angular/core';
import '@angular/localize/init';
import { ModeEnum } from '../../app.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { InstantSearchService } from '../../services/instantsearch.service';
import { SearchQuery } from '../../services/search.interface';
import { CommonModule } from '@angular/common';
import { $localize } from '@angular/localize/init';

export enum KEY_CODE {
  K = 'KeyK',
  F = 'KeyF',
}

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
            (click)="navigate()"
            [routerLink]="item.route"
            [routerLinkActive]="'active'"
            [routerLinkActiveOptions]="{ exact: true }"
            [title]="item.name"
          >
            {{ item.name }}
          </a>
        </ng-container>
      </div>

      <div class="actions">
        <div class="search hidden">
          <form [formGroup]="searchForm" (submit)="onSubmit()">
            <label class="input input-bordered flex items-center gap-2">
              <input #searchBox formControlName="query" type="text" class="grow" placeholder="Search" required />
              @if (isMac()) {
                <kbd class="kbd kbd-sm">⌘</kbd>
                <kbd class="kbd kbd-sm">K</kbd>
              } @else if (isWindows() || isLinux()) {
                <kbd class="kbd kbd-sm">Ctrl</kbd>
                <kbd class="kbd kbd-sm">F</kbd>
              }
            </label>

            <button class="hidden" type="submit" [disabled]="!searchForm.valid">Submit</button>
          </form>
        </div>
      </div>
    </nav>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() mode!: WritableSignal<ModeEnum>;
  private router = inject(Router);
  private searchService = inject(InstantSearchService);
  searchBox: Signal<ElementRef<HTMLInputElement> | undefined> = viewChild<ElementRef>('searchBox');

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (this.isMac()) {
      if (event.metaKey && event.code === KEY_CODE.K) {
        // Your row selection code
        event.preventDefault();
        this.searchBox()?.nativeElement.focus();
      }
    } else if (this.isWindows() || this.isLinux()) {
      if (event.ctrlKey && event.code === KEY_CODE.F) {
        // Your row selection code
        event.preventDefault();
        this.searchBox()?.nativeElement.focus();
      }
    }
  }

  searchForm = new FormGroup({
    query: new FormControl(''),
  });

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

  ngOnInit() {
    console.log('userAgent', window.navigator.userAgent);
  }

  onSubmit() {
    if (!this.searchForm.value.query) {
      return;
    }

    const queryParams: SearchQuery = {
      query: this.searchForm.value.query,
    };

    this.router.navigate(['/search'], { queryParams }).then(() => {
      if (this.searchForm.value.query) {
        this.searchService.query.set(this.searchForm.value.query);
      }
    });
  }

  setMode(value: ModeEnum) {
    this.mode.set(value);
    // window.localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  }

  // clearMode() {
  //   this.darkMode.set(window.matchMedia('(prefers-color-scheme:dark)').matches);
  //   window.localStorage.removeItem('darkMode');
  // }
  navigate() {
    this.searchService.query.set('');
    this.searchForm.reset();
  }

  isMac() {
    return window.navigator.userAgent.includes('Macintosh');
  }

  isWindows() {
    return window.navigator.userAgent.includes('Windows');
  }

  isLinux() {
    return window.navigator.userAgent.includes('Linux');
  }
}
