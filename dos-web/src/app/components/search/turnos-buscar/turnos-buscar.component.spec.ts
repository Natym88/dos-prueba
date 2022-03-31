import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnosBuscarComponent } from './turnos-buscar.component';

describe('TurnosBuscarComponent', () => {
  let component: TurnosBuscarComponent;
  let fixture: ComponentFixture<TurnosBuscarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnosBuscarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnosBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
