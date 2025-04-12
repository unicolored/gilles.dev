import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { HttpService, JekyllPost, UnicoloredService } from 'ngx-services';
import { Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-projects-page',
  imports: [],
  template: `
    @for (post of posts; track post.id) {
      <p>
        {{ post.title }}
      </p>
    }
  `,
  styles: ``,
  providers: [HttpService, UnicoloredService],
})
export class ProjectsComponent implements OnInit {
  unicoloredService = inject(UnicoloredService);

  posts: JekyllPost[] = [];

  ngOnInit() {
    this.unicoloredService
      .getAll('projects-gilles.json')
      .pipe(tap((data) => (this.posts = data)))
      .subscribe((data: JekyllPost[]) => {
        this.posts = data;
        console.log('Posts:', this.posts);
      });
  }
}
