import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdolescentesComponent } from './page-adolescentes.component';

describe('PageAdolescentesComponent', () => {
  let component: PageAdolescentesComponent;
  let fixture: ComponentFixture<PageAdolescentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAdolescentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdolescentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
