import { CommonRequestService } from './../../../shared/services/common-request.service';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';


@Injectable()
export class ForgotPasswordService {
private basicAuthCookie;

  constructor(private _cookieService: CookieService,
    private _commonRequest:CommonRequestService) { }

  forgetPassword(requestObject){
    this.basicAuthCookie = this._cookieService.get('basicAuth');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' +  this.basicAuthCookie
      })
    };
    return this._commonRequest.request(requestObject,null,null,httpOptions);
 
  }
 
}
