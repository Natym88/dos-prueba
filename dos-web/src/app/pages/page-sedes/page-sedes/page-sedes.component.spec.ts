import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSedesComponent } from './page-sedes.component';

describe('PageSedesComponent', () => {
  let component: PageSedesComponent;
  let fixture: ComponentFixture<PageSedesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSedesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
