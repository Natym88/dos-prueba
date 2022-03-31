import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreaDialogComponent } from './text-area-dialog.component';

describe('TextAreaDialogComponent', () => {
  let component: TextAreaDialogComponent;
  let fixture: ComponentFixture<TextAreaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAreaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAreaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
