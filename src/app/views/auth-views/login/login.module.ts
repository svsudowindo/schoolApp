import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../../shared/shared.module';

import { LoginService } from './login.service';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    LoginRoutingModule,
    CommonModule,
    SharedModule
  ],
  providers:[LoginService]
})
export class LoginModule { }
