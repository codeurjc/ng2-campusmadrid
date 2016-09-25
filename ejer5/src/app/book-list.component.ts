import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BooksService } from './books.service';
import { Book } from './book.model';

@Component({
    template: `
    <h2>Books</h2>
    <ul class="items">
      <li *ngFor="let book of books">
        <a [routerLink]="['/books', book.id]">{{book.title}}</a>
      </li>
    </ul>
    <button (click)="newBook()">New book</button>
  `
})
export class BookListComponent implements OnInit {

    books: Book[];

    constructor(private router:Router, private service: BooksService) {}

    ngOnInit(){
      this.service.getBooks().subscribe(
        books => this.books = books,
        error => console.log(error)
      );
    }

    newBook() {
      this.router.navigate(['/books/new']);
    }
}
