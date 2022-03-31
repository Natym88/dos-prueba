import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoticiaOdontologiaSurComponent } from './page-noticia-odontologia-sur.component';

describe('PageNoticiaOdontologiaSurComponent', () => {
  let component: PageNoticiaOdontologiaSurComponent;
  let fixture: ComponentFixture<PageNoticiaOdontologiaSurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNoticiaOdontologiaSurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoticiaOdontologiaSurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
