import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoticiaSepelioComponent } from './page-noticia-sepelio.component';

describe('PageNoticiaSepelioComponent', () => {
  let component: PageNoticiaSepelioComponent;
  let fixture: ComponentFixture<PageNoticiaSepelioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNoticiaSepelioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoticiaSepelioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
