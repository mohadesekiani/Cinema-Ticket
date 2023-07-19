import { NgModule } from '@angular/core';

import { LandingComponent } from './landing.component';
import { HeaderComponent } from './components/header/header.component';
import { SlideShowComponent } from './components/slide-show/slide-show.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LandingRoutingModule } from './landing-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselHolderComponent } from './components/carousel-holder/carousel-holder.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
@NgModule({
  declarations: [
    LandingComponent,
    HeaderComponent,
    SlideShowComponent,
    CarouselHolderComponent,
    IntroductionComponent,
  ],
  imports: [
    CarouselModule,
    CommonModule,
    RouterModule,
    SharedModule,
    LandingRoutingModule,
  ],
})
export class LandingModule {}
