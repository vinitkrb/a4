import { Component } from '@angular/core';
import { NavService } from './nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-4 Project';
  logout() {
    window.location.href = '/binding';
  }
  example: string;
  constructor(private _navService: NavService){ // added this constructor
  }
  // added this ngOnInit method
  ngOnInit(){
  this.example = this._navService.someMethod();
  }
}
