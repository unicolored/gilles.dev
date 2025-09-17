import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gilles-nx-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css',
})
export class ImageComponent implements AfterViewInit {
  @Input() src!: string;
  @Input() alt: string = this.src;

  @ViewChild('imgElement', { static: true }) imgElement!: ElementRef;

  responseOk = false;
  isIntersected = false;
  observer: IntersectionObserver | undefined;

  ngAfterViewInit(): void {
    // this.fetchImage();

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.fetchImage();
          this.isIntersected = true;
        }
      });
    });

    this.observer.observe(this.imgElement.nativeElement);
  }

  fetchImage(): void {
    fetch(this.src)
      .then((response) => {
        this.responseOk = response.ok;
      })
      .catch((error) => {
        console.error('Error validating image URL:', error);
      });
  }
}
