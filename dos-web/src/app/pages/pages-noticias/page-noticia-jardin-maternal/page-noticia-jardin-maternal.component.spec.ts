import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoticiaJardinMaternalComponent } from './page-noticia-jardin-maternal.component';

describe('PageNoticiaJardinMaternalComponent', () => {
  let component: PageNoticiaJardinMaternalComponent;
  let fixture: ComponentFixture<PageNoticiaJardinMaternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNoticiaJardinMaternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoticiaJardinMaternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
