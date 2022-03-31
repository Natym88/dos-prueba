import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoticiaPsicologoComponent } from './page-noticia-psicologo.component';

describe('PageNoticiaPsicologoComponent', () => {
  let component: PageNoticiaPsicologoComponent;
  let fixture: ComponentFixture<PageNoticiaPsicologoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNoticiaPsicologoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoticiaPsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
