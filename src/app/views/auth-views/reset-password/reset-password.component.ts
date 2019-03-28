import { Component, OnInit } from '@angular/core';
import { FORM_TYPES, VALIDATION_PATTERNS, VALIDATION_TYPES } from '../../../shared/constants/validation-patterns';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm = [
    {
      type: FORM_TYPES.NUMBER,
      label: 'Username or Email',
      id: 'username_email',
      required: true,
      formControlName: 'username',
      validators: [VALIDATION_PATTERNS.REQUIRED, 4],
      validatorsTypes: [VALIDATION_TYPES.REQUIRED, VALIDATION_TYPES.MIN_LENGTH],
      validatorMessages: ['Email is required', 'Enter valid MIN LENGTH']
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
      navigationPath: '/login'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  reset(data) {
  }

}
