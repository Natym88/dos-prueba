import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoticiaCovidComponent } from './page-noticia-covid.component';

describe('PageNoticiaCovidComponent', () => {
  let component: PageNoticiaCovidComponent;
  let fixture: ComponentFixture<PageNoticiaCovidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNoticiaCovidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoticiaCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
