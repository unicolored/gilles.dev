import { Component, effect, inject, input, OnInit, signal, viewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalConfig, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselItem } from '../../services/carousel.interface';
import { AppService } from '../../app.service';
import { WordpressSelfSinglePostMedia, WordpressService } from 'ngx-services';
import { lastValueFrom } from 'rxjs';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { CarouselLightboxComponent } from '../carousel/carousel-lightbox.component';

@Component({
  selector: 'gilles-nx-modal',
  standalone: true,
  imports: [CommonModule, NgbModalModule, FaIconComponent, CarouselLightboxComponent],
  providers: [NgbModal, NgbModalConfig, AppService, WordpressService],
  template: `
    <ng-template #content let-modal>
      <div class="modal-header">
        <div>
          <h3 class="modal-title" [innerHTML]="title() ?? 'Portfolio'"></h3>
        </div>
        <fa-icon
          (click)="modal.dismiss('Cross click')"
          class="icon-close"
          [icon]="['fasds', 'xmark-large']"
          [fixedWidth]="true"
          size="2x"
        ></fa-icon>
      </div>
      <div class="modal-body">
        <div class="itemControl ">
          <div (click)="carousel.previous()" class="itemControlPrevious">
            <fa-icon [icon]="['fasds', 'chevrons-left']" [fixedWidth]="true" size="2x"></fa-icon>
          </div>
        </div>
        <div class="itemContent">
          <div class="modal-body-carousel">
            <!--<ng-container *ngComponentOutlet="getComp(); inputs: getInputs()" />-->
            <gilles-nx-carousel-lightbox
              #carousel
              [items]="items()"
              [slide]="slide()"
              (slideChange)="onSlideChange($event)"
            ></gilles-nx-carousel-lightbox>
          </div>

          @defer (on timer(200ms); prefetch on idle) {
            @if (attachments().length > 1) {
              <div class="modal-body-sidebar">
                <!--<h1>Info about slide: {{ itemPostID() }}</h1>-->
                @for (media of attachments(); track media.id) {
                  <div class="attachment">
                    <!--              <img [ngSrc]="media.media_details.sizes.thumbnail.source_url" fill [alt]="media.alt_text">-->
                    <!--              <img [ngSrc]="media.media_details.sizes.thumbnail.source_url" width="260" height="260" [alt]="media.alt_text">-->
                    <img [src]="media.media_details.sizes.medium.source_url" fill [alt]="media.alt_text" />
                  </div>
                }
              </div>
            }
          }
        </div>
        <div class="itemControl ">
          <div (click)="carousel.next()" class="itemControlNext">
            <fa-icon [icon]="['fasds', 'chevrons-right']" [fixedWidth]="true" size="2x"></fa-icon>
          </div>
        </div>
      </div>
    </ng-template>
  `,
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent implements OnInit {
  opened = input<boolean>(false);
  title = input<string | null>();
  name = input.required<string>();
  items = input<CarouselItem[]>([]);
  private modalService = inject(NgbModal);
  private appService = inject(AppService);
  content = viewChild('content');
  slide = signal<number>(0);

  attachments = signal<WordpressSelfSinglePostMedia[]>([]);
  postId = signal<number>(0);

  constructor(config: NgbModalConfig) {
    // customize default values of modals used by this component tree
    config.centered = true;
    config.fullscreen = false;
    config.backdrop = true;
    config.keyboard = true;
    config.modalDialogClass = 'mymodal';
    config.backdropClass = 'mybackdrop';
    config.windowClass = 'mywindow';
    config.scrollable = false;

    effect(async () => {
      const postId = this.postId();
      if (postId) {
        const medias = await lastValueFrom(this.appService.getPortfolioPostMedias(postId));
        this.attachments.set(medias);
      }
    });
  }

  ngOnInit() {
    if (this.opened()) {
      this.open();
    }
  }

  open() {
    this.modalService.open(this.content());
  }

  showItem(itemId: number) {
    console.log('show item', itemId);
    this.slide.set(itemId);
    const items = this.items();
    const post = items[itemId];
    this.postId.set(post.id);
    this.open();
  }

  onSlideChange($event: number) {
    this.postId.set($event);
  }
}
