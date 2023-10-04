import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { IssuesManagerComponent } from './issues-manager/issues-manager.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RestService} from "./rest-service.service";
import { NewIssueModalComponent } from './issues-manager/new-issue-modal/new-issue-modal.component';
import { IssueCreationStatusAlertComponent } from './issues-manager/issue-creation-status-alert/issue-creation-status-alert.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IssuesManagerComponent,
    NewIssueModalComponent,
    IssueCreationStatusAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
