import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BookDetailComponent } from './book-detail.component';
import { BookListComponent } from './book-list.component';
import { BookFormComponent } from './book-form.component';
import { BooksService } from './books.service';
import { routing } from './app.routing';

@NgModule({
  declarations: [AppComponent, BookDetailComponent, BookListComponent, BookFormComponent],
  imports: [BrowserModule, FormsModule, HttpModule, JsonpModule, routing],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
