import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoticiaJornadaDiabetesDosComponent } from './page-noticia-jornada-diabetes-dos.component';

describe('PageNoticiaJornadaDiabetesDosComponent', () => {
  let component: PageNoticiaJornadaDiabetesDosComponent;
  let fixture: ComponentFixture<PageNoticiaJornadaDiabetesDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNoticiaJornadaDiabetesDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoticiaJornadaDiabetesDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
