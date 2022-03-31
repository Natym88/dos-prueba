import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSolicitudesComponent } from './page-solicitudes.component';

describe('PageSolicitudesComponent', () => {
  let component: PageSolicitudesComponent;
  let fixture: ComponentFixture<PageSolicitudesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSolicitudesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
