import { NgModule } from '@angular/core';

import { LandingComponent } from './landing.component';
import { HeaderComponent } from './components/header/header.component';
import { SlideShowComponent } from './components/slide-show/slide-show.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LandingRoutingModule } from './landing-routing.module';


@NgModule({
  declarations: [
    LandingComponent,
    HeaderComponent,
    SlideShowComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    LandingRoutingModule
  ],
    
})
export class LandingModule {}
