import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { BlogPost } from '../models/blog-post.model';
import { BlogPostService } from '../services/blog-post.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css'],
})
export class UpdatePostComponent implements OnInit {
  @Input() post: any;
  // public post!: BlogPost;
  updated: EventEmitter<boolean> = new EventEmitter<boolean>();
  public processing: boolean = false;
  public submitted: boolean = false;
  public success: boolean = false;
  public failure: boolean = false;

  errorMessage = '';

  constructor(private postService: BlogPostService) {}

  ngOnInit() {
    // this.post = new BlogPost();
  }

  public onSubmit(): void {
    this.processing = this.submitted = true;

    this.postService.UpdatePost(this.post).subscribe({
      next: (data) => {
        this.processing = false;
        this.success = true;
        this.updated.emit(true);
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.success = false;
      },
    });
  }
}