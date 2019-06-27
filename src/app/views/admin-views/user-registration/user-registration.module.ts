import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRegistrationRoutingModule } from './user-registration-routing.module';
import { UserRegistrationComponent } from './user-registration.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [UserRegistrationComponent],
  imports: [
    CommonModule,
    UserRegistrationRoutingModule,
    SharedModule
  ]
})
export class UserRegistrationModule { }
