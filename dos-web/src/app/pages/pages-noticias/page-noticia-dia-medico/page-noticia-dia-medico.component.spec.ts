import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoticiaDiaMedicoComponent } from './page-noticia-dia-medico.component';

describe('PageNoticiaDiaMedicoComponent', () => {
  let component: PageNoticiaDiaMedicoComponent;
  let fixture: ComponentFixture<PageNoticiaDiaMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNoticiaDiaMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoticiaDiaMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
