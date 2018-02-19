import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  a:number;
  b:number;
  
  // normal function.
  // sub(a,b)
  // { 
  //   return b - a;
  // }

  sub = (a,b)=>b-a; // fat arrow function
  inc = (x)=>x+1;
  @Input('srvElement') element: {name: string, id: number;} // srvElement is an alias for ‘element’
  constructor() { 

  }

  ngOnInit() {
  }

}
