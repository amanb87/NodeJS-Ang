import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Post{
  id: number,
  title: string
}

@Component({
  selector: 'app-postmessage',
  templateUrl: './postmessage.component.html',
  styleUrls: ['./postmessage.component.css']
})
export class PostmessageComponent implements OnInit {
  postid: number = 0;
  posttitle: string = "";

  constructor(public myhttp2:HttpClient) { }

  ngOnInit(): void {
    this.myhttp2.post<Post>("https://jsonplaceholder.typicode.com/posts", 
      { 
        title: 'My Posting: Nice travelogue on Mysore.' 
      }
      ).subscribe((data:Post)=>{
        this.postid = data.id;
        this.posttitle = data.title;
      })

  }

}
