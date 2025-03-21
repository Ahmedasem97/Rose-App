import { Component, effect, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ReviewCardComponent } from "../../business/review-card/review-card.component";
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { reviewMockData } from '../../../../core/interfaces/review';
import { ReviewService } from '../../../services/review.service';
import { TranslationService } from '../../../../core/services/translation.service';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [ReviewCardComponent, CarouselModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent implements OnInit {
  reviewApi: WritableSignal<reviewMockData[]> = signal([])

  isRtl = false

    private _translationService = inject(TranslationService)
  
    constructor(){
      effect(()=> {
        if (this._translationService.isRtl()) {
          this.isRtl = true
        }else {
          this.isRtl = false
        }
      })
    }

  reviewSectionEN: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    rtl: false,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
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
    nav: true
  }
  reviewSectionAR: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    rtl: true,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
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
    nav: true
  }

  private _reviewService = inject(ReviewService)



  ngOnInit(): void {
    this.reviewApi.set(this._reviewService.getStaticData())
  }


}
