import { Component, OnInit } from '@angular/core';
import { Book, Country } from './../libro.model';

@Component({
  selector: 'app-datos1',
  templateUrl: './datos1.component.html',
  styleUrls: ['./datos1.component.css']
})
export class Datos1Component implements OnInit {

  oBook: Book;
  aCountries: Array<Country>;

  constructor() { }

  ngOnInit() {
    // Inicializamos el objeto
    this.oBook = {
      author: '',
      title: '',
      editorial: '',
      numPage: 0,
      exlibris: false,
      genero: '',
      country: {code: '', name: ''}
    };

    this.aCountries = [
      {code: 'ES', name: 'España'},
      {code: 'UK', name: 'Reino Unido'},
      {code: 'US', name: 'Estados Unidos'}
    ];
  }

  btnAdd() {
  }

  btnClearForm() {
  }
}
