import  Utils  from 'src/app/shared/services/common/utils';
import { Component, OnInit, Injector } from '@angular/core';
import { PopupService } from '../../../shared/components/componentsAsService/popup/popup.service';
import { POPUP, DIALOG_TYPE, CLICK_STATUS, FROM_LOCATIONS } from '../../../shared/constants/popup-enum';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { BaseClass } from '../../../shared/services/common/baseClass';
import { CourseSubjectConfigService } from './course-subject-config.service';
import { RequestEnums } from 'src/app/shared/constants/request-enums';

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
    'noOfYears': [
      { type: 'required', message: 'Please Select Year' }
    ]
  };
  constructor(private _popupService: PopupService,
    private _router: Router,
    private _formBuilder: FormBuilder,
    public _injector: Injector,
    private _courseService:CourseSubjectConfigService) {
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
      noOfYears: [1, Validators.compose([Validators.required])],
      createdBy: [localStorage.getItem('username')]
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
    this._courseService.saveCourses(RequestEnums.ADD_COURSE,this.courseForm.get('courses').value).subscribe((data)=>{
Utils.log('add All courses  ::::: ' + JSON.stringify(data));
this._popupService.openModal({
  dialog_type: DIALOG_TYPE.ALERT_DIALOG,
  title: 'Success',
  type: POPUP.SUCCESS,
  message: 'Course saved successfully',
  okButtonLabel: 'OK'
}).then(res => {
  console.log(res);
 this._router.navigate(['dashboard']);
});

    },(error) =>{
      Utils.log('error  ::::: ' + JSON.stringify(error));
    });
  }
  // saving individual course
  saveIndividualCourse(index) {
    let course = [];
    console.log(index);
   // this.courseForm.get('courses').value[index]['createdBy'] = localStorage.getItem('username');
    console.log(this.courseForm.get('courses').value[index]);
   course.push(this.courseForm.get('courses').value[index]);
    this._courseService.saveCourses(RequestEnums.ADD_COURSE , course).subscribe((data) =>{
      Utils.log('response of add subject  ::::: ' + JSON.stringify(data));
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
        this.removeFormGroupFromArray(index);
      });
    },(error) =>{

    });
    // after successfull service call
   
  }
  navigateToDashboard() {
    this._router.navigate(['dashboard']);
  }
}
