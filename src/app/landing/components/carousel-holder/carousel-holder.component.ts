import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-carousel-holder',
  templateUrl: './carousel-holder.component.html',
  styleUrls: ['./carousel-holder.component.scss'],
})
export class CarouselHolderComponent {
  slidesStore: any[] = [
    {
      id: 1,
      src: 'https://static.irantic.com/storage/dynamic/slider/y6D28q3SuzQLKw8AJJLUexatjAqDYBckwIOuCZ9n.jpg',
      alt: 'Slide 1',
      title: 'Slide 1'
    },
    {
      id: 2,
      src: 'https://static.irantic.com/storage/dynamic/slider/hciEFMfZgh2S2WOe6E9xy0pObe4FXAJWGBe73uQx.jpg',
      alt: 'Slide 2',
      title: 'Slide 2'
    },
    {
      id: 3,
      src: 'https://static.irantic.com/storage/dynamic/slider/iWxfNaQGRLlh85uCkLYXweGvtviEcfdFS4MgPrrP.jpg',
      alt: 'Slide 3',
      title: 'Slide 3'
    }, {
      id: 4,
      src: 'https://static.irantic.com/storage/dynamic/slider/iWxfNaQGRLlh85uCkLYXweGvtviEcfdFS4MgPrrP.jpg',
      alt: 'Slide 3',
      title: 'Slide 3'
    }, {
      id: 5,
      src: 'https://static.irantic.com/storage/dynamic/slider/iWxfNaQGRLlh85uCkLYXweGvtviEcfdFS4MgPrrP.jpg',
      alt: 'Slide 3',
      title: 'Slide 3'
    }

    // مشخصات سایر اسلایدها
  ];
  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      
    },
    nav: true,
  };
}

