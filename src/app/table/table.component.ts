import { Component, OnInit } from '@angular/core';

import { TABLE } from '../table';
import { TABLES } from '../tableData'; 

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

quantity = 10;
tables = TABLES;
p = 2;
  constructor() { }

  ngOnInit() {
  }

}
