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
    console.log('aaaaaaaaaaaaaaaaaa  :::: ' + JSON.stringify(courseData));
    console.log('bbbbbbbbbbbbbbbbbb  :::: ' + this.basicAuthCookie);
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' +  this.basicAuthCookie
      })
    };
    return this._commonRequest.request(requestObject,courseData,null,httpOptions);
  }

}
