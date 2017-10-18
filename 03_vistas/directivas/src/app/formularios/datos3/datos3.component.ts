import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos3',
  templateUrl: './datos3.component.html',
  styleUrls: ['./datos3.component.css']
})
export class Datos3Component implements OnInit {

  @ViewChild('inputName') eName: ElementRef;

  constructor() { }

  ngOnInit() {
    // this.sName = 'Pepe';
  }

  btnClearForm() {
    //  this.sName = '';
    console.log(this.eName);
  }
}
