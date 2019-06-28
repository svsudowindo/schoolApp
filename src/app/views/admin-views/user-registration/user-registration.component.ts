import { UserRegistrationService } from './user-registration.service';
import Utils from 'src/app/shared/services/common/utils';
import { BaseClass } from './../../../shared/services/common/baseClass';
import { VALIDATION_PATTERNS } from './../../../shared/constants/validation-patterns';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { RequestEnums } from 'src/app/shared/constants/request-enums';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent extends BaseClass implements OnInit {

  public registerationForm: FormGroup;
  public roles = [
    {
      name: 'Admin',
      value: 'ROLE_ADMIN'
    },
    {
      name: 'User',
      value: 'ROLE_USER'
    }
  ];
  public validation_messages = {
    'firstName': [
      { type: 'required', message: 'Please enter firstname' }
    ],
    'emailAddress': [
      { type: 'required', message: 'Please enter email' },
      { type: 'pattern', message: 'Please enter valid email' }
    ],
    'lastName': [
      { type: 'required', message: 'Please enter LastName' }
    ],
    'mobileNumber': [
      { type: 'required', message: 'Please enter mobile number' }
    ],
    'Password': [
      { type: 'required', message: 'Please enter password' }
    ],
    'username': [
      { type: 'required', message: 'Please enter username' },
      { type: 'pattern', message: 'Please enter valid email' }
    ],
    'role': [
      { type: 'required', message: 'Please select the role' }
    ]

  };

  constructor(private _router: Router,
    public _injector: Injector,
    private _formBuilder: FormBuilder,
    public _registrationService: UserRegistrationService) {
    super(_injector);
  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.registerationForm = this._formBuilder.group({
      firstName: ['', Validators.compose([
        Validators.required
      ])],
      emailAddress: ['', Validators.compose([
        Validators.required,
        Validators.pattern(VALIDATION_PATTERNS.EMAIL)
      ])],
      lastName: ['', Validators.compose([
        Validators.required
      ])],
      mobileNumber: ['', Validators.compose([
        Validators.required
      ])],
      Password: ['', Validators.compose([
        Validators.required
      ])],
      username: ['', Validators.compose([
        Validators.required,
        Validators.pattern(VALIDATION_PATTERNS.EMAIL)
      ])],
      role: ['', Validators.compose([
        Validators.required
      ])],
      createdBy:[localStorage.getItem('username')]
    });
  }

  navigateToDashboard() {
    this._router.navigate(['dashboard']);
  }

  onSubmit() {
    if (this.registerationForm.valid) {
      this.showLoading();
      Utils.log('regidtrstion form  ::::: ' + JSON.stringify(this.registerationForm.value));
console.log('aaaaaaaaaaa  :::::  ' + JSON.stringify(RequestEnums.REGISTER_USER));
      this._registrationService.registerUser(RequestEnums.REGISTER_USER,this.registerationForm.value).subscribe((data) => {
        Utils.log('registration success   ::::: ' + JSON.stringify(data));
        this.hideLoading();
      }, (error) => {
        this.hideLoading();
        Utils.log('registration error   ::::: ' + JSON.stringify(error));
      });
    }
  }
}
