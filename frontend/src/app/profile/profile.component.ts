import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../models/blog-post.model';
import { User } from '../models/user.model';
import { BlogPostService } from '../services/blog-post.service';
import { StorageService } from '../services/storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  loading: boolean = true;
  posts: BlogPost[] = [];
  isLoggedIn: boolean = false;
  user: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private postService: BlogPostService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    this.getUser();
  }

  private getUser(): void {
    const id = this.route.snapshot.params['id'];

    this.userService.GetUser(id).subscribe((user) => {
      this.user = user;
      this.getPosts();
    });
  }

  private getPosts(): void {    
    this.postService.GetPosts({ userId: this.user.uuid }).subscribe((posts) => {
      this.posts = posts.data.news;
      this.loading = false;
    });
  }
}
