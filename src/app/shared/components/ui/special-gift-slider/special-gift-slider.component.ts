import { Component } from '@angular/core';
import { FlowbiteService } from '../../../../core/services/flowbite.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-special-gift-slider',
  standalone: true,
  imports: [],
  templateUrl: './special-gift-slider.component.html',
  styleUrl: './special-gift-slider.component.scss',
})
export class SpecialGiftSliderComponent {
  constructor(private flowbiteService: FlowbiteService) {}

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
