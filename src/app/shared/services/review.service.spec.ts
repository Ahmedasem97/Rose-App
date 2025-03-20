import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ReviewService } from './review.service';
import { reviewMD } from '../../mock/review.mock';

describe('ReviewService', () => {
  let service: ReviewService,
  httpTest:HttpTestingController 

  beforeEach(() => {
    TestBed.configureTestingModule({
          providers: [ReviewService],
          imports: [HttpClientTestingModule]
        });
    service = TestBed.inject(ReviewService);
    httpTest = TestBed.inject(HttpTestingController);
  });

  it('should review be created', () => {
    expect(service).toBeTruthy();
    expect(service.getStaticData).toBe(reviewMD)
  });
});
