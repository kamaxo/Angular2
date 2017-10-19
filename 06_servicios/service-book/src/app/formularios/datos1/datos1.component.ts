import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { BooksService } from './../../services/books.service';

const URL = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';

@Component({
  selector: 'app-datos1',
  templateUrl: './datos1.component.html',
  styleUrls: ['./datos1.component.css']
})
export class Datos1Component implements OnInit {

  sKey: string;
  aBooks: Array<string>;
  url: string;


//  constructor(private booksService: BooksService) { }
  constructor(private http: Http) { }

  ngOnInit() {
    // Inicializamos el objeto
    this.btnClearForm();
  }

  btnSearch(){
    //this.aBooks = this.booksService.getBooks(this.sKey);
    this.aBooks = [];

    this.http.get(URL + this.sKey).subscribe(
      response => {
        console.log(response.json());
        const data = response.json();
        for (var i = 0; i < data.items.length; i++) {
          let bookTitle = data.items[i].volumeInfo.title;
          this.aBooks.push(bookTitle);
        }
      },
      error => console.log(error)
    );
  }

  btnClearForm() {
    // Inicializamos el objeto
    this.sKey = '';
    this.aBooks = [];
  }
}
