import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent {

  @Input() blog: Blog = <Blog>{};
  @Input() createHandler = null;
  @Input() updateHandler = null;
  @Input() deleteHandler = null;

  constructor(private blogService: BlogService) {}

  createBlog(blog: Blog) {
    this.blogService.createBlog(blog).subscribe((newBlog: Blog) => {
      this.createHandler(newBlog);
    });
  }

  updateBlog(blog: Blog): void {
    this.blogService.updateBlog(blog).subscribe((updatedBlog: Blog) => {
      this.updateHandler(updatedBlog);
      console.log('blog updated');
    });
  }

  deleteBlog(blogId: string): void {
    this.blogService.deleteBlog(blogId).subscribe((deletedBlogId: string) => {
      this.deleteHandler(deletedBlogId);
      console.log('blog deleted');
    });
  }

}
