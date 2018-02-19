import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
userName = '';
password = '';
login() {
  if (this.userName === 'admin' && this.password === 'admin123') {
  console.log('Logged in ' + this.userName);
  window.location.href = '/dashboard';
  }else {
  alert('username or password is wrong.');
  }
}
  constructor() { }

  ngOnInit() {
  }

}
