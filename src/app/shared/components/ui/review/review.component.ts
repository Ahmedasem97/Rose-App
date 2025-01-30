import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ReviewCardComponent } from "../../business/review-card/review-card.component";
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ReviewMockDataService } from '../../../../core/mock data/review-mock-data.service';
import { reviewMockData } from '../../../../core/interfaces/review';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [ReviewCardComponent, CarouselModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent implements OnInit{
  reviewApi:WritableSignal<reviewMockData[]> = signal([])


  private ReviewMockDataService = inject(ReviewMockDataService)


  
  ngOnInit(): void {
      this.reviewApi.set(this.ReviewMockDataService.reviewMD) 
  }



  reviewSection: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1024: {
        items: 3
      },
      1280: {
        items: 4
      },
      
    },
    nav: false
  }




}
