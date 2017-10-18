import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos1',
  templateUrl: './datos1.component.html',
  styleUrls: ['./datos1.component.css']
})
export class Datos1Component implements OnInit {

  sIdea: string;
  aIdeas: Array<string>;
  estiloColor: string;
  tamLetra: number;
  estilos: string;
  oEstilo: {};

  constructor() { }

  ngOnInit() {
    this.sIdea = '';
    this.aIdeas = [];
    this.estiloColor = 'blue';
    this.tamLetra = 2;
    this.estilos = 'color: blue';
    this.oEstilo = {'color': 'blue', 'font-size': '14px'};
  }

  btnAdd() {
    if (this.sIdea !== '') {
      this.aIdeas.push(this.sIdea);
      this.sIdea = '';
    }
  }
  btnClearForm() {
    this.aIdeas = [];
  }
}
