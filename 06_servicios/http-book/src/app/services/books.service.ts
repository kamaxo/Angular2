import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks(key: string){
    return [
      'Angular basic',
      'Angular for dummies',
      'Angular advanced'
    ];
  }
}
