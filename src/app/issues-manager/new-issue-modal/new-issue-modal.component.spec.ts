import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIssueModalComponent } from './new-issue-modal.component';

describe('NewIssueModalComponent', () => {
  let component: NewIssueModalComponent;
  let fixture: ComponentFixture<NewIssueModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewIssueModalComponent]
    });
    fixture = TestBed.createComponent(NewIssueModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
