import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CommonRequestService } from '../../../../shared/services/common-request.service';
import { RequestEnums } from '../../../../shared/constants/request-enums';
import Utils from '../../../../shared/services/common/utils';
import { Router } from '@angular/router';
import { GlobalVariables } from '../../../../shared/services/common/globalVariables';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit, OnChanges {
  courses = [];
  @Input()
  searchKey = '';
  constructor(private _commonRequestServ: CommonRequestService,
    private _router: Router,public _globalVariable: GlobalVariables) { }

  ngOnInit() {
    this.getCardsInfo();
  }
  ngOnChanges() {
    this.filterData();
  }


  getCardsInfo() {
    this._commonRequestServ.request(RequestEnums.CARDS_LIST).subscribe(res => {
      Utils.log(JSON.stringify(this.courses));
      this.courses = res;
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
