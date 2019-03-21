import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
enum YEARS {
  FIRST = 'firstYear',
  SECOND = 'secondYear',
  THIRD = 'thirdYear',
  FOURTH = 'fourthYear'
}
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})

export class CourseDetailsComponent implements OnInit {

  YEARS_ENUM = YEARS;
  isActiveYears = {
    firstYear: true,
    secondYear: false,
    thirdYear: false,
    fourthYear: false
  };
  constructor(private _router: Router) { }

  ngOnInit() {
  }
  navigateToDashboard() {
    this._router.navigate(['dashboard']);
  }

  yearChange(selectedYear) {
    const keysOfYears = Object.keys(this.isActiveYears);
    for (let i = 0; i < keysOfYears.length ; i++) {
      if (selectedYear === keysOfYears[i]) {
        this.isActiveYears[keysOfYears[i]] = true;
      } else {
        this.isActiveYears[keysOfYears[i]] = false;
      }
    }
  }
}
