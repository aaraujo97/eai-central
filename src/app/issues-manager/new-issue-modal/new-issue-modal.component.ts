import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgbModal,ModalDismissReasons} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-new-issue-modal',
  templateUrl: './new-issue-modal.component.html',
  styleUrls: ['./new-issue-modal.component.css']
})
export class NewIssueModalComponent {

  @Input() appName!: string;
  @Output() dismissalReason = new EventEmitter<string>();
  closeResult!: string;

  constructor(private modalService: NgbModal) {}

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  onSubmit(modal: any)
  {
    modal.close("Submitted");
    this.emitDismissalReason();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  private emitDismissalReason(){
    this.dismissalReason.emit(this.closeResult);
  }
}
