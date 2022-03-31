import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoticiaAtencionOdontologicaComponent } from './page-noticia-atencion-odontologica.component';

describe('PageNoticiaAtencionOdontologicaComponent', () => {
  let component: PageNoticiaAtencionOdontologicaComponent;
  let fixture: ComponentFixture<PageNoticiaAtencionOdontologicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNoticiaAtencionOdontologicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoticiaAtencionOdontologicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
