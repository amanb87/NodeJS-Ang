import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icecreamcomponent',
  templateUrl: './icecreamcomponent.component.html',
  styleUrls: ['./icecreamcomponent.component.css']
})
export class IcecreamcomponentComponent implements OnInit {

  constructor() { }
  title = "I love amul chocobar."
  ngOnInit(): void {
  }

}
