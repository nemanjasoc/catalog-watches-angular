import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  slides: any[] = [];

  constructor() {
    this.slides = [
      {
        id: 1,
        label: 'G-shock',
        title: 'Venice silver automatic',
        button_title: 'View watch',
        title_explore: 'Explore G-SHOCK',
        img_watch: '../../assets/images/slider-watch.png'
      },
      {
        id: 2,
        label: 'G-shock',
        title: 'Venice silver automatic',
        button_title: 'View watch',
        title_explore: 'Explore G-SHOCK',
        img_watch: '../../assets/images/slider-watch.png'
      },
      {
        id: 3,
        label: 'G-shock',
        title: 'Venice silver automatic',
        button_title: 'View watch',
        title_explore: 'Explore G-SHOCK',
        img_watch: '../../assets/images/slider-watch.png'
      },
      {
        id: 4,
        label: 'G-shock',
        title: 'Venice silver automatic',
        button_title: 'View watch',
        title_explore: 'Explore G-SHOCK',
        img_watch: '../../assets/images/slider-watch.png'
      }
    ]
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

  ngOnInit(): void {
  }

}
