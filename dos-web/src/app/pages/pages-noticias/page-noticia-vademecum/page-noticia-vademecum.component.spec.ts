import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoticiaVademecumComponent } from './page-noticia-vademecum.component';

describe('PageNoticiaVademecumComponent', () => {
  let component: PageNoticiaVademecumComponent;
  let fixture: ComponentFixture<PageNoticiaVademecumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNoticiaVademecumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoticiaVademecumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
