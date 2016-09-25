import { Component } from '@angular/core';
import { Book, BookService } from './book.service';

@Component({
  template: `
    <h2>BOOKS</h2>
    <ul>
      <li *ngFor="let book of books">
        <a [routerLink]="['/book', book.id]">{{book.id}} - {{book.title}}</a>
      </li>
    </ul>
  `
})
export class BookListComponent {

  books: Book[];

  constructor(service: BookService) {
    this.books = service.getBooks();
  }
}
