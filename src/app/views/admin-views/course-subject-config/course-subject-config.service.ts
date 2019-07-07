import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonRequestService } from '../../../shared/services/common-request.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CourseSubjectConfigService {

  private basicAuthCookie;

  constructor(public _commonRequest: CommonRequestService,
     private _cookieService: CookieService) {
  
    }

    saveCourses(requestObject,courseData) {
    this.basicAuthCookie = this._cookieService.get('basicAuth');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' +  this.basicAuthCookie
      })
    };
    return this._commonRequest.request(requestObject,courseData,null,httpOptions);
  }

  getCourseById(requestObject) {
    this.basicAuthCookie = this._cookieService.get('basicAuth');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' +  this.basicAuthCookie
      })
    };
    return this._commonRequest.request(requestObject,null,null,httpOptions);
  }

  
}
