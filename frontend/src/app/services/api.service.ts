import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public Get(endpoint: string, queryParams?: any): Observable<any> {
    let params = new HttpParams();
    if (queryParams) {
      console.log(queryParams);

      for (const key in queryParams) {
        params = params.set(key.toString(), queryParams[key].toString());
        console.log(params.toString());
      }
    }

    return this.http
      .get(API_URL + endpoint + '?' + params.toString(), {
        responseType: 'json',
      })
      .pipe(catchError(this.handleError));
  }

  public Post(endpoint: string, data: any): Observable<any> {
    return this.http
      .post(API_URL + endpoint, data, httpOptions)
      .pipe(catchError(this.handleError));
  }

  public Update(endpoint: string, data: any): Observable<any> {
    return this.http
      .put(API_URL + endpoint, data, httpOptions)
      .pipe(catchError(this.handleError));
  }

  public Delete(endpoint: string) {
    return this.http
      .delete(API_URL + endpoint)
      .pipe(catchError(this.handleError));
  }

  //handle any error encounted while sending http request
  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return throwError(() => error);
  }
}
