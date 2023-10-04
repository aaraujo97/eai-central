import {Component, EventEmitter, OnDestroy, OnInit, Output, SecurityContext} from '@angular/core';
import {RestService} from "../rest-service.service";
import {IssuesResponseItem} from "./issue-response-model";
import {FacilitatorService} from "../facilitator.service";
import {delay, Subscription} from "rxjs";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-issues-manager',
  templateUrl: './issues-manager.component.html',
  styleUrls: ['./issues-manager.component.css']
})
export class IssuesManagerComponent implements OnInit,OnDestroy {

  issues: IssuesResponseItem[] = [];
  markdown: string[] = [];
  sanitizedMarkdown: SafeHtml[] = [];
  newIssueDismissalReason!: string;

  @Output() newIssueDismissalReasonEvent = new EventEmitter<string>();

  facilitator: FacilitatorService;
  sanitizer: DomSanitizer;

  currentPage: string = '';
  firstRender: boolean = true;
  titleIsLoading: boolean = true;
  bodyIsLoading: boolean = true;
  newIssueSubmitted: boolean = false;
  facilitatorSubscription: Subscription | undefined;
  clientSubscription: Subscription | undefined;



  constructor(private client: RestService,
              private service: FacilitatorService,
              private janitor: DomSanitizer) {
    this.facilitator = service;
    this.sanitizer = janitor;
  }

  facilitatePage(): void {
      this.facilitatorSubscription = this.facilitator.getCurrentPage().subscribe(
        page => {
          this.currentPage = page;
          if (!this.firstRender)
          {
            console.log("Current page changed, now on: ",page);
            this.fetchIssues();
            this.fetchMarkdown();
          }

        }
      )
  }

  ngOnInit() {
      this.facilitatePage();
      this.firstRender = false;
      console.log("OnInitPage: ", this.currentPage)
      this.fetchIssues();
      this.fetchMarkdown();
  }
  fetchIssues() {
    this.titleIsLoading = true;
    this.clientSubscription = this.client.getIssues(this.currentPage).subscribe(
      (issues: IssuesResponseItem[]) =>
      {
        this.issues = issues;
        console.log("Next issue fetched: ", issues);
        this.titleIsLoading = false;
      },
      (error) => {
        console.error('error',error);
      }
    )
    console.log(this.issues)
  }

  fetchMarkdown() {
    this.bodyIsLoading = true;
    this.clientSubscription = this.client.getMarkdown(this.currentPage).subscribe(
      (issue: string[]) =>
      {
        this.markdown = issue;
        console.log("Next issue markdown fetched: ", issue);

        //fill safehtml array
        this.sanitizedMarkdown = this.markdown.map(
          md => this.sanitizeMarkdown(md));
        this.bodyIsLoading = false;
      },
      (error) => {
        console.error('error',error);
      }
    )
    console.log(this.sanitizedMarkdown);
    console.log(this.markdown);
  }

  sanitizeMarkdown(md: string): SafeHtml {
    this.sanitizer.sanitize(SecurityContext.HTML, md);
    return this.sanitizer.bypassSecurityTrustHtml(md);
}

componentIsLoading(): boolean {
    if( this.bodyIsLoading && this.titleIsLoading)
      return true;
    return false
}

  receiveNewIssueModalDismissalReason($event: string)
  {
    this.newIssueDismissalReason = $event;
    this.newIssueSubmitted = true;
    console.log("Parent says, reason is now: ", this.newIssueDismissalReason)
  }

  ngOnDestroy() {
    if (this.clientSubscription)
    {
      this.clientSubscription.unsubscribe();
    }

    if (this.facilitatorSubscription)
      this.facilitatorSubscription.unsubscribe();
  }
}

