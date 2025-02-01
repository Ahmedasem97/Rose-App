import { Component } from '@angular/core';
import { FlowbiteService } from '../../../../core/services/flowbite.service';
import { initFlowbite } from 'flowbite';
import { specialGiftsMockData } from '../../../../mock/special-gifts.mock';
import { PrimaryBtnComponent } from '../primary-btn/primary-btn.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { SpecialGifts } from '../../../../core/interfaces/special-gifts.interface';

@Component({
  selector: 'app-special-gift-slider',
  standalone: true,
  imports: [PrimaryBtnComponent, CarouselModule],
  templateUrl: './special-gift-slider.component.html',
  styleUrl: './special-gift-slider.component.scss',
})
export class SpecialGiftSliderComponent {
  specialGiftsSliderList: SpecialGifts[] = [];
  sliderIndicators: number[] = [];
  ngOnInit(): void {
    this.specialGiftsSliderList = specialGiftsMockData.slice(0, 3);
    this.sliderIndicators = Array.from(
      { length: this.specialGiftsSliderList.length },
      (_, i) => i
    );
  }
}
