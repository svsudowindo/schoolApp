import { Component, OnInit } from '@angular/core';
import { CommonRequestService } from '../../../../shared/services/common-request.service';
import { RequestEnums } from '../../../../shared/constants/request-enums';
import Utils from '../../../../shared/services/common/utils';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {
  subjects = [];

  constructor(private _commonRequestServ: CommonRequestService) { }

  ngOnInit() {
    this.getCardsInfo();
  }

  getCardsInfo() {
    this._commonRequestServ.request(RequestEnums.CARDS_LIST).subscribe(res => {
      // Utils.log(res);
      this.subjects = res;
    });
  }

}
