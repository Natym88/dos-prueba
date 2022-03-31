import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageJardinComponent } from './page-jardin.component';

describe('PageJardinComponent', () => {
  let component: PageJardinComponent;
  let fixture: ComponentFixture<PageJardinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageJardinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageJardinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
