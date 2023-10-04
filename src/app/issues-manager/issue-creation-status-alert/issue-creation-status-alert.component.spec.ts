import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueCreationStatusAlertComponent } from './issue-creation-status-alert.component';

describe('IssueCreationStatusAlertComponent', () => {
  let component: IssueCreationStatusAlertComponent;
  let fixture: ComponentFixture<IssueCreationStatusAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IssueCreationStatusAlertComponent]
    });
    fixture = TestBed.createComponent(IssueCreationStatusAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
