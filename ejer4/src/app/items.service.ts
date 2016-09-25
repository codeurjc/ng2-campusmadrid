import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Item } from './item.model';

const BASE_URL = 'http://127.0.0.1:8080/items/';

@Injectable()
export class ItemsService {

	constructor(private http: Http) { }

	getItems() {
		return this.http.get(BASE_URL)
			.map(response => response.json())
			.catch(error => this.handleError(error));
	}

	addItem(item: Item) {
		return this.http.post(BASE_URL, item)
			.map(response => response.json())
			.catch(error => this.handleError(error));
	}

	removeItem(item: Item) {
		return this.http.delete(BASE_URL + item.id)
			.map(response => response.json())
			.catch(error => this.handleError(error));
	}

	updateItem(item: Item) {
		return this.http.put(BASE_URL + item.id, item)
			.map(response => response.json())
			.catch(error => this.handleError(error));
	}

	private handleError(error: any) {
		console.error(error);
		return Observable.throw("Server error (" + error.status + "): " + error.text())
	}
}