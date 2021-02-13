import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  color = "green";
  name = 'Angular (click here)';

  response = 'No msg yet.';

  respond() {
    this.response = "Success: child01 msg received.";
  }

  changeColor(color: any) {
    console.log('parent changeColor: ', color) ;
    this.color = color;
  }

}
