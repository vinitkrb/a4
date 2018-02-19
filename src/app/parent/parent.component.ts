import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  serverElements = [{name: 'John', id: 8}, {name: 'Matt', id: 10}];
  constructor() { }

  ngOnInit() {
  }

}
