import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAfiliacionesComponent } from './page-afiliaciones.component';

describe('PageAfiliacionesComponent', () => {
  let component: PageAfiliacionesComponent;
  let fixture: ComponentFixture<PageAfiliacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAfiliacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAfiliacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
