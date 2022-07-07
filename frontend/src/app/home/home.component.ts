import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../models/blog-post.model';
import { BlogPostService } from '../services/blog-post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  posts!: BlogPost[];

  constructor(private postService: BlogPostService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  private getPosts(): void {
    this.postService.GetPosts().subscribe((posts) => {
      this.posts = posts.data.news;
      this.loading = false;
    });
  }
}
