import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesManagerComponent } from './issues-manager.component';

describe('IssuesManagerComponent', () => {
  let component: IssuesManagerComponent;
  let fixture: ComponentFixture<IssuesManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IssuesManagerComponent]
    });
    fixture = TestBed.createComponent(IssuesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
