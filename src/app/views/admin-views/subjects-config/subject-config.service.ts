import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonRequestService } from '../../../shared/services/common-request.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SubjectConfigService {

  private basicAuthCookie;

  constructor(public _commonRequest: CommonRequestService,
     private _cookieService: CookieService) {
  
    }

  getYearsByCourseId(requestObject) {
    this.basicAuthCookie = this._cookieService.get('basicAuth');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' +  this.basicAuthCookie
      })
    };
    return this._commonRequest.request(requestObject,null,null,httpOptions);
  }

  addSubjects(requestObject,subjects) {
    this.basicAuthCookie = this._cookieService.get('basicAuth');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' +  this.basicAuthCookie
      })
    };
    return this._commonRequest.request(requestObject,subjects,null,httpOptions);
  }

  updateSubject(requestObject,subjects) {
    this.basicAuthCookie = this._cookieService.get('basicAuth');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' +  this.basicAuthCookie
      })
    };
    return this._commonRequest.request(requestObject,subjects,null,httpOptions);
  }

  getSubjectBySubjectId(requestObject) {
    this.basicAuthCookie = this._cookieService.get('basicAuth');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' +  this.basicAuthCookie
      })
    };
    return this._commonRequest.request(requestObject,null,null,httpOptions);
  }

}
