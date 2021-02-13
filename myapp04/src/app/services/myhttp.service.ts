import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyhttpService {

  constructor(public myhttp01: HttpClient) { }
  getData(): any {return this.myhttp01.get('https://jsonplaceholder.typicode.com/posts/1'); }
  getAllData(): any {return this.myhttp01.get('https://jsonplaceholder.typicode.com/posts'); }
}
