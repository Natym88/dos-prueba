import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoticiaSanatorioOesteComponent } from './page-noticia-sanatorio-oeste.component';

describe('PageNoticiaSanatorioOesteComponent', () => {
  let component: PageNoticiaSanatorioOesteComponent;
  let fixture: ComponentFixture<PageNoticiaSanatorioOesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNoticiaSanatorioOesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoticiaSanatorioOesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
