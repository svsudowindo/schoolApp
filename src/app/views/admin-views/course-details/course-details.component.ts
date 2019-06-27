import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonRequestService } from '../../../shared/services/common-request.service';
import { RequestEnums } from '../../../shared/constants/request-enums';
import { GlobalVariables } from '../../../shared/services/common/globalVariables';
import Utils from 'src/app/shared/services/common/utils';
import { CourseDetailsService } from './course-details.service';

enum YEARS {
  FIRST = 'FIRST_YEAR',
  SECOND = 'SECOND_YEAR',
  THIRD = 'THIRD_YEAR',
  FOURTH = 'FOURTH_YEAR'
}
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})

export class CourseDetailsComponent implements OnInit {
  public subjects;
  YEARS_ENUM = YEARS;
  isActiveYears = {
    FIRST_YEAR: true,
    SECOND_YEAR: false,
    THIRD_YEAR: false,
    FOURTH_YEAR: false
  };
  private courseId: any;
  private years = [];

  constructor(private _router: Router,
    private _activatedRoute: ActivatedRoute,
    public _globalVariable: GlobalVariables,
    private _courseDetailsService: CourseDetailsService) {
    this.courseId = this._activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getCardsInfo();
    this.getYearsByCourseId();
  }

  getCardsInfo() {
    // this.subjects = this._globalVariable.getParameterData('course').year;
    // Utils.log('subjects   ::::::  ' + JSON.stringify(this.subjects));
    // // this._commonRequestServ.request(RequestEnums.SUBJECTS_LIST).subscribe(res => {
    //   // Utils.log(res);
    //   this.subjects = res;
    // });
  }
  navigateToDashboard() {
    this._router.navigate(['dashboard']);
  }

  yearChange(selectedYear) {
    const keysOfYears = Object.keys(this.isActiveYears);
    for (let i = 0; i < keysOfYears.length; i++) {
      if (selectedYear === keysOfYears[i]) {
        this.isActiveYears[keysOfYears[i]] = true;
      } else {
        this.isActiveYears[keysOfYears[i]] = false;
      }
    }
    for (let index = 0; index < this.years.length; index++) {
      if (selectedYear === this.years[index].yearName) {
        this.getSubjectsByYearId(this.years[index].yearID);
        break;
      }
    }

  }

  getYearsByCourseId() {
    RequestEnums.GET_YEAR_BY_COURSEID.values.push(this.courseId);
    this._courseDetailsService.getYearsByCourseId(RequestEnums.GET_YEAR_BY_COURSEID).subscribe((data) => {
      Utils.log('years by id  :::: ' + JSON.stringify(data));
      RequestEnums.GET_YEAR_BY_COURSEID.values = [];
      data.sort(function (a, b) { return a.yearID - b.yearID });
      this.years = data;
      this.yearChange(this.YEARS_ENUM.FIRST);
    }, (error) => {
      Utils.log('years by id error  :::: ' + JSON.stringify(error));
    });
  }

  getSubjectsByYearId(yearId) {
    RequestEnums.GET_SUBJECTS_BY_YEAR.values.push(yearId);
    this._courseDetailsService.getSubjectsByYearId(RequestEnums.GET_SUBJECTS_BY_YEAR).subscribe((data) => {
      Utils.log('subjects by year  ::::: ' + JSON.stringify(data));
      this.subjects = data;
      RequestEnums.GET_SUBJECTS_BY_YEAR.values = [];
    }, (error) => {
      Utils.log('subjects by year error  ::::: ' + JSON.stringify(error));
    });
  }

  goToAddSubjects(){
    this._router.navigate(['add-subjects',this.courseId]);
  }


}
