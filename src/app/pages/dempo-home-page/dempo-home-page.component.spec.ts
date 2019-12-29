import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DempoHomePageComponent } from './dempo-home-page.component';

describe('DempoHomePageComponent', () => {
  let component: DempoHomePageComponent;
  let fixture: ComponentFixture<DempoHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DempoHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DempoHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
