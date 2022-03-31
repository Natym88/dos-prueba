import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmaciaBuscarComponent } from './farmacia-buscar.component';

describe('FarmaciaBuscarComponent', () => {
  let component: FarmaciaBuscarComponent;
  let fixture: ComponentFixture<FarmaciaBuscarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmaciaBuscarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmaciaBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
