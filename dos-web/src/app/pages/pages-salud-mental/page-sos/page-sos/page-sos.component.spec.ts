import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSosComponent } from './page-sos.component';

describe('PageSosComponent', () => {
  let component: PageSosComponent;
  let fixture: ComponentFixture<PageSosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
