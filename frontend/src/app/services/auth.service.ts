// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
// };

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiService: ApiService) {}

  login(email: string, password: string): Observable<any> {
    return this.apiService.Post(`/users/login`, { email, password });
  }

  register(name: string, email: string, password: string): Observable<any> {
    return this.apiService.Post(`/users`, { name, email, password });
  }

  logout() {
    console.log('logout');
  }
}
