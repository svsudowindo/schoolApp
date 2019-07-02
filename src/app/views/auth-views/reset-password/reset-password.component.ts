import { Component, OnInit } from '@angular/core';
import { FORM_TYPES, VALIDATION_PATTERNS, VALIDATION_TYPES } from '../../../shared/constants/validation-patterns';
import { Router } from '@angular/router';
import { ResetPasswordService } from './reset-password.service';
import Utils from 'src/app/shared/services/common/utils';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  
  forgetInfo = [
    {
      type: FORM_TYPES.TEXT,
      label: 'Email',
      id: 'email',
      required: true,
      formControlName: 'email',
      validators: [VALIDATION_PATTERNS.REQUIRED,  VALIDATION_PATTERNS.EMAIL],
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

  
  
  resetForm = [
    {
      type: FORM_TYPES.PASSWORD,
      label: 'New Password',
      id: 'new_password',
      required: true,
      formControlName: 'password',
      validators: [VALIDATION_PATTERNS.REQUIRED],
      validatorsTypes: [VALIDATION_TYPES.REQUIRED],
      validatorMessages: ['Password is required']
    },
    {
      type: FORM_TYPES.PASSWORD,
      label: 'Confirm Password',
      id: 'confirm_password',
      required: true,
      formControlName: 'confirm_password',
      validators: [VALIDATION_PATTERNS.REQUIRED],
      validatorsTypes: [VALIDATION_TYPES.REQUIRED],
      validatorMessages: ['Confirm Password is required']
    },
    {
      type: FORM_TYPES.SUBMIT,
      label: 'Done',
      id: 'done'
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
      hasDescription: false,
      description: '',
      navigationPath: '/login'
    }
  ];
  constructor(private _router: Router,
    private _resetService: ResetPasswordService) { }

  ngOnInit() {
  }

  reset(resetData) {
    Utils.log('reset data  :::: ' + JSON.stringify(resetData));
    this._resetService.resetPassword(resetData).subscribe((response) => {
      Utils.log('reset password success response   ::: ' + JSON.stringify(response));
      alert('Reset link will be sent to your registered email');
     // this._router.navigate(['forgot-password']);
    }, (error) => {
      Utils.log('reset password error response   ::: ' + JSON.stringify(error));
    });
  }

}
