import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  @Input()
  clientHeight = 80;
  @Input()
  clientWidth = 250;
  @Input()
  pageName = '';
  @Input()
  showPageName = false;
  constructor() { }

  ngOnInit() {
  }

}
