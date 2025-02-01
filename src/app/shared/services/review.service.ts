import { Injectable } from '@angular/core';
import { reviewMD } from '../../mock/review.mock';
import { reviewMockData } from '../../core/interfaces/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  constructor() { }
  getStaticData ():reviewMockData[] {
    return reviewMD 
  }
}