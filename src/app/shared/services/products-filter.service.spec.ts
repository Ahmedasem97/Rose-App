import { TestBed } from '@angular/core/testing';

import { ProductsFilterService } from './products-filter.service';

xdescribe('ProductsFilterService', () => {
  let service: ProductsFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
