import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  navigateToDashboard() {
    this._router.navigate(['dashboard']);
  }
}
