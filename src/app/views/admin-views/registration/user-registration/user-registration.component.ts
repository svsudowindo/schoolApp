import Utils from 'src/app/shared/services/common/utils';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Injector, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestEnums } from 'src/app/shared/constants/request-enums';
import { BaseClass } from '../../../../shared/services/common/baseClass';
import { VALIDATION_PATTERNS } from '../../../../shared/constants/validation-patterns';
import { RegistrationService } from '../registration.service';

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
  isEditMode = false;
  courseId: any;
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
    public _registrationService: RegistrationService,
    private _activatedRoute: ActivatedRoute,
    private _changeDetector: ChangeDetectorRef) {
    super(_injector);
    this._activatedRoute.params.subscribe(res => {
      if (res.id) {
        this.isEditMode = true;
        this.courseId = res.id;
      }
    });
  }

  ngOnInit() {
    
    if (this.isEditMode) {
      this.initializeEditForm();
    } else {
      this.initializeForm();
    }
  }

  getCourseDetails() {
    this.showLoading();
    RequestEnums.GET_USER_BY_ID.values = [this.courseId];
    this._registrationService.getUserById(RequestEnums.GET_USER_BY_ID).subscribe(res => {
      console.log(res);
      this.registerationForm.patchValue(res);
      this.hideLoading();
    });
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
      createdBy: [localStorage.getItem('username')]
    });
    if (this.isEditMode) {
      this.getCourseDetails();
    }
  }

  initializeEditForm() {
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
      username: ['', Validators.compose([
        Validators.required,
        Validators.pattern(VALIDATION_PATTERNS.EMAIL)
      ])],
      role: ['', Validators.compose([
        Validators.required
      ])],
      updatedBy: [localStorage.getItem('username')]
    });
    if (this.isEditMode) {
      this.getCourseDetails();
    }
  }

  navigateToDashboard() {
    this._router.navigate(['registration']);
  }

  onSubmit() {
    if (this.registerationForm.valid) {
      this.showLoading();
      let requestObject; 
      if(this.isEditMode){
        RequestEnums.UPDATE_USER.values.push(this.registerationForm.value.username);
        requestObject  = RequestEnums.UPDATE_USER;
      } else {
        requestObject  = RequestEnums.REGISTER_USER;
      }
      this._registrationService.registerUser(requestObject, this.registerationForm.value).subscribe((data) => {
        Utils.log('registration success   ::::: ' + JSON.stringify(data));
        this.hideLoading();
      }, (error) => {
        this.hideLoading();
        Utils.log('registration error   ::::: ' + JSON.stringify(error));
      });
    }
  }
}
