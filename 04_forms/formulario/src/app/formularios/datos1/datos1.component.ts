import { Component, OnInit, ViewChild } from '@angular/core';
import { Book, Country } from './../libro.model';

@Component({
  selector: 'app-datos1',
  templateUrl: './datos1.component.html',
  styleUrls: ['./datos1.component.css']
})
export class Datos1Component implements OnInit {

  oBook: Book;
  aCountries: Array<Country>;
  isSent: boolean;
  @ViewChild('myForm') form: any;

  constructor() { }

  ngOnInit() {
    // Inicializamos el objeto
    this.btnClearForm();

    this.aCountries = [
      {code: 'ES', name: 'España'},
      {code: 'UK', name: 'Reino Unido'},
      {code: 'US', name: 'Estados Unidos'}
    ];
  }

  btnSend() {
    this.isSent = true;

    console.log(this.form);
  }

  btnClearForm() {
    this.isSent = false;
    this.oBook = {
      author: '',
      title: '',
      editorial: '',
      numPage: 0,
      exlibris: false,
      genero: '',
      country: {code: '', name: ''}
    };
  }
}
