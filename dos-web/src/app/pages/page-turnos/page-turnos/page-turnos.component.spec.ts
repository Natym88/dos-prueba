import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTurnosComponent } from './page-turnos.component';

describe('PageTurnosComponent', () => {
  let component: PageTurnosComponent;
  let fixture: ComponentFixture<PageTurnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTurnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTurnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
