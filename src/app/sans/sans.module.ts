import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SansComponent } from './sans.component';
import { DateComponent } from './components/date/date.component';
import { RouterModule } from '@angular/router';
import { SansRoutingModule } from './sans-routing.module';
import { SansTimeComponent } from './components/sans-time/sans-time.component';
import { CinemaSeatsComponent } from './components/cinema-seats/cinema-seats.component';

@NgModule({
  declarations: [SansComponent, DateComponent, SansTimeComponent, CinemaSeatsComponent],
  imports: [CommonModule, RouterModule, SansRoutingModule],
})
export class SansModule {}
