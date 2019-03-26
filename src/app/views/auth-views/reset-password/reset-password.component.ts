import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm = [
    {
      type: 'text',
      label: 'Username or Email',
      id: 'username_email',
      required: true
    },
    {
      type: 'button',
      label: 'Send',
      id: 'send'
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
