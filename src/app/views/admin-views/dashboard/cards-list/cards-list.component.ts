import { BaseClass } from './../../../../shared/services/common/baseClass';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, OnChanges, Injector } from '@angular/core';
import { CommonRequestService } from '../../../../shared/services/common-request.service';
import { RequestEnums } from '../../../../shared/constants/request-enums';
import Utils from '../../../../shared/services/common/utils';
import { Router } from '@angular/router';
import { GlobalVariables } from '../../../../shared/services/common/globalVariables';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent extends BaseClass implements OnInit, OnChanges {
  courses = [];
  @Input()
  searchKey = '';
  constructor(private _dashboardService: DashboardService,
    private _router: Router,
    public _globalVariable: GlobalVariables,
    private httpClient: HttpClient,
    public injector: Injector) {
      super(injector);
     }

  ngOnInit() {
    this.getCardsInfo();
  }

  ngOnChanges() {
    this.filterData();
  }

  getCardsInfo() {
    this.showLoading();
  this._dashboardService.getAllCourses(RequestEnums.GET_COURSES_LIST).subscribe(res => {
      this.courses = res;
      Utils.log('aaaaaaaaaaaaa' + JSON.stringify(this.courses));
      this.hideLoading();
    }, (error) => {
      Utils.log('error from getCarsdsInfo  ::: ' + JSON.stringify(error));
      this.hideLoading();
    });
  }

  filterData() {
    const filteredData = [];
    if (this.searchKey === '') {
      this.getCardsInfo();
      return;
    }
    for (let i = 0; i < this.courses.length; i++) {
      if (this.courses[i].courseName.toLowerCase().includes(this.searchKey.toLowerCase())) {
        filteredData.push(this.courses[i]);
      }
    }
    this.courses = filteredData;
  }

  navigateToCourseDetails(courseDetails) {
    console.log('course'+ JSON.stringify(courseDetails));
    this._router.navigate(['course-details',courseDetails.courseID]);
  }

}
