import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SedesBuscarComponent } from './sedes-buscar.component';

describe('SedesBuscarComponent', () => {
  let component: SedesBuscarComponent;
  let fixture: ComponentFixture<SedesBuscarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SedesBuscarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SedesBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
