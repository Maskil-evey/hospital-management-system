import { TestBed } from '@angular/core/testing';

import { SideEffectServiceService } from './side-effect-service.service';

describe('SideEffectServiceService', () => {
  let service: SideEffectServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideEffectServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
