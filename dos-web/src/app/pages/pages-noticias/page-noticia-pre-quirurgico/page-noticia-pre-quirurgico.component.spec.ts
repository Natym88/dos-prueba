import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoticiaPreQuirurgicoComponent } from './page-noticia-pre-quirurgico.component';

describe('PageNoticiaPreQuirurgicoComponent', () => {
  let component: PageNoticiaPreQuirurgicoComponent;
  let fixture: ComponentFixture<PageNoticiaPreQuirurgicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNoticiaPreQuirurgicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoticiaPreQuirurgicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
