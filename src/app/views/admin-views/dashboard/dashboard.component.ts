import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../shared/components/componentsAsService/loader/loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  searchKey: string;
  constructor(private _router: Router) { }

  ngOnInit() {
  }
  openLoader() {
  }
  searchCourse(searchValue) {
    this.searchKey = searchValue;
  }

  navigateToAddCourse() {
    this._router.navigate(['add-course']);
  }
}
