import { TestBed } from '@angular/core/testing';

import { SpecificPrService } from './specific-pr.service';

describe('SpecificPrService', () => {
  let service: SpecificPrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecificPrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
