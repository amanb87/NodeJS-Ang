import { Component } from '@angular/core';

@Component({
  selector: 'app-btn',
  template: `<div>Most popular JS lib: {{lib}}.<br><br>
              <button (click)="whichLib()">Vote</button></div>
              `

})
export class BtnComponent {
  public lib = 'jQuery' ;

   whichLib(): void { console.log('Voted - lib: ', this.lib); }

}