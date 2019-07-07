import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { CommonRequestService } from '../../../shared/services/common-request.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private basicAuthCookie;

  constructor(public _commonRequest: CommonRequestService,
     private _cookieService: CookieService) {
    }

  registerUser(requestObject, userObject) {
    this.basicAuthCookie = this._cookieService.get('basicAuth');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' +  this.basicAuthCookie
      })
    };
    return this._commonRequest.request(requestObject, userObject, null, httpOptions);
  }
  
  getAllUsers(requestObject) {
    this.basicAuthCookie = this._cookieService.get('basicAuth');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' +  this.basicAuthCookie
      })
    };
    return this._commonRequest.request(requestObject, null, null, httpOptions);
  }

  getUserById(requestObject) {
    this.basicAuthCookie = this._cookieService.get('basicAuth');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' +  this.basicAuthCookie
      })
    };
    return this._commonRequest.request(requestObject, null, null, httpOptions);
  }
}
