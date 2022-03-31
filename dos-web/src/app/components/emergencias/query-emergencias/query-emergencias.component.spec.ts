import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryEmergenciasComponent } from './query-emergencias.component';

describe('QueryEmergenciasComponent', () => {
  let component: QueryEmergenciasComponent;
  let fixture: ComponentFixture<QueryEmergenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryEmergenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryEmergenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
