import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  name = 'Anybody';

  setName(name:string){
    this.name = name;
  }
}