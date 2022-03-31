import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSaludMentalComponent } from './page-salud-mental.component';

describe('PageSaludMentalComponent', () => {
  let component: PageSaludMentalComponent;
  let fixture: ComponentFixture<PageSaludMentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSaludMentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSaludMentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
