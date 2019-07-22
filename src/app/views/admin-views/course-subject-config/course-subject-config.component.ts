import Utils from 'src/app/shared/services/common/utils';
import { Component, OnInit, Injector } from '@angular/core';
import { PopupService } from '../../../shared/components/componentsAsService/popup/popup.service';
import { POPUP, DIALOG_TYPE, CLICK_STATUS, FROM_LOCATIONS } from '../../../shared/constants/popup-enum';
import { Router, ActivatedRoute } from '@angular/router';
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
  private isEditMode: boolean = false;
  private courseId;
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
    private _courseService: CourseSubjectConfigService,
    private _activatedRoute: ActivatedRoute) {
    super(_injector);
    this._activatedRoute.params.subscribe(res => {
      if (res.id) {
        this.isEditMode = true;
        this.courseId = res.id;
      }
    });
  }

  ngOnInit() {
    this.createForm();
    this.getCourseById();
    
  }

  createForm() {
    if (this.isEditMode) {
      this.courseForm = this._formBuilder.group({
        courses: this._formBuilder.array([this.createEditCourseFormGroup()])
      });
    } else {
      this.courseForm = this._formBuilder.group({
        courses: this._formBuilder.array([this.createCourseFormGroup()])
      });
    }
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

  createEditCourseFormGroup(): FormGroup {
    return this._formBuilder.group({
      courseName: ['', Validators.compose([Validators.required])],
      courseCode: ['', Validators.compose([Validators.required])],
      courseDescription: ['', Validators.compose([Validators.required])],
      noOfYears: [1, Validators.compose([Validators.required])],
      updatedBy: [localStorage.getItem('username')]
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
    this.showLoading();
    Utils.log(this.courseForm.get('courses').value);
    this._courseService.saveCourses(RequestEnums.ADD_COURSE, this.courseForm.get('courses').value).subscribe((data) => {
      Utils.log('add All courses  ::::: ' + JSON.stringify(data));
      this._popupService.openModal({
        dialog_type: DIALOG_TYPE.ALERT_DIALOG,
        title: 'Success',
        type: POPUP.SUCCESS,
        message: 'Course saved successfully',
        okButtonLabel: 'OK'
      }).then(res => {
        Utils.log(res);
        this._router.navigate(['dashboard']);
      });

    }, (error) => {
      Utils.log('error  ::::: ' + JSON.stringify(error));
      this.hideLoading();
    });
  }

  // saving individual course
  saveIndividualCourse(index) {
    this.showLoading();
    let course = [];
    course.push(this.courseForm.get('courses').value[index]);
    this._courseService.saveCourses(RequestEnums.ADD_COURSE, course).subscribe((data) => {
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
          navigation: ['add-subjects', data[0].courseID]
        }
      }).then(res => {
        Utils.log(res);
        this.removeFormGroupFromArray(index);
        this.hideLoading();
      });
    }, (error) => {
      Utils.log('error in save individual course');
      this.hideLoading();
    });

  }

  navigateToDashboard() {
    this._router.navigate(['dashboard']);
  }

  updateCourse(i) {
    console.log('update course   :::::: ' + JSON.stringify(this.courseForm.get('courses').value[i]));
    this._courseService.updateCourse(RequestEnums.UPDATE_COURSE, this.courseForm.get('courses').value[i]).subscribe((data) => {
      Utils.log('update course success  ::::::  ' + JSON.stringify(data));
    }, (error) => {
      Utils.log('update course error  ::::::  ' + JSON.stringify(error));
    });
  }

  getCourseById() {
    RequestEnums.GET_COURSE_BY_ID.values.push(this.courseId);
    this._courseService.getCourseById(RequestEnums.GET_COURSE_BY_ID).subscribe((data) => {
      RequestEnums.GET_COURSE_BY_ID.values = [];
      if(this.isEditMode){
        this.getYearByCourseId(data);
      }
      console.log('this.courseForm.get', this.courseForm.get('courses'));
      Utils.log('success response for course by id  :::: ' + JSON.stringify(data));
    }, (error) => {
      Utils.log('error response for course by id  :::: ' + JSON.stringify(error));
    });
  }

  getYearByCourseId(data1) {
    RequestEnums.GET_YEAR_BY_COURSEID.values.push(this.courseId);
    this._courseService.getYearsByCourseId(RequestEnums.GET_YEAR_BY_COURSEID).subscribe((data) => {
      console.log('get years by course id success   :::::: ' + JSON.stringify(data));
      (<FormArray>this.courseForm.get('courses')).controls[0].patchValue(data1);
      (<FormArray>this.courseForm.get('courses')).controls[0].get('noOfYears').setValue(data.length);
      
      RequestEnums.GET_YEAR_BY_COURSEID.values =[];
    }, (error) => {
      Utils.log('get years by course id error   :::::: ' + JSON.stringify(error));
    });
  }

}
