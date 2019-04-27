import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
    this.courses.push(new CourseModel('', '', ''));
  }

  addAnotherCourse() {
    this.courses.push(new CourseModel('', '', ''));
  }
}
