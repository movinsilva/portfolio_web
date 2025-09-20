import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, of } from 'rxjs';

export interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail?: string;
  categories: string[];
  author: string;
  readTime?: string;
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private readonly MEDIUM_USERNAME = 'movin_silva';
  private readonly RSS_TO_JSON_API = 'https://api.rss2json.com/v1/api.json';
  private readonly MEDIUM_RSS_URL = `https://medium.com/feed/@${this.MEDIUM_USERNAME}`;

  constructor(private http: HttpClient) {}

  getBlogPosts(): Observable<BlogPost[]> {
    const apiUrl = `${this.RSS_TO_JSON_API}?rss_url=${encodeURIComponent(
      this.MEDIUM_RSS_URL
    )}`;

    return this.http.get<any>(apiUrl).pipe(
      map((response) => {
        if (response.status === 'ok' && response.items) {
          return response.items.map((item: any) =>
            this.transformMediumPost(item)
          );
        }
        return [];
      }),
      catchError((error) => {
        console.error('Error fetching Medium posts:', error);
        return of(this.getFallbackPosts());
      })
    );
  }

  private transformMediumPost(item: any): BlogPost {
    return {
      title: item.title || 'Untitled',
      link: item.link || '#',
      pubDate: this.formatDate(item.pubDate),
      description: this.stripHtml(item.description || item.content || ''),
      thumbnail: this.extractThumbnail(item.description || item.content || ''),
      categories: item.categories || [],
      author: item.author || 'Movin Silva',
      readTime: this.estimateReadTime(item.description || item.content || ''),
    };
  }

  private stripHtml(html: string): string {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    const text = tmp.textContent || tmp.innerText || '';
    return text.length > 200 ? text.substring(0, 200) + '...' : text;
  }

  private extractThumbnail(content: string): string | undefined {
    const imgRegex = /<img[^>]+src="([^">]+)"/;
    const match = content.match(imgRegex);
    return match ? match[1] : undefined;
  }

  private formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  private estimateReadTime(content: string): string {
    const wordsPerMinute = 200;
    const text = this.stripHtml(content);
    const wordCount = text.split(' ').length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readTime} min read`;
  }

  private getFallbackPosts(): BlogPost[] {
    return [
      {
        title: 'Welcome to My Blog',
        link: 'https://medium.com/@movin_silva',
        pubDate: 'Recent',
        description:
          'Check out my latest articles on Medium where I share insights about software development, technology, and my journey as a developer.',
        categories: ['Technology', 'Development'],
        author: 'Movin Silva',
        readTime: '3 min read',
      },
    ];
  }
}
