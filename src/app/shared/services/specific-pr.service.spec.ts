import { HttpClientTestingModule, HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SpecificPrService } from './specific-pr.service';
import { HttpClient } from '@angular/common/http';
import { popularProducts } from '../../core/mock data/product.mock.data';
import { specificpro } from '../../core/mock data/specificproduct';

describe('SpecificPrService', () => {
  let service: SpecificPrService,
  httpTest:HttpTestingController 

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpecificPrService ],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SpecificPrService);
    httpTest = TestBed.inject(HttpTestingController);
  });

  it('should be return specific product', () => {
    service.getspecificpro('673e1cd711599201718280fb').subscribe(
      data=>{
        expect(data).toBeTruthy()
        expect(data).toEqual(specificpro)
      });
      const req = httpTest.expectOne('https://flower.elevateegy.com/api/v1/products/673e1cd711599201718280fb')
      expect(req.request.method).toBe('GET')
      req.flush(specificpro)
  });
})
