import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Book } from './book.model';

const BASE_URL = 'http://127.0.0.1:8080/books/';

@Injectable()
export class BooksService {

	constructor(private http: Http) { }

	getBooks() {
		return this.http.get(BASE_URL)
			.map(response => response.json())
			.catch(error => this.handleError(error));
	}

	getBook(id: number | string) {
		return this.http.get(BASE_URL + id)
			.map(response => response.json())
			.catch(error => this.handleError(error));
	}

	addBook(book: Book) {
		return this.http.post(BASE_URL, book)
			.map(response => response.json())
			.catch(error => this.handleError(error));
	}

	removeBook(book: Book) {
		return this.http.delete(BASE_URL + book.id)
			.map(response => response.json())
			.catch(error => this.handleError(error));
	}

	updateBook(book: Book) {
		return this.http.put(BASE_URL + book.id, book)
			.map(response => response.json())
			.catch(error => this.handleError(error));
	}

	private handleError(error: any) {
		console.error(error);
		return Observable.throw("Server error (" + error.status + "): " + error.text())
	}
}