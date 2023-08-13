import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {IssuesResponseItem} from "./issues-manager/issue-response-model";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private issuesUrl: string = 'http://localhost:8080/issues/';
  private markdownUrl: string = 'http://localhost:8080/markdown/'
  constructor(private http: HttpClient) { }

  getIssues(app: string): Observable<IssuesResponseItem[]> {
    return this.http.get<IssuesResponseItem[]>(this.buildIssuesUrl(app));
  }

  getMarkdown(app: string): Observable<string[]> {
    return this.http.get<string[]>(this.buildMarkdownUrl(app));
  }

  buildIssuesUrl(app: string): string {
    return this.issuesUrl + app;
  }

  buildMarkdownUrl(app: string): string {
    return this.markdownUrl + app;
  }
}
