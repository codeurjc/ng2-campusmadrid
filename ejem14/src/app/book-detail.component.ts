import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Book, BookService } from './book.service';

@Component({
  template: `
  <h2>{{book.title}}</h2>
  <div>
    <label>Id: </label>{{book.id}}
  </div>
  <div>
    <label>Description: </label>{{book.description}}
  </div>
  <p>
    <button (click)="gotoBooks()">Back</button>
  </p>`
})
export class BookDetailComponent {

  book: Book;

  constructor(private router: Router, activatedRoute: ActivatedRoute, service: BookService) {
    let id = activatedRoute.snapshot.params['id'];
    this.book = service.getBook(id);
  }

  gotoBooks() {
    this.router.navigate(['/books']);
  }
}
