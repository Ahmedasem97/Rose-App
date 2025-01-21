import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SpecialGiftCardComponent } from '../../../shared/components/ui/special-gift-card/special-gift-card.component';
import { specialGiftsMockData } from '../../../mock/special-gifts.mock';
import { SpecialGiftBannerComponent } from '../../../shared/components/ui/special-gift-banner/special-gift-banner.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [SpecialGiftCardComponent, SpecialGiftBannerComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent implements OnInit {
  specialGiftsSliderList = specialGiftsMockData.slice(0, 3);
  specialGiftsBannerList = specialGiftsMockData.slice(3, 4);
  specialGiftsCardsList = specialGiftsMockData.slice(4);

  ngOnInit(): void {}
}
