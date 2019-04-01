import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  constructor(public _fireAuth: AngularFireAuth) { }

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
}
