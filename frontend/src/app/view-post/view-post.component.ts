import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPostService } from '../services/blog-post.service';
import { BlogPost } from '../models/blog-post.model';
import { StorageService } from '../services/storage.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css'],
})
export class ViewPostComponent implements OnInit {
  loading: boolean = true;
  post!: BlogPost;
  ownPost: boolean = false;
  updateMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: BlogPostService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.getPost();
  }

  public deletePost() {
    const id = this.route.snapshot.params['id'];
    this.postService.DeletePost(id).subscribe((res) => {
      this.router.navigate(['/home']).then(() => {
        window.location.reload();
      });
    });
  }
  public updatePost() {
    this.updateMode = true;
  }

  private getPost(): void {
    const id = this.route.snapshot.params['id']; //+ is JS conversion from string to int (which id should be)

    this.postService.GetPost(id).subscribe((post) => {
      this.post = post;
      this.checkAuthor(post.user);
      this.loading = false;
    });
  }

  public eventHandle(event: any):void {
    this.updateMode = false;
    
    window.location.reload();
    console.log(this.updateMode);
  }

  private checkAuthor(user: User): void {
    if (this.storageService.getUser().uuid == user.uuid) {
      this.ownPost = true;
    }
  }
  goToProfile() {
    this.router.navigate([`/profile/${this.post.user.uuid}`]).then(() => {
      window.location.reload();
    });
  }
}
