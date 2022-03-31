import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoticiaEzeizaComponent } from './page-noticia-ezeiza.component';

describe('PageNoticiaEzeizaComponent', () => {
  let component: PageNoticiaEzeizaComponent;
  let fixture: ComponentFixture<PageNoticiaEzeizaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNoticiaEzeizaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoticiaEzeizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
