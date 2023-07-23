import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from "./components/login/login.component";
import { SighnupComponent } from './components/sighnup/sighnup.component';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    LoginComponent,
    SighnupComponent,
    AuthComponent,
  ],
  imports: [
    AuthRoutingModule,
    RouterModule,
    CommonModule
  ]
})
export class AuthModule { }
