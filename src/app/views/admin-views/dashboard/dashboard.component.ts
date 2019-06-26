import { BaseClass } from './../../../shared/services/common/baseClass';
import { Component, OnInit, Injector } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseClass implements OnInit {
  searchKey: string;
  constructor(private _router: Router,
    public injector: Injector) {
    super(injector);
  }

  ngOnInit() {
this.hideLoading();
  }

  searchCourse(searchValue) {
    this.searchKey = searchValue;
  }

  navigateToAddCourse() {
    this._router.navigate(['add-course']);
  }
}
