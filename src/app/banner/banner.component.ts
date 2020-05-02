import { Component, OnInit } from '@angular/core';
import { ThumbnailImage } from './banner';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  watchThumbnailImage: string = 'assets/images/thumbnail-watch.png';

  thumbnailImages: ThumbnailImage[] = [
    { id: 1, img_thumbnail_watch: 'assets/images/table-watch1.png' },
    { id: 2, img_thumbnail_watch: 'assets/images/thumbnail-watch.png' },
    { id: 3, img_thumbnail_watch: 'assets/images/table-watch3.png' }
  ]

  constructor() { }

  showPreviousWatchThumbnailImage() {
    var newImage: any;
    
    for (let i = 0; i < this.thumbnailImages.length; i++) {
      let currentThumbnailImage = this.thumbnailImages[i];
      let prevThumbnailImage = this.thumbnailImages[i-1];
      
      if (currentThumbnailImage.img_thumbnail_watch.indexOf(this.watchThumbnailImage) != -1) {
        newImage = prevThumbnailImage;
      }
    }

    this.watchThumbnailImage = newImage.img_thumbnail_watch;
  }

  hidePreviousWatchThumbnailImage() {
    var newImage: any;
      
      for (let i = 0; i < this.thumbnailImages.length; i++) {
        let currentThumbnailImage = this.thumbnailImages[i];
        let nextThumbnailImage = this.thumbnailImages[i+1];
        
        if (currentThumbnailImage.img_thumbnail_watch.indexOf(this.watchThumbnailImage) != -1) {
          newImage = nextThumbnailImage;
        }
      }

      this.watchThumbnailImage = newImage.img_thumbnail_watch;
  }

  showNextWatchThumbnailImage() {
    this.hidePreviousWatchThumbnailImage();
  }

  hideNextWatchThumbnailImage() {
    this.showPreviousWatchThumbnailImage();
  }

  ngOnInit(): void {
  }

}
