import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {

  blogs: Blog[] ;
  selectedBlog: Blog;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
     this.blogService
      .getBlogs()
      .subscribe((blogs: Blog[]) => {
        this.blogs = blogs.map((blog) => {
          if (!blog.content) {
            blog.content = 'no blog created' ;
          }
          return blog;
        });
      });
  }

  private getIndexOfBlog = (blogId: string) => {
    return this.blogs.findIndex((blog) => {
      return blog._id === blogId;
    });
  }

  selectBlog(blog: Blog) {this.selectedBlog = blog ; console.log('selectedBlog:', this.selectedBlog ); }

  createNewBlog() {
    const blog: Blog = {
      name: '',
      email: '',
      content: ''
    };

    // By default, a newly-created blog will have the selected state, for ease of modification.
    this.selectBlog(blog);
  }

  deleteBlog = (blogId: string) => {
    const idx = this.getIndexOfBlog(blogId);
    if (idx !== -1) {
      this.blogs.splice(idx, 1);
      this.selectBlog(null);
    }
    return this.blogs;
  }

  addBlog = (blog: Blog) => {
    this.blogs.push(blog);
    this.selectBlog(blog);
    return this.blogs;
  }

  updateBlog = (blog: Blog) => {
    const idx = this.getIndexOfBlog(blog._id);
    console.log('updateBlog(): ', idx) ;
    if (idx !== -1) {
      this.blogs[idx] = blog;
      this.selectBlog(blog);
    }
    return this.blogs;
  }
}
