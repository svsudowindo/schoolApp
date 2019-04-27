import { Component, OnInit } from '@angular/core';
import { PopupService } from '../../../shared/components/componentsAsService/popup/popup.service';
import { POPUP, DIALOG_TYPE, CLICK_STATUS } from '../../../shared/constants/popup-enum';
import { Router } from '@angular/router';

class CourseModel {
  courseName: string;
  courseCode: string;
  courseDescription: string;
  constructor(name, code, desc) {
    this.courseName = name;
    this.courseCode = code;
    this.courseDescription = desc;
  }
}
@Component({
  selector: 'app-course-subject-config',
  templateUrl: './course-subject-config.component.html',
  styleUrls: ['./course-subject-config.component.scss']
})
export class CourseSubjectConfigComponent implements OnInit {
  courses: CourseModel[] = [];
  constructor(private _popupService: PopupService,
    private _router: Router) { }

  ngOnInit() {
    this.courses.push(new CourseModel('', '', ''));
  }

  addAnotherCourse() {
    this.courses.push(new CourseModel('', '', ''));
  }
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
        this.courses.splice(index, 1);
      } else {
      }
    });
  }

  navigateToDashboard() {
    this._router.navigate(['dashboard']);
  }
}
