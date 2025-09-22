import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: Date;
  image: string;
  category: string;
  tags: string[];
  readTime: number;
  featured: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of Smartphones: What to Expect in 2024',
      excerpt: 'Explore the latest trends and innovations in smartphone technology that will shape the industry in 2024.',
      content: 'Full blog post content here...',
      author: 'Tech Expert',
      date: new Date('2024-01-15'),
      image: 'assets/images/post-item1.jpg',
      category: 'Technology',
      tags: ['Smartphones', 'Innovation', 'Technology'],
      readTime: 5,
      featured: true
    },
    {
      id: 2,
      title: 'Smartwatch Health Features: A Complete Guide',
      excerpt: 'Discover how modern smartwatches are revolutionizing health monitoring and fitness tracking.',
      content: 'Full blog post content here...',
      author: 'Health Tech',
      date: new Date('2024-01-10'),
      image: 'assets/images/post-item2.jpg',
      category: 'Health',
      tags: ['Smartwatch', 'Health', 'Fitness'],
      readTime: 7,
      featured: true
    },
    {
      id: 3,
      title: 'Mobile Photography Tips for Stunning Results',
      excerpt: 'Learn professional photography techniques using just your smartphone camera.',
      content: 'Full blog post content here...',
      author: 'Photo Pro',
      date: new Date('2024-01-05'),
      image: 'assets/images/post-item3.jpg',
      category: 'Photography',
      tags: ['Photography', 'Mobile', 'Tips'],
      readTime: 6,
      featured: false
    },
    {
      id: 4,
      title: 'Choosing the Right Smartphone for Your Needs',
      excerpt: 'A comprehensive guide to help you select the perfect smartphone based on your lifestyle and requirements.',
      content: 'Full blog post content here...',
      author: 'Mobile Expert',
      date: new Date('2024-01-01'),
      image: 'assets/images/post-item4.jpg',
      category: 'Buying Guide',
      tags: ['Buying Guide', 'Smartphone', 'Comparison'],
      readTime: 8,
      featured: true
    },
    {
      id: 5,
      title: 'Smartwatch Battery Life: Tips and Tricks',
      excerpt: 'Maximize your smartwatch battery life with these proven strategies and settings.',
      content: 'Full blog post content here...',
      author: 'Battery Expert',
      date: new Date('2023-12-28'),
      image: 'assets/images/post-item5.jpg',
      category: 'Tips',
      tags: ['Battery', 'Smartwatch', 'Tips'],
      readTime: 4,
      featured: false
    }
  ];

  private blogPostsSubject = new BehaviorSubject<BlogPost[]>(this.blogPosts);

  constructor() { }

  getBlogPosts(): Observable<BlogPost[]> {
    return this.blogPostsSubject.asObservable();
  }

  getBlogPostById(id: number): BlogPost | undefined {
    return this.blogPosts.find(post => post.id === id);
  }

  getFeaturedPosts(): BlogPost[] {
    return this.blogPosts.filter(post => post.featured);
  }

  getLatestPosts(limit: number = 3): BlogPost[] {
    return this.blogPosts
      .sort((a, b) => b.date.getTime() - a.date.getTime())
      .slice(0, limit);
  }

  getPostsByCategory(category: string): BlogPost[] {
    return this.blogPosts.filter(post => post.category === category);
  }

  searchPosts(query: string): BlogPost[] {
    const lowercaseQuery = query.toLowerCase();
    return this.blogPosts.filter(post => 
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.content.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  }
}
