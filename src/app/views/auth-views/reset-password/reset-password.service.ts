import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { CookieService } from 'ngx-cookie-service';
import { CommonRequestService } from 'src/app/shared/services/common-request.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  private basicAuthCookie;

  constructor(public _fireAuth: AngularFireAuth,private _cookieService: CookieService,
    private _commonRequest:CommonRequestService) { }

  resetPassword(resetData): Observable<any> {
    return this.fromfirebaseAuthPromise(this._fireAuth.auth.sendPasswordResetEmail(resetData.email));
  }

  fromfirebaseAuthPromise(promise): Observable<any> {
    const subject = new Subject<any>();
    promise.then(
      res => {
        subject.next(res);
        subject.complete();
      },
      err => {
        subject.error(err);
        subject.complete();
      });
    return subject.asObservable();
  }

  doResetPassword(requestObject){
    this.basicAuthCookie = this._cookieService.get('basicAuth');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' +  this.basicAuthCookie
      })
    };
    return this._commonRequest.request(requestObject,null,null,httpOptions);
  }
}
