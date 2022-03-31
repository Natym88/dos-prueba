import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCeliaquiaComponent } from './page-celiaquia.component';

describe('PageCeliaquiaComponent', () => {
  let component: PageCeliaquiaComponent;
  let fixture: ComponentFixture<PageCeliaquiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCeliaquiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCeliaquiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
