import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoticiaPrestadorSurComponent } from './page-noticia-prestador-sur.component';

describe('PageNoticiaPrestadorSurComponent', () => {
  let component: PageNoticiaPrestadorSurComponent;
  let fixture: ComponentFixture<PageNoticiaPrestadorSurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNoticiaPrestadorSurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoticiaPrestadorSurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
