import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgetInfo = [
    {
      type: 'password',
      label: 'New Password',
      id: 'new_password',
      required: true
    },
    {
      type: 'password',
      label: 'Confirm Password',
      id: 'confirm_password',
      required: true
    },
    {
      type: 'button',
      label: 'Done',
      id: 'done'
    },
    {
      type: 'link',
      label: 'Register Here',
      id: 'register',
      hasDescription: true,
      description: 'Dont have account yet ?'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
