import { Injectable } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

export interface IDataInfo {
  dialog_type?: string;
  type?: string;
  title?: string;
  message?: string;
  okButtonLabel?: string;
  cancelButtonLabel?: string;
  // any other data if needed
}
@Injectable({
  providedIn: 'root'
})
export class PopupInfoService {

  data: IDataInfo;
  modalRef: NgbModalRef;
  constructor() { }
}
