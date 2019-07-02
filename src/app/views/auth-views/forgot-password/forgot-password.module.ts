import { ForgotPasswordService } from './forgot-password.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { ForgotPasswordComponent } from './forgot-password.component';
import { SharedModule } from '../../../shared/shared.module';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
// import { OtpVerificationComponent } from './otp-verification/otp-verification.component';

@NgModule({
  declarations: [ForgotPasswordComponent, OtpVerificationComponent],
  imports: [
    CommonModule,
    ForgotPasswordRoutingModule,
    SharedModule
  ],
  providers:[ForgotPasswordService]
})
export class ForgotPasswordModule { }
