import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SansComponent } from './sans.component';
import { DateComponent } from './components/date/date.component';
import { RouterModule } from '@angular/router';
import { SansRoutingModule } from './sans-routing.module';
import { SansTimeComponent } from './components/sans-time/sans-time.component';
import { CinemaSeatsComponent } from './components/cinema-seats/cinema-seats.component';
import { FormSansComponent } from './components/form-sans/form-sans.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    SansComponent,
    DateComponent,
    SansTimeComponent,
    CinemaSeatsComponent,
    FormSansComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SansRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
})
export class SansModule {}
