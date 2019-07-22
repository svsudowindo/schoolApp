import { FORM_TYPES, VALIDATION_PATTERNS, VALIDATION_TYPES } from './../../../../shared/constants/validation-patterns';
import { ForgotPasswordService } from './../forgot-password.service';
import { RequestEnums } from './../../../../shared/constants/request-enums';
import { Component, OnInit } from '@angular/core';
import Utils from 'src/app/shared/services/common/utils';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.scss']
})
export class OtpVerificationComponent implements OnInit {

  public emailId:string = "";
  forgetInfo = [
    {
      type: FORM_TYPES.TEXT,
      label: 'OTP',
      id: 'otp',
      required: true,
      formControlName: 'otp',
      validators: [VALIDATION_PATTERNS.REQUIRED],
      validatorsTypes: [VALIDATION_TYPES.REQUIRED],
      validatorMessages: ['Please enter the OTP']
    },
    {
      type: FORM_TYPES.SUBMIT,
      label: 'Validate OTP',
      id: 'otpbutton'
    },
    {
      type: FORM_TYPES.LINK,
      label: 'Go back to login',
      id: 'back',
      hasDescription: true,
      description: '',
      navigationPath: '/login'
    }
  ];

  constructor(private _forgetPasswordService: ForgotPasswordService,
    private activateRoute:ActivatedRoute ,
    private _router:Router
    ) { }

  ngOnInit() {
    Utils.log('Vinnnu -- '+JSON.stringify(this.activateRoute.snapshot.queryParamMap.get('email'))) ;
    this.emailId = this.activateRoute.snapshot.queryParamMap.get('email');
  }

  forgotPassword(formData) {

    Utils.log('forget password form Vinod  :::::: ' + JSON.stringify(formData));
RequestEnums.FORGET_PASSWORD.values.push(formData.email);
    this._forgetPasswordService.forgetPassword(RequestEnums.FORGET_PASSWORD).subscribe((data)=>{
      Utils.log('forget password success   :::: ' + JSON.stringify(data));
      RequestEnums.FORGET_PASSWORD.values =[];
    },(error)=>{
      Utils.log('forget password success   :::: ' + JSON.stringify(error));
    });
  }

  otpVerification(formData){
    Utils.log("vinod -- "+Utils.stringify(formData));
    RequestEnums.OTP_VERIFICATION.values.push(this.emailId);
    RequestEnums.OTP_VERIFICATION.values.push(formData.otp);
    this._forgetPasswordService.otpVerification(RequestEnums.OTP_VERIFICATION).subscribe((data)=>{
      Utils.log('OTP verification success   :::: ' + JSON.stringify(data));
      RequestEnums.OTP_VERIFICATION.values =[];
      this._router.navigate(['reset-password'],{queryParams:{'email':this.emailId}});
    },(error)=>{
      this._router.navigate(['reset-password'],{queryParams:{'email':this.emailId}});
      Utils.log('forget password success   :::: ' + JSON.stringify(error));
    });
  }

}
