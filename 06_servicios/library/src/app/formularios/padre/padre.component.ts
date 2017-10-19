import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  sKey: string;
  aBooks: Array<string>;

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.sKey = '';
    this.aBooks = [];
  }

  btnFind(){
    this.aBooks = this.booksService.getBooks(this.sKey);
  }
}
