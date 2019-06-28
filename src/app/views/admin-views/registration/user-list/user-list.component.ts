import { Component, OnInit, PipeTransform, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { startWith, map } from 'rxjs/operators';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { User } from '../user.model';
import { ITEMS_PER_PAGE } from '../user-enums';
import { CustomSearchService } from '../../../../shared/services/common/customSearch/custom-search.service';


const users: User[] = [
  {
    emailAddress: 'sai@gmail.com',
    firstName: 'sai',
    lastName: 'kumar',
    mobileNumber: '9542754461',
    role: 'admin',
    updatedBy: 'saikumar',
    username: 'sai@123',
    // updatedDate: ''
  },
  {
    emailAddress: 'vipul@gmail.com',
    firstName: 'vipul',
    lastName: 'parmar',
    mobileNumber: '8991919191',
    role: 'user',
    updatedBy: 'admin',
    username: 'vipul@123'
  },
  {
    emailAddress: 'sai@gmail.com',
    firstName: 'sai',
    lastName: 'kumar',
    mobileNumber: '9542754461',
    role: 'admin',
    updatedBy: 'saikumar',
    username: 'sai@123',
    // updatedDate: ''
  },
  {
    emailAddress: 'vipul@gmail.com',
    firstName: 'vipul',
    lastName: 'parmar',
    mobileNumber: '8991919191',
    role: 'user',
    updatedBy: 'admin',
    username: 'vipul@123'
  },
  {
    emailAddress: 'sai@gmail.com',
    firstName: 'sai',
    lastName: 'kumar',
    mobileNumber: '9542754461',
    role: 'admin',
    updatedBy: 'saikumar',
    username: 'sai@123',
    // updatedDate: ''
  },
  {
    emailAddress: 'vipul@gmail.com',
    firstName: 'vipul',
    lastName: 'parmar',
    mobileNumber: '8991919191',
    role: 'user',
    updatedBy: 'admin',
    username: 'vipul@123'
  },
  {
    emailAddress: 'sai@gmail.com',
    firstName: 'sai',
    lastName: 'kumar',
    mobileNumber: '9542754461',
    role: 'admin',
    updatedBy: 'saikumar',
    username: 'sai@123',
    // updatedDate: ''
  },
  {
    emailAddress: 'vipul@gmail.com',
    firstName: 'vipul',
    lastName: 'parmar1',
    mobileNumber: '8991919191',
    role: 'user',
    updatedBy: 'admin',
    username: 'vipul@123'
  },
  {
    emailAddress: 'sai@gmail.com',
    firstName: 'sai',
    lastName: 'kumar',
    mobileNumber: '9542754461',
    role: 'admin',
    updatedBy: 'saikumar',
    username: 'sai@123',
    // updatedDate: ''
  },
  {
    emailAddress: 'vipul@gmail.com',
    firstName: 'vipul',
    lastName: 'parmar2',
    mobileNumber: '8991919191',
    role: 'user',
    updatedBy: 'admin',
    username: 'vipul@123'
  },
  {
    emailAddress: 'sai@gmail.com',
    firstName: 'sai',
    lastName: 'kumar',
    mobileNumber: '9542754461',
    role: 'admin',
    updatedBy: 'saikumar',
    username: 'sai@123',
    // updatedDate: ''
  },
  {
    emailAddress: 'vipul@gmail.com',
    firstName: 'vipul',
    lastName: 'parmar4',
    mobileNumber: '8991919191',
    role: 'user',
    updatedBy: 'admin',
    username: 'vipul@123'
  },
  {
    emailAddress: 'sai@gmail.com',
    firstName: 'sai',
    lastName: 'kumar',
    mobileNumber: '9542754461',
    role: 'admin',
    updatedBy: 'saikumar',
    username: 'sai@123',
    // updatedDate: ''
  },
  {
    emailAddress: 'vipul@gmail.com',
    firstName: 'vipul',
    lastName: 'parmar6',
    mobileNumber: '8991919191',
    role: 'user',
    updatedBy: 'admin',
    username: 'vipul@123'
  },
  {
    emailAddress: 'sai@gmail.com',
    firstName: 'sai',
    lastName: 'kumar',
    mobileNumber: '9542754461',
    role: 'admin',
    updatedBy: 'saikumar',
    username: 'sai@123',
    // updatedDate: ''
  },
  {
    emailAddress: 'vipul@gmail.com',
    firstName: 'vipul',
    lastName: 'parmar',
    mobileNumber: '8991919191',
    role: 'user',
    updatedBy: 'admin',
    username: 'vipul@123'
  },
];

function search(text: string, pipe: PipeTransform) {
  return users.filter(user => {
    const term = text.toLowerCase();
    return user.username.toLowerCase().includes(term)
      || pipe.transform(user.updatedBy).includes(term)
      || pipe.transform(user.firstName).includes(term)
      || pipe.transform(user.emailAddress).includes(term);
  });
}

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
    private _customSearchService: CustomSearchService) {
    this.users = users;
    this.searchData = users;
  }

  ngOnInit() {
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
    console.log(user);
    this._router.navigate(['registration', 'edit', user.username]);
  }
}
