import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../shared/components/componentsAsService/loader/loader.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  openLoader() {
  }
}
