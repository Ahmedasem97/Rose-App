import { Component } from '@angular/core';
import { specialGiftsMockData } from '../../../../mock/special-gifts.mock';
import { SpecialGiftCardComponent } from '../../ui/special-gift-card/special-gift-card.component';
import { SpecialGiftBannerComponent } from '../../ui/special-gift-banner/special-gift-banner.component';
import { SpecialGiftSliderComponent } from '../special-gift-slider/special-gift-slider.component';

@Component({
  selector: 'app-special-gifts-section',
  standalone: true,
  imports: [
    SpecialGiftCardComponent,
    SpecialGiftBannerComponent,
    SpecialGiftSliderComponent,
  ],
  templateUrl: './special-gifts-section.component.html',
  styleUrl: './special-gifts-section.component.scss',
})
export class SpecialGiftsSectionComponent {
  specialGiftsBannerList = specialGiftsMockData.slice(4, 5);
  specialGiftsCardsList = specialGiftsMockData.slice(5);
}
