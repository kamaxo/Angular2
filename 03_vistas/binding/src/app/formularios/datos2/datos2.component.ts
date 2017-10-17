import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos2',
  templateUrl: './datos2.component.html',
  styleUrls: ['./datos2.component.css']
})
export class Datos2Component implements OnInit {

  sName: string;

  constructor() { }

  ngOnInit() {
    this.sName = 'Pepe';
  }

  btnClearForm() {
    this.sName = '';
  }
}
