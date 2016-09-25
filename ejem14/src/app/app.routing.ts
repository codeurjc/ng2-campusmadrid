import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from './book-list.component';
import { BookDetailComponent } from './book-detail.component';

const appRoutes = [
  { path: 'book/:id', component: BookDetailComponent,  },
  { path: 'books', component: BookListComponent },
  { path: '', redirectTo: 'books', pathMatch: 'full' }
]

export const routing = RouterModule.forRoot(appRoutes);
