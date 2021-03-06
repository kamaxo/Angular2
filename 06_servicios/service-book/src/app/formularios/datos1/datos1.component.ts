import { Component, OnInit, ViewChild } from '@angular/core';
import { BooksService } from './../../services/books.service';

@Component({
  selector: 'app-datos1',
  templateUrl: './datos1.component.html',
  styleUrls: ['./datos1.component.css']
})
export class Datos1Component implements OnInit {

  sKey: string;
  aBooks: Array<string>;
  url: string;


  constructor(private booksService: BooksService) { }

  ngOnInit() {
    // Inicializamos el objeto
    this.btnClearForm();
  }

  btnSearch() {
    this.aBooks = this.booksService.getBooks(this.sKey);
  }

  btnClearForm() {
    // Inicializamos el objeto
    this.sKey = '';
    this.aBooks = [];
  }
}
