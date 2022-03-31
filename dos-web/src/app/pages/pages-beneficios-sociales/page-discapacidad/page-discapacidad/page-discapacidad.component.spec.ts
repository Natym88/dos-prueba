import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDiscapacidadComponent } from './page-discapacidad.component';

describe('PageDiscapacidadComponent', () => {
  let component: PageDiscapacidadComponent;
  let fixture: ComponentFixture<PageDiscapacidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDiscapacidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDiscapacidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
