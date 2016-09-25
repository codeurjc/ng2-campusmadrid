import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Item } from './item.model';
import { ItemComponent } from './item.component';

const BASE_URL = 'http://127.0.0.1:8080/items/';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

	private items: Item[] = [];

	constructor(private http: Http) { }

	ngOnInit() {
		this.refresh();
	}

	private refresh() {
		this.http.get(BASE_URL).subscribe(
			response => this.items = response.json(),
			error => this.handleError(error)
		);
	}

	addItem(description: string) {

		let item = { description, checked: false };

		this.http.post(BASE_URL, item).subscribe(
			response => this.refresh(),
			error => this.handleError(error)
		);
	}

	removeItem(item: Item) {

		this.http.delete(BASE_URL + item.id).subscribe(
			response => this.refresh(),
			error => this.handleError(error)
		);
	}

	updateItem(item: Item) {

		return this.http.put(BASE_URL + item.id, item).subscribe(
			response => this.refresh(),
			error => this.handleError(error)
		);
	}

	private handleError(error: any) {
		console.error(error);
	}
}