import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTramitesPadreComponent } from './page-tramites-padre.component';

describe('PageTramitesPadreComponent', () => {
  let component: PageTramitesPadreComponent;
  let fixture: ComponentFixture<PageTramitesPadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTramitesPadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTramitesPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
