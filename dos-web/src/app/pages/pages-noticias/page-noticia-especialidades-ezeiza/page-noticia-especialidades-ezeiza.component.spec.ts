import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoticiaEspecialidadesEzeizaComponent } from './page-noticia-especialidades-ezeiza.component';

describe('PageNoticiaEspecialidadesEzeizaComponent', () => {
  let component: PageNoticiaEspecialidadesEzeizaComponent;
  let fixture: ComponentFixture<PageNoticiaEspecialidadesEzeizaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNoticiaEspecialidadesEzeizaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoticiaEspecialidadesEzeizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
