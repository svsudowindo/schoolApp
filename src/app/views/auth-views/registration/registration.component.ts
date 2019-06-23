import  Utils  from 'src/app/shared/services/common/utils';
import { GROUPED_INPUT_ENUM } from './../../../shared/constants/app-enums';
import { FORM_TYPES, VALIDATION_TYPES } from './../../../shared/constants/validation-patterns';
import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormGroupDirective, FormBuilder } from '@angular/forms';
import { BaseClass } from '../../../shared/services/common/baseClass';
import { Registration } from './registration.model';
import { VALIDATION_PATTERNS } from '../../../shared/constants/validation-patterns';
import { CustomValidators } from '../../../shared/services/common/validators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent extends BaseClass implements OnInit {

  @ViewChild('registerationNgForm') registerationNgForm: FormGroupDirective; // used only for angular material
  public registerationForm: FormGroup;
  public registrationObject = new Registration();
  public successMessageStatus: string;
  public errorMessageStatus: string;
  public genderData = ['Male', 'Female'];

  registrationForm = [
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
      type: FORM_TYPES.TEXT,
      label: 'FirstName',
      id: 'firstname',
      required: true,
      formControlName: 'firstName',
      validators: [VALIDATION_PATTERNS.REQUIRED],
      validatorsTypes: [VALIDATION_TYPES.REQUIRED],
      validatorMessages: ['Please enter the firstname'],
      isInputGrouped: false
    },
    {
      type: FORM_TYPES.TEXT,
      label: 'LastName',
      id: 'lastname',
      required: true,
      formControlName: 'lastName',
      validators: [VALIDATION_PATTERNS.REQUIRED],
      validatorsTypes: [VALIDATION_TYPES.REQUIRED],
      validatorMessages: ['Please enter the lastname'],
      isInputGrouped: false
    },
    {
      type: FORM_TYPES.TEXT,
      label: 'Mobile Number',
      id: 'mobilenumber',
      required: true,
      formControlName: 'mobileNumber',
      validators: [VALIDATION_PATTERNS.REQUIRED],
      validatorsTypes: [VALIDATION_TYPES.REQUIRED],
      validatorMessages: ['Please enter the mobile number'],
      isInputGrouped: false
    },
    {
      type: FORM_TYPES.TEXT,
      label: 'Role',
      id: 'role',
      required: true,
      formControlName: 'role',
      validators: [VALIDATION_PATTERNS.REQUIRED],
      validatorsTypes: [VALIDATION_TYPES.REQUIRED],
      validatorMessages: ['Please enter the role'],
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
      isInputGrouped: true
    },
    {
      type: FORM_TYPES.SUBMIT,
      label: 'REGISTER',
      id: 'register'
    },
    {
      type: FORM_TYPES.LINK,
      label: 'Dashboard',
      id: 'dashboard',
      hasDescription: true,
      description: 'Go to Dashboard ?',
      navigationPath: '/dashboard'
    }
  ];
  


  constructor(public injector: Injector,
    private _formBuilder: FormBuilder) {
    super(injector);
  }

  ngOnInit() {
    // this.registerationForm = this._formBuilder.
    setTimeout(() => {
      // this.postShow();
    }, 5000);

  }


  submit(event) {
    Utils.log('registration data :::/ ' + JSON.stringify(event));
    
  }
}
