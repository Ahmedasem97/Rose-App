import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { RelatedProductService } from './related-product.service';
import { specificpro } from '../../core/mock data/specificproduct';
import { mockRelatedCaetogry } from '../../core/mock data/relatedcateogry';

describe('RelatedProductService', () => {
  let service: RelatedProductService,
  httpTest:HttpTestingController 
  beforeEach(() => {
    TestBed.configureTestingModule({
       providers: [RelatedProductService],
       imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(RelatedProductService);
    httpTest = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    service.getsrelatedProduct('673c46fd1159920171827c85').subscribe({
      next: (data) => {
        expect(service).toBeTruthy();
        expect(data).toEqual(mockRelatedCaetogry)
      }
    })
    const req = httpTest.expectOne('https://flower.elevateegy.com/api/v1/products?category=673c46fd1159920171827c85')
          expect(req.request.method).toBe('GET')
          req.flush(mockRelatedCaetogry)
  });
});
