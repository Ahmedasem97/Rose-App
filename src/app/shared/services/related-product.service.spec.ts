import { TestBed } from '@angular/core/testing';

import { RelatedProductService } from './related-product.service';

describe('RelatedProductService', () => {
  let service: RelatedProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelatedProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
