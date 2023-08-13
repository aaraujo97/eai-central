import { Component } from '@angular/core';
import {FacilitatorService} from "../facilitator.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  collapsed;
  apps;
  selectedApp = '';
  facilitator: FacilitatorService;

  constructor(service: FacilitatorService) {
    this.collapsed = true;
    this.facilitator = service;
    //temp hardcoded list
    this.apps = [
      "LIFTR",
      "Github_Retriever",
      "Distributed_Project_2022",
      "This one wont work"
    ]

    this.selectedApp = this.apps[0];
    this.facilitator.setPage(this.selectedApp);
  }
  onApplicationClick(app: string) {
      this.selectedApp = app;
      this.facilitator.setPage(this.selectedApp);
  }
}
