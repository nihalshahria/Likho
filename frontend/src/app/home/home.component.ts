import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../models/blog-post.model';
import { BlogPostService } from '../services/blog-post.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  posts!: BlogPost[];
  isLoggedIn: boolean = false;

  constructor(
    private postService: BlogPostService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.getPosts();
    this.isLoggedIn = this.storageService.isLoggedIn();
    // this.reloadPage();
  }

  private getPosts(): void {
    this.postService.GetPosts().subscribe((posts) => {
      this.posts = posts.data.news;
      this.loading = false;
    });
  }
  reloadPage(): void {
    window.location.reload();
  }
}
