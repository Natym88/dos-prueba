import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageViolenciaComponent } from './page-violencia.component';

describe('PageViolenciaComponent', () => {
  let component: PageViolenciaComponent;
  let fixture: ComponentFixture<PageViolenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageViolenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageViolenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
