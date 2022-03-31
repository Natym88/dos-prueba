import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLaboratoriosComponent } from './page-laboratorios.component';

describe('PageLaboratoriosComponent', () => {
  let component: PageLaboratoriosComponent;
  let fixture: ComponentFixture<PageLaboratoriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLaboratoriosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLaboratoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
