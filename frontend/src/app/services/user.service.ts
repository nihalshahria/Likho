import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apiService: ApiService) {}

  // getUsers(): Observable<any> {
  //   return this.http.get(`${environment.apiUrl}/users`, {
  //     responseType: 'json',
  //   });
  // }

  public GetUser(id: string): Observable<any> {
    console.log(id);   
    
    return this.apiService.Get(`/users/${id}`).pipe(
      map((res) => {        
        return new User(res.data);
      })
    );
  }
}
