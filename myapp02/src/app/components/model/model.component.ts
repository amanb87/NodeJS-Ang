import { Component } from '@angular/core';


interface TvChannel {
  id: number;
  name: string;
  programName: string;
}


@Component({
  selector: 'app-model',
  template: `
            <h3>{{title}}</h3>
            <h4>{{chan.name}}</h4>
            <aside> Showing {{chan.programName}} channel: {{chan.id}} </aside>
            <label>Current Program: </label>
            <input [(ngModel)]="chan.programName" placeholder="My fav program">

         `
})
export class ModelComponent  {
  title = 'Popular TV Channel';

  chan: TvChannel = {
    id: 507,
    name: 'Times NOW' ,
    programName: 'News Hour'
  };

}