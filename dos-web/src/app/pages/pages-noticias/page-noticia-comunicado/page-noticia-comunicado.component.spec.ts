import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoticiaComunicadoComponent } from './page-noticia-comunicado.component';

describe('PageNoticiaComunicadoComponent', () => {
  let component: PageNoticiaComunicadoComponent;
  let fixture: ComponentFixture<PageNoticiaComunicadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNoticiaComunicadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoticiaComunicadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
