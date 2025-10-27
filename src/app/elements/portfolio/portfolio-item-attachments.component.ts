import { Component, inject, input, ViewEncapsulation } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AppService } from '../../app.service';
import { WordpressService } from 'ngx-services';
import { Attachment } from '../../interfaces/post';

@Component({
  selector: 'gilles-nx-portfolio-item-attachments',
  imports: [CommonModule, NgOptimizedImage],
  providers: [AppService, WordpressService],
  template: `
    @if (attachments(); as attachments) {
      <div class="portfolio-attachments">
        @for (attachment of attachments; track attachment['@id']; let i = $index) {
          <div class="attachment my-1">
            <img
              [ngSrc]="'cloud-coelis/prod/' + attachment.cloudinaryId"
              fill
              [priority]="i < 2"
              placeholder
              class="img-thumbnail"
              sizes="(min-width: 66em) 33vw, (min-width: 44em) 50vw, 100vw"
              [alt]="attachment.name"
              [title]="attachment.name"
            />
          </div>
        }
      </div>
    }
  `,
  encapsulation: ViewEncapsulation.None,
})
export class PortfolioItemAttachmentsComponent {
  attachments = input<Attachment[]>([]);

  private appService = inject(AppService);
}
