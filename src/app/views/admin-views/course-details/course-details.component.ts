import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonRequestService } from '../../../shared/services/common-request.service';
import { RequestEnums } from '../../../shared/constants/request-enums';
import { GlobalVariables } from '../../../shared/services/common/globalVariables';
import Utils from 'src/app/shared/services/common/utils';
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
  public subjects ;
  YEARS_ENUM = YEARS;
  isActiveYears = {
    firstYear: true,
    secondYear: false,
    thirdYear: false,
    fourthYear: false
  };
  constructor(private _router: Router,
    private _commonRequestServ: CommonRequestService,
    public _globalVariable: GlobalVariables) { }
  ngOnInit() {
    this.getCardsInfo();
  }

  getCardsInfo() {
  this.subjects = this._globalVariable.getParameterData('course').year;
  Utils.log('subjects   ::::::  ' + JSON.stringify(this.subjects));
    // this._commonRequestServ.request(RequestEnums.SUBJECTS_LIST).subscribe(res => {
    //   // Utils.log(res);
    //   this.subjects = res;
    // });
  }
  navigateToDashboard() {
    this._router.navigate(['dashboard']);
  }

  yearChange(selectedYear) {
    alert(JSON.stringify(selectedYear));
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
