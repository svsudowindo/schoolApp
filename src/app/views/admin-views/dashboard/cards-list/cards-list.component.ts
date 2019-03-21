import { Component, OnInit } from '@angular/core';
import { CommonRequestService } from '../../../../shared/services/common-request.service';
import { RequestEnums } from '../../../../shared/constants/request-enums';
import Utils from '../../../../shared/services/common/utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {
  subjects = [];

  constructor(private _commonRequestServ: CommonRequestService,
    private _router: Router) { }

  ngOnInit() {
    console.log('cards');
    this.getCardsInfo();
  }

  getCardsInfo() {
    this._commonRequestServ.request(RequestEnums.CARDS_LIST).subscribe(res => {
      // Utils.log(res);
      this.subjects = res;
    });
  }

  navigateToCourseDetails() {
    this._router.navigate(['course-details']);
  }

}
