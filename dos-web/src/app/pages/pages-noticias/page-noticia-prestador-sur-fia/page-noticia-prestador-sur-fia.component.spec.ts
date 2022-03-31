import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoticiaPrestadorSurFiaComponent } from './page-noticia-prestador-sur-fia.component';

describe('PageNoticiaPrestadorSurFiaComponent', () => {
  let component: PageNoticiaPrestadorSurFiaComponent;
  let fixture: ComponentFixture<PageNoticiaPrestadorSurFiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNoticiaPrestadorSurFiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoticiaPrestadorSurFiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
