import { CommonRequestService } from './../../../shared/services/common-request.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailsService {

  private basicAuthCookie;

  constructor(public _commonRequest: CommonRequestService,
    private _cookieService: CookieService) {

  }

  getYearsByCourseId(requestObject) {
    this.basicAuthCookie = this._cookieService.get('basicAuth');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + this.basicAuthCookie
      })
    };
    return this._commonRequest.request(requestObject, null, null, httpOptions);
  }

  getSubjectsByYearId(requestObject) {
    this.basicAuthCookie = this._cookieService.get('basicAuth');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + this.basicAuthCookie
      })
    };
    return this._commonRequest.request(requestObject, null, null, httpOptions);
  }

  deleteSubject(requestObject) {
    this.basicAuthCookie = this._cookieService.get('basicAuth');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + this.basicAuthCookie
      })
    };
    return this._commonRequest.request(requestObject, null, null, httpOptions);
  }

  

}
