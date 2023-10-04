import {Component, EventEmitter, Input, Output} from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-issue-creation-status-alert',
  templateUrl: './issue-creation-status-alert.component.html',
  styleUrls: ['./issue-creation-status-alert.component.css']
})
export class IssueCreationStatusAlertComponent {
  @Input() reason!: string;
  @Input() submitted!: boolean;
  @Output() displayed = new EventEmitter<boolean>();
  isDisplayed: boolean = false;
  SUCCESS: string = "Closed with: Submitted";
  types: string[] = ["success","danger"];

  isSuccess(): boolean{
    console.log("Compare status: ", this.reason, this.SUCCESS);
    if (this.reason == this.SUCCESS)
    {
      this.isDisplayed = true;
      this.displayed.emit(this.isDisplayed);
    }
    return this.reason == this.SUCCESS;
  }

  isNull()
  {
    return this.reason == undefined;
  }

  protected readonly closed = closed;
}
