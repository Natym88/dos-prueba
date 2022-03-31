import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoticiaDiaVihComponent } from './page-noticia-dia-vih.component';

describe('PageNoticiaDiaVihComponent', () => {
  let component: PageNoticiaDiaVihComponent;
  let fixture: ComponentFixture<PageNoticiaDiaVihComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNoticiaDiaVihComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoticiaDiaVihComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
