import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  hiddenTitle(hidden: boolean){
    console.log("Hidden:"+hidden)
  }
}