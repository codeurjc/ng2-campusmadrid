package com.github.codeurjc.books;

import java.util.Collection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
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
@RequestMapping("/books")
public class BookController {

	private static final Logger log = LoggerFactory.getLogger(BookController.class);

	@Autowired
	private BookRepository repository;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<Book> getBooks() {
		return repository.findAll();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Book> getBook(@PathVariable long id) {

		log.info("Get book {}", id);

		Book book = repository.findOne(id);
		if (book != null) {
			return new ResponseEntity<>(book, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Book newBook(@RequestBody Book book) {

		repository.save(book);

		return book;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Book> updateBook(@PathVariable long id, @RequestBody Book updatedBook) {

		Book book = repository.findOne(id);
		if (book != null) {

			updatedBook.setId(id);
			repository.save(updatedBook);

			return new ResponseEntity<>(updatedBook, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Book> deleteBook(@PathVariable long id) {

		Book deletedBook = repository.findOne(id);
		if (deletedBook != null) {
			repository.delete(id);
			return new ResponseEntity<>(deletedBook, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
