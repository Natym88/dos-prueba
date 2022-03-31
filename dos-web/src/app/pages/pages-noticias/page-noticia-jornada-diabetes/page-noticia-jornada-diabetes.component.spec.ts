import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoticiaJornadaDiabetesComponent } from './page-noticia-jornada-diabetes.component';

describe('PageNoticiaJornadaDiabetesComponent', () => {
  let component: PageNoticiaJornadaDiabetesComponent;
  let fixture: ComponentFixture<PageNoticiaJornadaDiabetesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNoticiaJornadaDiabetesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoticiaJornadaDiabetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
