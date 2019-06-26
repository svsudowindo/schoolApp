import { SubjectConfigService } from './subject-config.service';
import { Component, OnInit, Injector } from '@angular/core';
import { FROM_LOCATIONS, POPUP, DIALOG_TYPE, CLICK_STATUS } from '../../../shared/constants/popup-enum';
import { FormArray, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PopupService } from '../../../shared/components/componentsAsService/popup/popup.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseClass } from '../../../shared/services/common/baseClass';
import { RequestEnums } from 'src/app/shared/constants/request-enums';
import Utils from 'src/app/shared/services/common/utils';

@Component({
  selector: 'app-subjects-config',
  templateUrl: './subjects-config.component.html',
  styleUrls: ['./subjects-config.component.scss']
})
export class SubjectsConfigComponent extends BaseClass implements OnInit {
  subjectsForm: FormGroup;

  public validation_messages = {
    'subjectName': [
      { type: 'required', message: 'Please Enter subject Name' }
    ],
    'subjectCode': [
      { type: 'required', message: 'Please Enter subject Code' }
    ],
    'yearID': [
      { type: 'required', message: 'Please select the year' }
    ]
  };
  private courseId: any;
  private years: any;
  constructor(private _popupService: PopupService,
    private _router: Router,
    private _formBuilder: FormBuilder,
    public _injector: Injector,
    private _activatedRoute: ActivatedRoute,
    private _subjectConfigService: SubjectConfigService) {
    super(_injector);

    this.courseId = this._activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.createForm();
    this.getYearsByCourseId();
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
      yearID: [1, Validators.compose([Validators.required])],
      createdBy: [localStorage.getItem('username')]
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
    Utils.log(this.subjectsForm.get('subjects').value);
    this._subjectConfigService.addSubjects(RequestEnums.ADD_SUBJECTS, this.subjectsForm.get('subjects').value).subscribe((data) => {
      Utils.log('save all subjects   :::::: ' + JSON.stringify(data));
    }, (error) => {
      Utils.log('error from popup  ::::: ' + JSON.stringify(error));
    });
  }

  // saving individual course
  saveIndividualSubject(index) {
    let subject = [];
    subject.push(this.subjectsForm.get('subjects').value[index]);
    this._subjectConfigService.addSubjects(RequestEnums.ADD_SUBJECTS, subject).subscribe((data) => {
      this._popupService.openModal({
        dialog_type: DIALOG_TYPE.ALERT_DIALOG,
        title: 'Success',
        type: POPUP.SUCCESS,
        message: 'Course saved successfully',
        okButtonLabel: 'OK'
      }).then(res => {
        this.removeFormGroupFromArray(index);
      });
    }, (error) => {
      Utils.log('error from popup  ::::: ' + JSON.stringify(error));
    });
  }

  navigateToDashboard() {
    this._router.navigate(['dashboard']);
  }

  getYearsByCourseId() {
    RequestEnums.GET_YEAR_BY_COURSEID.values.push(this.courseId);
    this._subjectConfigService.getYearsByCourseId(RequestEnums.GET_YEAR_BY_COURSEID).subscribe((data) => {
      Utils.log('years by id  :::: ' + JSON.stringify(data));
      data.sort(function (a, b) { return a.yearID - b.yearID });
      this.years = data;
    }, (error) => {
      Utils.log('years by id error  :::: ' + JSON.stringify(error));
    });
  }

}
