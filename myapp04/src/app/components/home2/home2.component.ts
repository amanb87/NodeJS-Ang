import { Component, OnInit } from '@angular/core';
import { MyhttpService } from 'src/app/services/myhttp.service';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  mydata: any = [];
  constructor(public myinfo: MyhttpService) { }

  ngOnInit(): void {
    this.myinfo.getAllData().subscribe((data: any) => { console.log(data); this.mydata = data; });
  }

}
