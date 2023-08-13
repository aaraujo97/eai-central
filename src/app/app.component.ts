import { Component } from '@angular/core';
import {FacilitatorService} from "./facilitator.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eai-central';
  appFacilitator: FacilitatorService;
  constructor(facilitator: FacilitatorService) {
    this.appFacilitator = facilitator;
  }
}
