import { TestBed } from '@angular/core/testing';

import { CustomFormValidatorsService } from './custom-form-validators.service';

xdescribe('CustomFormValidatorsService', () => {
  let service: CustomFormValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomFormValidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
