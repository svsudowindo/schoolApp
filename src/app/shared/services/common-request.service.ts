import { Injectable } from '@angular/core';
import { CommonHttpService } from './http/common-http.service';
import { FrameURLService } from './http/frame-url.service';
import { Observable } from 'rxjs';
import Utils from './common/utils';

@Injectable({
  providedIn: 'root'
})
export class CommonRequestService {

  constructor(private _frameUrlService: FrameURLService,
    private _commonHttpService: CommonHttpService) { }

  request(requestObject, postBody = null, httpParams = null, customHeaders = null): Observable<any> {
    return this.mainRequest(Utils.avoidShallowClone(requestObject), postBody, httpParams, customHeaders);
  }
  mainRequest(requestObject, postBody = null, httpParams = null, customHeaders = null): Observable<any> {
    requestObject.path = this._frameUrlService.getHttpFramedURL(requestObject);
    return this._commonHttpService.sendReciveService(requestObject, postBody, httpParams, customHeaders);
  }
}
