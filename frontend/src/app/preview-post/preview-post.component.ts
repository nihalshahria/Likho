import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPost } from '../models/blog-post.model';

@Component({
  selector: 'app-preview-post',
  templateUrl: './preview-post.component.html',
  styleUrls: ['./preview-post.component.css'],
})
export class PreviewPostComponent implements OnInit {
  @Input() post!: BlogPost;

  constructor(private router: Router) {}
  ngOnInit() {}

  public go(): void {
    this.router.navigate(['/posts/' + this.post.uuid]).then(() => {
      window.location.reload();
    });
  }

  goToProfile() {
    this.router.navigate([`/profile/${this.post.user.uuid}`]).then(() => {
      window.location.reload();
    });
  }
}
