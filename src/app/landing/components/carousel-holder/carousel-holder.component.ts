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
      src: 'https://static.irantic.com/storage/dynamic/slider/VTerxDuWUFKNvPCz2JxwtDjmWIlaPj7T1lCFfzdZ.jpg',
      alt: 'Slide 1',
      title: 'Slide 1',
    },
    {
      id: 2,
      src: 'https://static.irantic.com/storage/dynamic/slider/tW2Hb6Y6ek9ha3FvqjxK5HfgcM8g4llQU3ujJ829.jpg',
      alt: 'Slide 2',
      title: 'Slide 2',
    },
    {
      id: 3,
      src: '',
      alt: 'Slide 3',
      title: 'Slide 3',
    },
    // مشخصات سایر اسلایدها
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
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
