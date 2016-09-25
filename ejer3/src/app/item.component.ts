import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Item } from './item.model';

@Component({
	selector: 'item',
	templateUrl: './item.component.html'
})
export class ItemComponent {

	@Input()
	private item: Item;

	@Output()
	private remove = new EventEmitter<Item>();

	@Output()
	private update = new EventEmitter<Item>();

	fireRemove() {
		this.remove.emit(this.item);
	}

	toggleChecked() {
		this.item.checked = !this.item.checked;
		this.update.emit(this.item);
	}
}
