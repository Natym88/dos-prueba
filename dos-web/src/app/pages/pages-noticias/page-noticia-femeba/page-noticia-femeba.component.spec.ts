import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoticiaFemebaComponent } from './page-noticia-femeba.component';

describe('PageNoticiaFemebaComponent', () => {
  let component: PageNoticiaFemebaComponent;
  let fixture: ComponentFixture<PageNoticiaFemebaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNoticiaFemebaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoticiaFemebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
