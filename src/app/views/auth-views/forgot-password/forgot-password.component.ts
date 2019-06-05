import { Component, OnInit } from '@angular/core';
import { FORM_TYPES, VALIDATION_PATTERNS, VALIDATION_TYPES } from '../../../shared/constants/validation-patterns';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgetInfo = [
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
  constructor() { }

  ngOnInit() {
  }

  forgotPassword(formData) {
  }

}
