import { Component } from '@angular/core';
import { FlowbiteService } from '../../../../core/services/flowbite.service';
import { initFlowbite } from 'flowbite';
import { specialGiftsMockData } from '../../../../mock/special-gifts.mock';
import { PrimaryBtnComponent } from '../primary-btn/primary-btn.component';

@Component({
  selector: 'app-special-gift-slider',
  standalone: true,
  imports: [PrimaryBtnComponent],
  templateUrl: './special-gift-slider.component.html',
  styleUrl: './special-gift-slider.component.scss',
})
export class SpecialGiftSliderComponent {
  specialGiftsSliderList = specialGiftsMockData.slice(0, 3);
  constructor(private flowbiteService: FlowbiteService) {}
  sliderIndicators = Array.from(
    { length: this.specialGiftsSliderList.length },
    (_, i) => i
  );

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
      console.log('Flowbite loaded', flowbite);
    });
  }
}
