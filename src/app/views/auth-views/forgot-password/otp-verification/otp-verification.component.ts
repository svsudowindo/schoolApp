import { FORM_TYPES, VALIDATION_PATTERNS, VALIDATION_TYPES } from './../../../../shared/constants/validation-patterns';
import { ForgotPasswordService } from './../forgot-password.service';
import { RequestEnums } from './../../../../shared/constants/request-enums';
import { Component, OnInit } from '@angular/core';
import Utils from 'src/app/shared/services/common/utils';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.scss']
})
export class OtpVerificationComponent implements OnInit {

  forgetInfo = [
    {
      type: FORM_TYPES.TEXT,
      label: 'Email',
      id: 'email',
      required: true,
      formControlName: 'otp',
      validators: [VALIDATION_PATTERNS.REQUIRED],
      validatorsTypes: [VALIDATION_TYPES.REQUIRED],
      validatorMessages: ['Please enter the OTP']
    },
    {
      type: FORM_TYPES.SUBMIT,
      label: 'Send',
      id: 'send'
    },
    {
      type: FORM_TYPES.LINK,
      label: 'Register Here',
      id: 'register',
      hasDescription: true,
      description: 'Dont have account yet ?',
      navigationPath: '/registration'
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

  constructor(private _forgetPasswordService: ForgotPasswordService) { }

  ngOnInit() {
  }

  forgotPassword(formData) {

    Utils.log('forget password form  :::::: ' + JSON.stringify(formData));
RequestEnums.FORGET_PASSWORD.values.push(formData.email);
    this._forgetPasswordService.forgetPassword(RequestEnums.FORGET_PASSWORD).subscribe((data)=>{
      Utils.log('forget password success   :::: ' + JSON.stringify(data));
      RequestEnums.FORGET_PASSWORD.values =[];
    },(error)=>{
      Utils.log('forget password success   :::: ' + JSON.stringify(error));
    });
  }

}
