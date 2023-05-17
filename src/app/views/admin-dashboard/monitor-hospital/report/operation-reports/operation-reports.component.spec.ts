import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationReportsComponent } from './operation-reports.component';

describe('OperationReportsComponent', () => {
  let component: OperationReportsComponent;
  let fixture: ComponentFixture<OperationReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
