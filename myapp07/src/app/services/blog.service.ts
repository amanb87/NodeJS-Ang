import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogsUrl = 'http://localhost:3000/api/blogs';

  constructor(private http: HttpClient) { }
  getBlogs() { return this.http.get(this.blogsUrl); }
  createBlog(newBlog: Blog) { return this.http.post(this.blogsUrl, newBlog); }

  // delete("/api/blogs/:id")
  deleteBlog(delBlogId: string) {
    console.log('del blog id:', delBlogId);
    return this.http.delete(this.blogsUrl + '/' + delBlogId);
  }

  updateBlog(putBlog: Blog) {
    console.log('updated blog', putBlog);
    const putUrl = this.blogsUrl + '/' + putBlog._id;
    return this.http.put(putUrl, putBlog);
  }
}
