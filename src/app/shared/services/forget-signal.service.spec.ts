import { TestBed } from '@angular/core/testing';

import { ForgetSignalService } from './forget-signal.service';

describe('ForgetSignalService', () => {
  let service: ForgetSignalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForgetSignalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
