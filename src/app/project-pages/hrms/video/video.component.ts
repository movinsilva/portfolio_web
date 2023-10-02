import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  template: `
    <youtube-player
      [playerVars]="playerConfig"
      [width]="playerWidth"
      [height]="playerHeight"
      [videoId]="videoId"
      (ready)="onReady($event)"
    ></youtube-player>
  `,
  selector: 'app-video',
})
export class VideoComponent implements OnInit {
  playerConfig = {
    controls: 0,
    mute: 0,
    autoplay: 0,
  };
  videoId = 'Rz-uWrkdDT0';

  playerWidth: number = 0;
  playerHeight: number = 0;

  ngOnInit() {
    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    this.playerWidth = this.playerWidthFunc(window.innerWidth, window.innerHeight);
    this.playerHeight = this.playerWidth * 0.5625;
  }

  onReady(e: any): void {
    console.log(e, 'its ready');
  }

  // Update the screen width when the window is resized
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.playerWidth = this.playerWidthFunc(
      event.target.innerWidth,
      event.target.innerHeight
    );
    this.playerHeight = this.playerWidth * 0.6525;
  }

  playerWidthFunc(width: number, height: number): number {
    var percentage = 0.65
    if (width * percentage * 0.5625 > height) {
      return height * percentage * 1.78;
    } else {
      return width * percentage;
    }
  }
}
