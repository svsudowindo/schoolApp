import { Component, OnInit, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { BaseClass } from './../../../shared/services/common/baseClass';
import { RequestEnums } from '../../../shared/constants/request-enums';
import { GlobalVariables } from '../../../shared/services/common/globalVariables';
import { GlobalVariableEnums } from '../../../shared/constants/gloabal-variable-enums';
import Utils from './../../../shared/services/common/utils';
import { CommonRequestService } from '../../../shared/services/common-request.service';
import { PopupService } from '../../../shared/components/componentsAsService/popup/popup.service';
import { POPUP } from '../../../shared/constants/popup-enum';
import { IDataInfo } from '../../../shared/components/componentsAsService/popup/popup-info.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseClass implements OnInit {

  public successMessageStatus: string;
  public errorMessageStatus: string;
  loginForm = [
    {
      type: 'text',
      label: 'Username',
      id: 'Username',
      required: true
    },
    {
      type: 'password',
      label: 'Password',
      id: 'Password',
      required: true
    },
    {
      type: 'button',
      label: 'Sign in',
      id: 'login'
    },
    {
      type: 'link',
      label: 'Register Here',
      id: 'register',
      hasDescription: true,
      description: 'Dont have account yet ?'
    }
  ];
  // once successfull login make can activate service to true
  constructor(public route: Router,
    public injector: Injector,
    private _commonRequest: CommonRequestService,
    private _globalVariables: GlobalVariables,
    private _popService: PopupService) {
    super(injector);
  }

  ngOnInit() {
    Utils.log('hello from login component by utils method');
  }

  // getDetails
  getDetails() {
    this.successMessageStatus = '';
    this.errorMessageStatus = '';

    this._globalVariables.setParameterData(GlobalVariableEnums.TOKEN, 'abc');
    RequestEnums.LOGIN.values.push(1);
    this._commonRequest.request(RequestEnums.LOGIN).subscribe((res) => {
      console.log(res);
      this.successMessageStatus = 'Success';
    },
      ((err) => {
        this.errorMessageStatus = err;
      }));
  }

  openModal() {
    const obj: IDataInfo = {
      type: POPUP.ERROR,
      title: 'SUCCESS',
      message: 'You have successfully Logged In',
      okButtonLabel: 'OK'
    };
    this._popService.openModal(obj).then(res => {
      console.log(res);
    }, (reason) => {
      console.log(reason);
    });
  }

  submit(){
    console.log("submit called from login");
    this.route.navigate(['dashboard']);
  }
}
