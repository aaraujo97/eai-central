import { Component } from '@angular/core';
import {RestService} from "../rest-service.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  collapsed;
  apps;
  selectedApp = '';
  constructor(private client: RestService) {
    this.collapsed = true;

    //temp hardcoded list
    this.apps = [
      "LIFTR",
      "Github_Retriever",
      "Distributed_Project_2022",
      "This one wont work"
    ]
  }
    getRepos(): void{
      // will get repositories belonging to owner x
    }

    onApplicationClick(app: string){
      this.client.getIssues(app);
    }




}
