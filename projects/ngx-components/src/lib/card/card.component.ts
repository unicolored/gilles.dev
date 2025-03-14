import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gilles-nx-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styles: `
    :host {
      display: block;
    }

    strong {
      @apply inline;
    }
  `,
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent /*implements AfterViewInit*/ {
  @Input() showTitle = true;
  @Input() showFigure = false;
  @Input() showActions = false;

  // @ContentChildren('title') title!: TemplateRef<unknown>;
  // @ContentChildren('actions') actions!: TemplateRef<unknown>;
}
