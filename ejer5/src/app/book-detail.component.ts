import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BooksService } from './books.service';
import { Book } from './book.model';

@Component({
    template: `
  <div *ngIf="book">
    <h2>Book "{{book.title}}"</h2>
    <div>
        <p>{{book.description}}</p>
    </div>
    <p>
        <button (click)="removeBook()">Remove</button>
        <button (click)="editBook()">Edit</button>
        <br/><br/>
        <button (click)="gotoBooks()">Back</button>
    </p>
  </div>`
})
export class BookDetailComponent {

    book: Book;

    constructor(private router: Router, activatedRoute: ActivatedRoute, private service: BooksService) {

        let id = activatedRoute.snapshot.params['id'];
        service.getBook(id).subscribe(
            book => this.book = book,
            error => console.error(error)
        );
    }

    removeBook() {
        let okResponse = window.confirm("Do you want to remove this book?");
        if (okResponse) {
            this.service.removeBook(this.book).subscribe(
                book => this.router.navigate(['/books']),
                error => console.error(error)
            )
        }
    }

    editBook() {
        this.router.navigate(['/books/edit', this.book.id ]);
    }

    gotoBooks() {
        this.router.navigate(['/books']);
    }
}
