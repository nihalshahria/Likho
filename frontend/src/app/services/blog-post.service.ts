import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BlogPost } from '../models/blog-post.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  constructor(private apiService: ApiService) {}

  public GetPosts(): Observable<any> {
    return this.apiService.Get(`/news`).pipe(
      map((res) => {
        res.data.news.map((x: any) => new BlogPost(x));
        return res;
        // return json.map((post) => new BlogPost(post));
      })
    );
  }

  public GetPost(id: string): Observable<any> {
    return this.apiService.Get(`/news/${id}`).pipe(
      map((res) => {
        return new BlogPost(res.data);
      })
    );
  }

  public CreatePost(post: BlogPost): Observable<any> {
    return this.apiService.Post(`/news`, post);
  }

  public deletePost(id: string) {
    return this.apiService.Delete(`/news/${id}`);
    // return this.apiService.Delete(environment.api.entries + '/' + id);
  }
}