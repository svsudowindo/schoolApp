import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password.component';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ForgotPasswordComponent
      },
      {
        path: 'otp-verification',
        component: OtpVerificationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgotPasswordRoutingModule { }
