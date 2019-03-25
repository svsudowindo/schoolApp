import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  @Input()
  subjects: any;
  constructor() { }

  ngOnInit() {
  }
}
