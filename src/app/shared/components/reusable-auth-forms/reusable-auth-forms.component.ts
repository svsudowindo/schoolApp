import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reusable-auth-forms',
  templateUrl: './reusable-auth-forms.component.html',
  styleUrls: ['./reusable-auth-forms.component.scss']
})
export class ReusableAuthFormsComponent implements OnInit {
  @Input()
  formInfo: any[];
  constructor() { }

  ngOnInit() {
  }

  isTextField(type) {
    if (type === 'text' || type === 'password') {
      return true;
    }
  }
  isButton(type) {
    if (type === 'button') {
      return true;
    }
  }
  isLink(type) {
    if (type === 'link') {
      return true;
    }
  }
}
