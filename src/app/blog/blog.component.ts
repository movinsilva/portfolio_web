import { Component, OnInit } from '@angular/core';
import { BlogService, BlogPost } from './blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogPosts: BlogPost[] = [];
  loading = true;
  error = false;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.loadBlogPosts();
  }

  loadBlogPosts(): void {
    this.loading = true;
    this.error = false;

    this.blogService.getBlogPosts().subscribe({
      next: (posts) => {
        this.blogPosts = posts;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading blog posts:', error);
        this.error = true;
        this.loading = false;
      },
    });
  }

  openPost(link: string): void {
    window.open(link, '_blank');
  }

  refresh(): void {
    this.loadBlogPosts();
  }
}
