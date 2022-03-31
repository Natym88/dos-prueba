import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoticiaTurnosOnlineComponent } from './page-noticia-turnos-online.component';

describe('PageNoticiaTurnosOnlineComponent', () => {
  let component: PageNoticiaTurnosOnlineComponent;
  let fixture: ComponentFixture<PageNoticiaTurnosOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNoticiaTurnosOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoticiaTurnosOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
