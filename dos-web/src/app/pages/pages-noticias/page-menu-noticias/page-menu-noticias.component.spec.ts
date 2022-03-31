import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMenuNoticiasComponent } from './page-menu-noticias.component';

describe('PageMenuNoticiasComponent', () => {
  let component: PageMenuNoticiasComponent;
  let fixture: ComponentFixture<PageMenuNoticiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMenuNoticiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMenuNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
