import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonRequestService } from '../../../shared/services/common-request.service';

@Injectable()
export class LoginService {

  constructor(private _commonRequestService: CommonRequestService) { }

  login(requestObject,loginData) {
    let header =new HttpHeaders({Authorization: 'Basic ' + btoa(loginData.email + ':' + loginData.password)});
    return this._commonRequestService.request(requestObject,null,null,header);
  }


}
