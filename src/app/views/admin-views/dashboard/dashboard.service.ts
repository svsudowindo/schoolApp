import { Injectable } from '@angular/core';
import { CommonRequestService } from '../../../shared/services/common-request.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(public _commonRequest: CommonRequestService) { }

  getAllCourses(requestObject){
   return this._commonRequest.request(requestObject);
  }
}
