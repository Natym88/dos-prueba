import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoticiaCanalesConsultaComponent } from './page-noticia-canales-consulta.component';

describe('PageNoticiaCanalesConsultaComponent', () => {
  let component: PageNoticiaCanalesConsultaComponent;
  let fixture: ComponentFixture<PageNoticiaCanalesConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNoticiaCanalesConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoticiaCanalesConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
