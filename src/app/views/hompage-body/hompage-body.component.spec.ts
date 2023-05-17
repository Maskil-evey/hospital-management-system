import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HompageBodyComponent } from './hompage-body.component';

describe('HompageBodyComponent', () => {
  let component: HompageBodyComponent;
  let fixture: ComponentFixture<HompageBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HompageBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HompageBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
