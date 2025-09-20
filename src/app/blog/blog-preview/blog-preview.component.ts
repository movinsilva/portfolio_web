import { Component, OnInit } from '@angular/core';
import { BlogService, BlogPost } from '../blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-preview',
  templateUrl: './blog-preview.component.html',
  styleUrls: ['./blog-preview.component.css'],
})
export class BlogPreviewComponent implements OnInit {
  featuredPosts: BlogPost[] = [];
  loading = true;

  constructor(private blogService: BlogService, private router: Router) {}

  ngOnInit(): void {
    this.loadFeaturedPosts();
  }

  loadFeaturedPosts(): void {
    this.blogService.getBlogPosts().subscribe({
      next: (posts) => {
        // Show only first 3 posts as featured
        this.featuredPosts = posts.slice(0, 3);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  openPost(link: string): void {
    window.open(link, '_blank');
  }

  viewAllPosts(): void {
    this.router.navigate(['/blog']);
  }
}
