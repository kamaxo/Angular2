import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() name: string;
  @Output() event: EventEmitter<string>;
  namePref: string;

  constructor() {
    this.event = new EventEmitter();
  }

  ngOnInit() {
  }

  btnResponse() {
    this.name = '';
    this.event.emit(this.namePref);
  }
}
