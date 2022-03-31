import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoticiasComponent } from './page-noticias.component';

describe('PageNoticiasComponent', () => {
  let component: PageNoticiasComponent;
  let fixture: ComponentFixture<PageNoticiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNoticiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
