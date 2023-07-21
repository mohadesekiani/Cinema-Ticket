import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from './core/services/data/data.service';
import { FakeDataService } from "./core/services/data/fake-data.service";
import { ABDataService } from './core/services/data/abstract-data.service';
let production = false;
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
   
    {
      provide: ABDataService,
      useClass: production ? DataService : FakeDataService,
    },


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
