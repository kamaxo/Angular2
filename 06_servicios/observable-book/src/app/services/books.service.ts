import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/Rx';

const URL = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';

@Injectable()
export class BooksService {

  constructor(private http: Http) { }

  getBooks(key: string){
    return this.http.get(URL + key).map(
      response => this.extractTitles(response));
  }

  private extractTitles(response: Response) {
    return response.json().items.map(book => book.volumeInfo.title)
  }

}
