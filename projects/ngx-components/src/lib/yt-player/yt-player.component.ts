import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'gilles-nx-yt-player',
  standalone: true,
  imports: [CommonModule, YouTubePlayer],
  template: `
    <div #youTubePlayer class="block" [ngStyle]="{ 'min-height': (videoHeight ?? 0) + 20 + 'px' }">
      <!--      <span class="text-white">{{ videoHeight }}</span>-->
      <youtube-player
        class="w-auto inline absolute"
        [width]="videoWidth"
        [height]="videoHeight"
        [videoId]="videoId"
      ></youtube-player>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
})
export class YtPlayerComponent implements AfterViewInit {
  @ViewChild('youTubePlayer') youTubePlayer!: ElementRef<HTMLDivElement>;

  videoHeight: number | undefined;
  videoWidth: number | undefined;

  @Input() videoId!: string;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.onResize();
    window.addEventListener('resize', this.onResize.bind(this));
  }

  onResize(): void {
    // you can remove this line if you want to have wider video player than 960px
    console.log(this.youTubePlayer.nativeElement.clientWidth);
    // this.videoWidth = Math.min(this.youTubePlayer.nativeElement.clientWidth, 960);
    this.videoWidth = this.youTubePlayer.nativeElement.clientWidth;
    // so you keep the ratio
    this.videoHeight = this.videoWidth * 0.6;
    this.changeDetectorRef.detectChanges();
  }
}
