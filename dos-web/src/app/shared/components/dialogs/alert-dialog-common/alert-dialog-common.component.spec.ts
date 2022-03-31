import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDialogCommonComponent } from './alert-dialog-common.component';

describe('AlertDialogCommonComponent', () => {
  let component: AlertDialogCommonComponent;
  let fixture: ComponentFixture<AlertDialogCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertDialogCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDialogCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
