import { RequestEnums } from './../../../shared/constants/request-enums';
import { ForgotPasswordService } from './forgot-password.service';
import { Component, OnInit } from '@angular/core';
import { FORM_TYPES, VALIDATION_PATTERNS, VALIDATION_TYPES } from '../../../shared/constants/validation-patterns';
import Utils from 'src/app/shared/services/common/utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {


  forgetInfo = [
    {
      type: FORM_TYPES.TEXT,
      label: 'Email',
      id: 'email',
      required: true,
      formControlName: 'email',
      validators: [VALIDATION_PATTERNS.REQUIRED, VALIDATION_PATTERNS.EMAIL],
      validatorsTypes: [VALIDATION_TYPES.REQUIRED, VALIDATION_TYPES.PATTERN],
      validatorMessages: ['Please enter the email', 'Please enter the valid email']
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

  constructor(private _forgetPasswordService: ForgotPasswordService,
    private _router: Router) { }

  ngOnInit() {
  }

  forgotPassword(formData) {

    Utils.log('forget password form  :::::: ' + JSON.stringify(formData));
    RequestEnums.FORGET_PASSWORD.values.push(formData.email);
    this._forgetPasswordService.forgetPassword(RequestEnums.FORGET_PASSWORD).subscribe((data) => {
      Utils.log('forget password success   :::: ' + JSON.stringify(data));
      RequestEnums.FORGET_PASSWORD.values = [];
      this._router.navigate(['forgot-password', 'otp-verification'],{queryParams:{'email':data.email}});
    }, (error) => {
      Utils.log('forget password error   :::: ' + JSON.stringify(error));
      this._router.navigate(['forgot-password', 'otp-verification'],{queryParams:{email:formData.email}});
    });
  }

}
