import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupInfoService, IDataInfo } from './popup-info.service';
import { POPUP, CLICK_STATUS, DIALOG_TYPE } from '../../../constants/popup-enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  popupObtainedInfo: IDataInfo;
  POPUPENUM = POPUP;
  DIALOG_TYPE = DIALOG_TYPE;
  constructor(public activeModal: NgbActiveModal,
    private _popupInfoService: PopupInfoService,
    private _router: Router) {
    this.popupObtainedInfo = this._popupInfoService.data;
  }

  ngOnInit() {
  }

  submit() {
    this.activeModal.close(CLICK_STATUS.SUBMIT_BUTTON);
  }

  cancel() {
    this.activeModal.close(CLICK_STATUS.CANCEL_BUTTON);
  }

  navigateToSpecified(route) {
    this.activeModal.close(CLICK_STATUS.AUTO_CLOSE);
    this._router.navigate(route);
  }
}
