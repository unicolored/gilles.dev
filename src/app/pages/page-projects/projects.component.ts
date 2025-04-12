import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { HttpService, JekyllPost, UnicoloredService } from 'ngx-services';
import { tap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-projects-page',
  template: `
    @for (post of postsComputed(); track post.id) {
      <div>
        <h2>{{ post.title }}</h2>
        <p>⭐️ {{ post.id }} // {{post.thumbnail}}</p>
        @if (post.thumbnail) {
<!--          <img width="100" height="100" [ngSrc]="post.thumbnail" [alt]="'IMAGE'"/>-->
          <img width="100" height="100" [src]="environment.unicoloredBaseUrl+post.thumbnail" [alt]="'IMAGE'"/>
        }
<!--        <div [innerHTML]="post.excerpt">-->
<!--        </div>-->
      </div>
      <hr>
    } @empty {
      <p>There are no items.</p>
    }
  `,
  styles: ``,
  providers: [HttpService, UnicoloredService],
  imports: [
    // NgOptimizedImage
  ]
})
export class ProjectsComponent implements OnInit {
  unicoloredService = inject(UnicoloredService);

  posts = signal<JekyllPost[]>([]);
  postsComputed = computed(() => {
    return this.posts();
  })

  ngOnInit() {
    this.unicoloredService
      .getAll('projects-gilles.json')
      .pipe(tap((data) => this.posts.set( data as JekyllPost[])))
      .subscribe();

  }

  protected readonly environment = environment;
}
