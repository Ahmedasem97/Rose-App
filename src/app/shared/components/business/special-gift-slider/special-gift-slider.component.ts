import { Component } from '@angular/core';
import { FlowbiteService } from '../../../../core/services/flowbite.service';
import { initFlowbite } from 'flowbite';
import { specialGiftsMockData } from '../../../../mock/special-gifts.mock';

@Component({
  selector: 'app-special-gift-slider',
  standalone: true,
  imports: [],
  templateUrl: './special-gift-slider.component.html',
  styleUrl: './special-gift-slider.component.scss',
})
export class SpecialGiftSliderComponent {
  constructor(private flowbiteService: FlowbiteService) {}
  specialGiftsSliderList = specialGiftsMockData.slice(0, 3);
  sliderIndicators = Array.from(
    { length: this.specialGiftsSliderList.length },
    (_, i) => i
  );
  loadFlowbite() {
    this.flowbiteService.loadFlowbite((flowbite) => {
      console.log('Flowbite loaded', flowbite);
    });
  }

  ngOnInit(): void {
    initFlowbite();
    this.loadFlowbite();
  }
}
