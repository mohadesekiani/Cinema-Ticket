import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



@NgModule({
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [],
  imports: [
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,

  ],

})
export class MaterialModule { }
