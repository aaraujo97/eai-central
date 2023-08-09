import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  getIssues(app: string): void {
    this.http.get('http://localhost:8080/issues/' + app).subscribe(
      data => {
        console.log(data);
        // Handle the returned data
      },
      error => {
        console.error('There was an error!', error);
        // Handle the error
      }
    );
  }
}
