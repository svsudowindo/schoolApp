import { Component, OnInit, Injector } from '@angular/core';
import { PopupService } from '../../../shared/components/componentsAsService/popup/popup.service';
import { POPUP, DIALOG_TYPE, CLICK_STATUS, FROM_LOCATIONS } from '../../../shared/constants/popup-enum';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { BaseClass } from '../../../shared/services/common/baseClass';

@Component({
  selector: 'app-course-subject-config',
  templateUrl: './course-subject-config.component.html',
  styleUrls: ['./course-subject-config.component.scss']
})
export class CourseSubjectConfigComponent extends BaseClass implements OnInit {
  courseForm: FormGroup;
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
    'courseName': [
      { type: 'required', message: 'Please Enter course Name' }
    ],
    'courseCode': [
      { type: 'required', message: 'Please Enter Course Code' }
    ],
    'courseDescription': [
      { type: 'required', message: 'Please Enter Course Description' }
    ],
    'courseYear': [
      { type: 'required', message: 'Please Select Year' }
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
    this.courseForm = this._formBuilder.group({
      courses: this._formBuilder.array([this.createCourseFormGroup()])
    });
  }

  // adding course form group
  createCourseFormGroup(): FormGroup {
    return this._formBuilder.group({
      courseName: ['', Validators.compose([Validators.required])],
      courseCode: ['', Validators.compose([Validators.required])],
      courseDescription: ['', Validators.compose([Validators.required])],
      courseYear: [1, Validators.compose([Validators.required])]
    });
  }

  // remove course from formgroup
  removeFormGroupFromArray(index: number) {
    (<FormArray>this.courseForm.get('courses')).removeAt(index);
  }
  // adding new form group into an array
  addFormGroupToArray() {
    console.log(this.courseForm);
    (<FormArray>this.courseForm.get('courses')).push(this.createCourseFormGroup());
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
  saveAllCourses() {
    console.log(this.courseForm.get('courses').value);
  }
  // saving individual course
  saveIndividualCourse(index) {
    console.log(index);
    console.log(this.courseForm.get('courses').value[index]);
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
