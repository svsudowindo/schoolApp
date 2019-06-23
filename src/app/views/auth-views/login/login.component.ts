import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { BaseClass } from './../../../shared/services/common/baseClass';
import { RequestEnums } from '../../../shared/constants/request-enums';
import { GlobalVariables } from '../../../shared/services/common/globalVariables';
import Utils from './../../../shared/services/common/utils';
import { CommonRequestService } from '../../../shared/services/common-request.service';
import { PopupService } from '../../../shared/components/componentsAsService/popup/popup.service';
import { FORM_TYPES, VALIDATION_PATTERNS, VALIDATION_TYPES } from '../../../shared/constants/validation-patterns';
import { GROUPED_INPUT_ENUM } from '../../../shared/constants/app-enums';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseClass implements OnInit {

  public successMessageStatus: string;
  public errorMessageStatus: string;
  loginForm = [
    {
      type: FORM_TYPES.TEXT,
      label: 'Email',
      id: 'email',
      required: true,
      formControlName: 'email',
      validators: [VALIDATION_PATTERNS.REQUIRED],
      validatorsTypes: [VALIDATION_TYPES.REQUIRED],
      validatorMessages: ['Please enter the email','Please enter the valid email'],
      isInputGrouped: false
    },
    {
      type: FORM_TYPES.PASSWORD,
      label: 'Password',
      id: 'password',
      required: true,
      formControlName: 'password',
      validators: [VALIDATION_PATTERNS.REQUIRED],
      validatorsTypes: [VALIDATION_TYPES.REQUIRED],
      validatorMessages: ['Please enter the password'],
      isInputGrouped: true,
      groupedInfo: {
        label: 'Forgot?', // pass material-icon name here if type is icon
        direction: GROUPED_INPUT_ENUM.RIGHT,
        link: '/reset-password',
        type: GROUPED_INPUT_ENUM.LINK
      }
    },
    {
      type: FORM_TYPES.SUBMIT,
      label: 'Sign in',
      id: 'sign_in'
    },
    {
      type: FORM_TYPES.LINK,
      label: 'Register Here',
      id: 'register_login',
      hasDescription: true,
      description: 'Dont have account yet ?',
      navigationPath: '/registration'
    }
  ];
  // once successfull login make can activate service to true
   constructor(public route: Router,
     public injector: Injector,
     private _loginService: LoginService,
  private cookieService: CookieService) {
     super(injector);
   }

  ngOnInit() {
    Utils.log('hello from login component by utils method');
  }

  submit(loginData) {
    this._loginService.login(RequestEnums.LOGIN,loginData).subscribe((loginResponse) =>{
      let userName = loginResponse.firstName + ' ' + loginResponse.lastName;
      localStorage.setItem('username',userName);
      this.cookieService.set('basicAuth', btoa(loginData.email + ':' + loginData.password));
      this.route.navigate(['dashboard']);
    },(error) =>{
      Utils.log('login error Response    ::::::  ' + JSON.stringify(error));
    });

  }


}
