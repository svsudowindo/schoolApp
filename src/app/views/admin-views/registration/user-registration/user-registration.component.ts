import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  navigateToDashboard() {
    this._router.navigate(['registration']);
  }
}
