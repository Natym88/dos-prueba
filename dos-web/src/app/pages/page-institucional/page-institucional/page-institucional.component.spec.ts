import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInstitucionalComponent } from './page-institucional.component';

describe('PageInstitucionalComponent', () => {
  let component: PageInstitucionalComponent;
  let fixture: ComponentFixture<PageInstitucionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageInstitucionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageInstitucionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
