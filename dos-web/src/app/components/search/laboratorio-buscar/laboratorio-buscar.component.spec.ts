import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratorioBuscarComponent } from './laboratorio-buscar.component';

describe('LaboratorioBuscarComponent', () => {
  let component: LaboratorioBuscarComponent;
  let fixture: ComponentFixture<LaboratorioBuscarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratorioBuscarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratorioBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
