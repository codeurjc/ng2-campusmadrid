import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    constructor(private http: Http) { }

    newAnuncio(title: string) {

        let url = "http://127.0.0.1:9001/anuncios/";

        let anuncio = {
            nombre : title,
            asunto : title
        }

        this.http.post(url, anuncio).subscribe(
            response => console.log(response),
            error => console.error(error)
        );
    }
}
