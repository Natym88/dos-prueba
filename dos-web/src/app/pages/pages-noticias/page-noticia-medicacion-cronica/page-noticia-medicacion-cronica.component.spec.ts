import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoticiaMedicacionCronicaComponent } from './page-noticia-medicacion-cronica.component';

describe('PageNoticiaMedicacionCronicaComponent', () => {
  let component: PageNoticiaMedicacionCronicaComponent;
  let fixture: ComponentFixture<PageNoticiaMedicacionCronicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNoticiaMedicacionCronicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoticiaMedicacionCronicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
