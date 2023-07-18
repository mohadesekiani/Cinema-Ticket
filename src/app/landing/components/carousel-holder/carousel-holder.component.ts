import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-carousel-holder',
  templateUrl: './carousel-holder.component.html',
  styleUrls: ['./carousel-holder.component.scss'],
})
export class CarouselHolderComponent {
  //windows + v plz
  slidesStore: any[] = [
    {
      id: 1,
      src: 'path/to/image1.jpg',
      alt: 'Slide 1',
      title: 'Slide 1'
    },
    {
      id: 2,
      src: 'path/to/image2.jpg',
      alt: 'Slide 2',
      title: 'Slide 2'
    },
    {
      id: 3,
      src: 'path/to/image3.jpg',
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

