import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ItemComponent } from './item.component';
import { ItemsService } from './items.service';

@NgModule({
  declarations: [AppComponent, ItemComponent],
  imports: [BrowserModule, FormsModule, HttpModule, JsonpModule],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
