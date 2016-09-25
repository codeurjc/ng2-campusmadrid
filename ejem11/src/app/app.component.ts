import { Component } from '@angular/core';
import { BooksService } from './books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  private books: string[] = [];

  constructor(private booksService: BooksService) { }

  search(title: string) {
    this.books = this.booksService.getBooks(title);
  }
}
