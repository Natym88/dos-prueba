import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCartillaComponent } from './page-cartilla.component';

describe('PageCartillaComponent', () => {
  let component: PageCartillaComponent;
  let fixture: ComponentFixture<PageCartillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCartillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCartillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
