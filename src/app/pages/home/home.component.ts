import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items:Array<string>= ['Rishab','nit','e','rew','wr','wr','wr','rw','','','','','','','','',''];
  
  constructor() { }

  ngOnInit() {
  }

}
