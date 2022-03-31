import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoticiaTurnosOdontologiaComponent } from './page-noticia-turnos-odontologia.component';

describe('PageNoticiaTurnosOdontologiaComponent', () => {
  let component: PageNoticiaTurnosOdontologiaComponent;
  let fixture: ComponentFixture<PageNoticiaTurnosOdontologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNoticiaTurnosOdontologiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoticiaTurnosOdontologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
