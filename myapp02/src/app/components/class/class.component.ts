
import { Component } from '@angular/core';

interface TvChannel {  // define this first i.e. before the component.
    id: number;
    name: string;
}

@Component({
    selector: 'app-class',
    styles: [`aside {border: 1px solid darkred; width: 20em;}`],
    template: `<h3>{{title}}</h3> <h4>{{chan.name }}</h4><br>
             See on ch.: {{chan.id}}. <br>
             Breaking news... now
             <br />  <br />
             <app-kfc></app-kfc>
             <aside> {{chan|json}} </aside>
             <app-listview2></app-listview2>        

              `
})

export class ClassComponent {
    public title = 'Popular TV Channel';

    public chan: TvChannel = {
        id: 508,
        name: 'Doordarshan'
    };
}