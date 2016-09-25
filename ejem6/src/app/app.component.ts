import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {

    name = "Anybody";
    gender: string;
    javascript = false;
    angular = false;
    items = [
        { value: 'Item1', selected: true },
        { value: 'Item2', selected: false }
    ]
    city: string;

    change() {
        this.name = "Nobody";
        this.angular = !this.angular;
        this.javascript = !this.javascript;
        this.gender = this.gender == 'Male' ? 'Female' : 'Male';

        for (let key in this.items) {
            this.items[key].selected = !this.items[key].selected;
        }
    }

    update(city: string) {
        console.log("City: "+city);
        this.city = city;
    }
}