import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonRequestService } from '../../../shared/services/common-request.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
 
  constructor(public _commonRequest: CommonRequestService) {
   
  
   }

  getAllCourses(requestObject){
   // let headers =new HttpHeaders({Cookie:'JSESSIONID=' + localStorage.getItem('jsessionId')});
   let headers: HttpHeaders = new HttpHeaders();
headers = headers.append('Cookie', 'JSESSIONID=' + localStorage.getItem('jsessionId')); 
   console.log('dddddddddddddddddd   :::' + JSON.stringify(headers));
   return this._commonRequest.request(requestObject,null,null,headers);
  }
}
