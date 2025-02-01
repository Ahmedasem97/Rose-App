import { Component, input, InputSignal } from '@angular/core';
import { reviewMockData } from '../../../../core/interfaces/review';

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.scss'
})
export class ReviewCardComponent {
  reviewApi: InputSignal<reviewMockData> = input.required()

}
