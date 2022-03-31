import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoticiaCentralabComponent } from './page-noticia-centralab.component';

describe('PageNoticiaCentralabComponent', () => {
  let component: PageNoticiaCentralabComponent;
  let fixture: ComponentFixture<PageNoticiaCentralabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNoticiaCentralabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoticiaCentralabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
