import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { BooksService } from './books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  private books: string[] = [];

  constructor(private http: Http, private service: BooksService) { }

  search(title: string) {

    this.books = [];

    this.service.getBooks(title).subscribe(
      books => this.books = books,
      error => console.error(error)
    );
  }
}
