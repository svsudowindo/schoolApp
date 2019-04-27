import { Component, OnInit } from '@angular/core';
import { PopupService } from '../../../shared/components/componentsAsService/popup/popup.service';
import { POPUP } from '../../../shared/constants/popup-enum';

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
  constructor(private _popupService: PopupService) { }

  ngOnInit() {
    this.courses.push(new CourseModel('', '', ''));
  }

  addAnotherCourse() {
    this.courses.push(new CourseModel('', '', ''));
  }
  removeCourse(index) {
    this.courses.splice(index, 1);
    this._popupService.openModal({
      type: POPUP.SUCCESS,
      message: 'Course Removed Successfully',
      okButtonLabel: 'ok',
      title: 'Status'
    });
  }
}
