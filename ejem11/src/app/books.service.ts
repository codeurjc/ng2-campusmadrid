import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  getBooks(title: string) {
    return [
      'Aprende Java en 2 días',
      'Java para torpes',
      'Java para expertos'
    ];
  }
}
