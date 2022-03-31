import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoticiaDiabetesComponent } from './page-noticia-diabetes.component';

describe('PageNoticiaDiabetesComponent', () => {
  let component: PageNoticiaDiabetesComponent;
  let fixture: ComponentFixture<PageNoticiaDiabetesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNoticiaDiabetesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoticiaDiabetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
