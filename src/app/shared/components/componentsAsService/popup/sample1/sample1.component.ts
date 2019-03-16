import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sample1',
  templateUrl: './sample1.component.html',
  styleUrls: ['./sample1.component.scss']
})
export class Sample1Component implements OnInit {

  @Input()
  data: any;
  constructor() { }

  ngOnInit() {
  }

  getData() {
    console.log('getData');
  }

}
