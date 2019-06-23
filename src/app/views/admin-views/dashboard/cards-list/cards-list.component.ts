import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
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
export class CardsListComponent implements OnInit, OnChanges {
  courses = [];
  @Input()
  searchKey = '';
  constructor(private _dashboardService: DashboardService,
    private _router: Router,
    public _globalVariable: GlobalVariables,
    private httpClient: HttpClient) { }

  ngOnInit() {
    this.getCardsInfo();

    // this.httpClient.get("http://localhost:9090/questionbank/auth/courses", { withCredentials: true }).subscribe((res) => {
		// 	console.log(res);
		// 	// console.log(" jsessionId : " + res.jsessionId);
		// 	// this.cookieService.set('jsessionId', res.jsessionId);
		// 	// this.cookieValue = this.cookieService.get('jsessionId');
		// 	// console.log("cookieValue : " + this.cookieValue);
		// });

  }
  ngOnChanges() {
    this.filterData();
  }


  getCardsInfo() {
    this._dashboardService.getAllCourses(RequestEnums.GET_COURSES_LIST).subscribe(res => {
      this.courses = res;
      Utils.log('aaaaaaaaaaaaa' + JSON.stringify(this.courses));
     
    },(error)=>{
      Utils.log('error from getCarsdsInfo  ::: ' + JSON.stringify(error));
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
    this._globalVariable.setParameterData('course',courseDetails);
    this._router.navigate(['course-details']);
  }

}
