import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from './book-list.component';
import { BookDetailComponent } from './book-detail.component';
import { BookFormComponent } from './book-form.component';

const appRoutes = [
    { path: 'books', component: BookListComponent },
    { path: 'books/new', component: BookFormComponent },
    { path: 'books/:id', component: BookDetailComponent },    
    { path: 'books/edit/:id', component: BookFormComponent },
    { path: '', redirectTo: 'books', pathMatch: 'full' }
]

export const routing = RouterModule.forRoot(appRoutes);