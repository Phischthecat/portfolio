import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  standalone: false,
})
export class AboutMeComponent {
  isLoadingVideo = true;
  private rewindInterval: any;

  constructor() {}

  moveTo(section) {
    document.location = '#' + section;
  }

  playVideo(video: HTMLVideoElement) {
    this.stopRewind();
    video.play().catch((err) => console.warn('Playback prevented:', err));
  }

  startRewind(video: HTMLVideoElement) {
    video.pause();
    this.stopRewind();

    this.rewindInterval = setInterval(() => {
      if (video.currentTime > 0) {
        video.currentTime -= 0.1;
      } else {
        video.currentTime = 0;
        this.stopRewind();
      }
    }, 100);
  }

  private stopRewind() {
    if (this.rewindInterval) {
      clearInterval(this.rewindInterval);
      this.rewindInterval = null;
    }
  }
}
