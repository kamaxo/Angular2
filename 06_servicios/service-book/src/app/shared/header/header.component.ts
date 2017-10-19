import { Component, OnInit, style } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `<header>
    <h1>{{title}}!</h1>
  </header>`,
    styles: [`
        header {
            text-align: center;
            font-size: 1.8em;
            color : rgb(10, 6, 0);
        }
        `]
})

export class HeaderComponent implements OnInit {
    title: string;
    constructor() { }

    ngOnInit() {
        this.title = 'Servicios';
    }
}
