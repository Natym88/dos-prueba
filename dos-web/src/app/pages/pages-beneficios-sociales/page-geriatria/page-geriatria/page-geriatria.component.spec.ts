import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGeriatriaComponent } from './page-geriatria.component';

describe('PageGeriatriaComponent', () => {
  let component: PageGeriatriaComponent;
  let fixture: ComponentFixture<PageGeriatriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGeriatriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGeriatriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
