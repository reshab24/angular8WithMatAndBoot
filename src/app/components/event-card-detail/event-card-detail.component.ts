import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-card-detail',
  templateUrl: './event-card-detail.component.html',
  styleUrls: ['./event-card-detail.component.scss']
})
export class EventCardDetailComponent implements OnInit {
  cols: number;

  constructor() { }

  ngOnInit() {
      this.cols = (window.innerWidth <= 400) ? 1 : 2;
  }
  onResize(event) {
    console.log(event.target.innerWidth,"innerWidth");
    this.cols = (event.target.innerWidth <= 400) ? 1 : 2;
  }

}
