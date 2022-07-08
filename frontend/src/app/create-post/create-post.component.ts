import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../models/blog-post.model';
import { BlogPostService } from '../services/blog-post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  public post!: BlogPost;
  public processing: boolean = false;
  public submitted: boolean = false;
  public success: boolean = false;
  public failure: boolean = false;

  errorMessage = '';

  constructor(private postService: BlogPostService) {}

  ngOnInit() {
    this.post = new BlogPost();
  }

  public onSubmit(): void {
    this.processing = this.submitted = true;

    this.postService.CreatePost(this.post).subscribe({
      next: (data) => {
        this.processing = false;
        this.success = true;
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.success = false;
      },
    });
  }
}
