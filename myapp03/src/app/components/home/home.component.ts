import { Component, OnInit } from '@angular/core';
import { MyhttpService } from 'src/app/services/myhttp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mydata: any = {};
  constructor(public myinfo: MyhttpService) { }

  ngOnInit(): void {
    this.myinfo.getAllData().subscribe((data: any) => { console.log(data); this.mydata = data; });
  }

}
