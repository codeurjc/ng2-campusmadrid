import { Component } from '@angular/core';

import { Item } from './item.model';
import { ItemComponent } from './item.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {

	private items: Item[] = [];

	addItem(description: string) {
		this.items.push({ description, checked: false });
	}

	removeItem(item: Item) {
		let index = this.items.indexOf(item);
		if (index > -1) {
			this.items.splice(index, 1);
		}
	}
}
