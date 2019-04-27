import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchValue;
  @Output()
  searchCourse: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  search() {
    this.searchCourse.emit(this.searchValue);
  }
}
