import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoticiaPsiquiatraComponent } from './page-noticia-psiquiatra.component';

describe('PageNoticiaPsiquiatraComponent', () => {
  let component: PageNoticiaPsiquiatraComponent;
  let fixture: ComponentFixture<PageNoticiaPsiquiatraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNoticiaPsiquiatraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoticiaPsiquiatraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
