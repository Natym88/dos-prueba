import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartillaMedicaBuscarComponent } from './cartilla-medica-buscar.component';

describe('CartillaMedicaBuscarComponent', () => {
  let component: CartillaMedicaBuscarComponent;
  let fixture: ComponentFixture<CartillaMedicaBuscarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartillaMedicaBuscarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartillaMedicaBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
