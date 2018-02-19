import { Component, OnInit } from '@angular/core';

import { Employee } from '../employee';
import { EMPLOYEES } from '../mock-employees';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
employees = EMPLOYEES;
id = '';
name = '';
BU = '';
payLoad = {};

 add(id, name, BU) {
  this.payLoad = { id: id, name: name, BU: BU };
// this.employees.push(this.payLoad);
  }
  edit(payLoad) {
  console.log('Editing');
  }
  constructor() { }

  ngOnInit() {
  }
}
