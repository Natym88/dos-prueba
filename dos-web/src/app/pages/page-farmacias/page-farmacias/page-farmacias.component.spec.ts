import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFarmaciasComponent } from './page-farmacias.component';

describe('PageFarmaciasComponent', () => {
  let component: PageFarmaciasComponent;
  let fixture: ComponentFixture<PageFarmaciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFarmaciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFarmaciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
