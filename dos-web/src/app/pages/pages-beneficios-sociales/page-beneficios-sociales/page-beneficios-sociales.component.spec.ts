import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBeneficiosSocialesComponent } from './page-beneficios-sociales.component';

describe('PageBeneficiosSocialesComponent', () => {
  let component: PageBeneficiosSocialesComponent;
  let fixture: ComponentFixture<PageBeneficiosSocialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBeneficiosSocialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBeneficiosSocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
