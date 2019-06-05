import { Component, OnInit, Injector } from '@angular/core';
import { FROM_LOCATIONS, POPUP, DIALOG_TYPE, CLICK_STATUS } from '../../../shared/constants/popup-enum';
import { FormArray, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PopupService } from '../../../shared/components/componentsAsService/popup/popup.service';
import { Router } from '@angular/router';
import { BaseClass } from '../../../shared/services/common/baseClass';

@Component({
  selector: 'app-subjects-config',
  templateUrl: './subjects-config.component.html',
  styleUrls: ['./subjects-config.component.scss']
})
export class SubjectsConfigComponent extends BaseClass implements OnInit {
  subjectsForm: FormGroup;
  yearsArr = [
    {
      yearId: 1,
      displayYear: 1
    },
    {
      yearId: 2,
      displayYear: 2
    },
    {
      yearId: 3,
      displayYear: 3
    },
    {
      yearId: 4,
      displayYear: 4
    }
  ];
  public validation_messages = {
    'subjectName': [
      { type: 'required', message: 'Please Enter subject Name' }
    ],
    'subjectCode': [
      { type: 'required', message: 'Please Enter subject Code' }
    ],
    'subjectDescription': [
      { type: 'required', message: 'Please Enter subject Description' }
    ]
  };
  constructor(private _popupService: PopupService,
    private _router: Router,
    private _formBuilder: FormBuilder,
    public _injector: Injector) {
    super(_injector);
  }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.subjectsForm = this._formBuilder.group({
      subjects: this._formBuilder.array([this.createCourseFormGroup()])
    });
  }

  // adding course form group
  createCourseFormGroup(): FormGroup {
    return this._formBuilder.group({
      subjectName: ['', Validators.compose([Validators.required])],
      subjectCode: ['', Validators.compose([Validators.required])],
      subjectDescription: ['', Validators.compose([Validators.required])]
    });
  }

  // remove course from formgroup
  removeFormGroupFromArray(index: number) {
    (<FormArray>this.subjectsForm.get('subjects')).removeAt(index);
  }
  // adding new form group into an array
  addFormGroupToArray() {
    console.log(this.subjectsForm);
    (<FormArray>this.subjectsForm.get('subjects')).push(this.createCourseFormGroup());
  }
  // on clicking add Course button
  addAnotherCourse() {
    this.addFormGroupToArray();
  }

  // remove course
  removeCourse(index) {
    this._popupService.openModal({
      dialog_type: DIALOG_TYPE.CONFIMATION_DIALOG,
      type: POPUP.SUCCESS,
      title: 'Status',
      message: 'Course Removed Successfully',
      okButtonLabel: 'YES',
      cancelButtonLabel: 'NO'
    }).then(res => {
      if (res === CLICK_STATUS.SUBMIT_BUTTON) {
        this.removeFormGroupFromArray(index);
      } else {
      }
    });
  }

  // saving course
  saveAllSubjects() {
    console.log(this.subjectsForm.get('subjects').value);
  }
  // saving individual course
  saveIndividualSubject(index) {
    console.log(index);
    console.log(this.subjectsForm.get('subjects').value[index]);
    // after successfull service call
    this._popupService.openModal({
      dialog_type: DIALOG_TYPE.ALERT_DIALOG,
      title: 'Success',
      type: POPUP.SUCCESS,
      message: 'Course saved successfully',
      okButtonLabel: 'OK',
      fromLocation: {
        locationName: FROM_LOCATIONS.SAVE_COURSE,
        label: 'Add Subjects',
        navigation: ['add-subjects', 1]
      }
    }).then(res => {
      console.log(res);
    });
  }
  navigateToDashboard() {
    this._router.navigate(['dashboard']);
  }
}
