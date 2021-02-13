import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit { 

  public title = 'unit testing angular app.'
  constructor() { }

  ngOnInit(): void { }

  onClick(){this.title = 'using jasmine & karma.'}


}
