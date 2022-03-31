import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCanalesConsultaComponent } from './page-canales-consulta.component';

describe('PageCanalesConsultaComponent', () => {
  let component: PageCanalesConsultaComponent;
  let fixture: ComponentFixture<PageCanalesConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCanalesConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCanalesConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
