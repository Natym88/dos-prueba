import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoticiaConvenioComponent } from './page-noticia-convenio.component';

describe('PageNoticiaConvenioComponent', () => {
  let component: PageNoticiaConvenioComponent;
  let fixture: ComponentFixture<PageNoticiaConvenioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNoticiaConvenioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoticiaConvenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
