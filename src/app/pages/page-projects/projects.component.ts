import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { HttpService, JekyllPost, UnicoloredService } from 'ngx-services';
import { tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-projects-page',
  template: `
    @for (post of postsComputed(); track post.id) {
      <div class="m-8">
        <h2>{{ post.title }}</h2>
        @if (post.thumbnail) {
          <img
            priority
            class="img-thumbnail"
            [width]="400"
            [height]="300"
            [ngSrc]="post.thumbnail.replace('/assets', 'Unicolo.red')"
            [alt]="post.title"
          />
        }
        <!--        <div [innerHTML]="post.excerpt">-->
        <!--        </div>-->
      </div>
      <hr />
    } @empty {
      <p>There are no items.</p>
    }
  `,
  styles: ``,
  providers: [HttpService, UnicoloredService],
  imports: [NgOptimizedImage],
})
export class ProjectsComponent implements OnInit {
  unicoloredService = inject(UnicoloredService);

  posts = signal<JekyllPost[]>([]);
  postsComputed = computed(() => {
    return this.posts();
  });

  ngOnInit() {
    this.unicoloredService
      .getAll('projects-gilles.json')
      .pipe(tap((data) => this.posts.set(data as JekyllPost[])))
      .subscribe();
  }

  protected readonly environment = environment;
}
