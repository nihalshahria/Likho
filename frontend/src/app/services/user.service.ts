import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/users`, {
      responseType: 'json',
    });
  }

  getUser(uuid: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/users/${uuid}`, {
      responseType: 'json',
    });
  }
}
