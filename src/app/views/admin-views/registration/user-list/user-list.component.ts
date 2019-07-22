import { DIALOG_TYPE, POPUP, CLICK_STATUS } from './../../../../shared/constants/popup-enum';
import Utils from 'src/app/shared/services/common/utils';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { User } from '../user.model';
import { ITEMS_PER_PAGE } from '../user-enums';
import { CustomSearchService } from '../../../../shared/services/common/customSearch/custom-search.service';
import { RegistrationService } from './../registration.service';
import { RequestEnums } from 'src/app/shared/constants/request-enums';
import { PopupService } from 'src/app/shared/components/componentsAsService/popup/popup.service';

const users: User[] = [];

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [DecimalPipe]
})
export class UserListComponent implements OnInit {
  users: Array<any>;
  searchData = [];
  pageOfItems: Array<any>;
  pageSize = 5;
  initialPage = 1;
  IETMS_PER_PAGE = ITEMS_PER_PAGE;
  searchKey = '';
  constructor(private _router: Router,
    private _customSearchService: CustomSearchService,
    private _registrationService: RegistrationService,
    private _popupService: PopupService) {
    this.users = users;
    this.searchData = users;
  }

  ngOnInit() {
    this.getAllUsers();
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  search() {
    const headers = ['username', 'lastName'];
    this.users = this._customSearchService.searchFilterArrayOfJson(this.searchData, this.searchKey, headers);
    console.log(this.users);
  }
  navigateToDashboard() {
    this._router.navigate(['dashboard']);
  }

  navigateToCreateUser() {
    this._router.navigate(['registration', 'create']);
  }

  navigateToEditUser(user) {
    this._router.navigate(['registration', 'edit', user.userId]);
  }

  getAllUsers() {
    this._registrationService.getAllUsers(RequestEnums.GET_ALL_USER).subscribe((data) => {
      this.users = data;
      Utils.log('get All user success :::: ' + JSON.stringify(data));

    }, (error) => {
      Utils.log('get All user error  :::: ' + JSON.stringify(error));
    });
  }

  deleteUser(event,user){
    event.stopPropagation();
    RequestEnums.DELETE_USER.values.push(user.userId);
    this._popupService.openModal({
      dialog_type: DIALOG_TYPE.CONFIMATION_DIALOG,
      type: POPUP.ERROR,
      title: 'Delete User',
      message: 'Please confirm to delete the User',
      okButtonLabel: 'Delete',
      cancelButtonLabel: 'Cancel'
    }).then(res => {
      if (res === CLICK_STATUS.SUBMIT_BUTTON) {
       this._registrationService.DeleteUserById(RequestEnums.DELETE_USER).subscribe((data)=>{
        RequestEnums.DELETE_USER.values = []; 
        this.getAllUsers();
        Utils.log('delete user success   ::::: ' + JSON.stringify(data));
       },(error)=>{
        Utils.log('delete user error   ::::: ' + JSON.stringify(error));
       });
       
      }
    });

  }
}
