package com.github.codeurjc.items;

import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
		RequestMethod.DELETE })
@RequestMapping("/items")
public class ItemsController {

	private Map<Long, Item> items = new ConcurrentHashMap<>();
	private AtomicLong lastId = new AtomicLong();

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<Item> items() {
		return items.values();
	}

	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Item nuevoItem(@RequestBody Item item) {

		long id = lastId.incrementAndGet();
		item.setId(id);
		items.put(id, item);

		return item;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Item> actulizaItem(@PathVariable long id, @RequestBody Item itemActualizado) {

		Item item = items.get(id);

		if (item != null) {

			itemActualizado.setId(id);
			items.put(id, itemActualizado);

			return new ResponseEntity<>(itemActualizado, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Item> getItem(@PathVariable long id) {

		Item item = items.get(id);

		if (item != null) {
			return new ResponseEntity<>(item, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Item> borraItem(@PathVariable long id) {

		Item item = items.remove(id);

		if (item != null) {
			return new ResponseEntity<>(item, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
