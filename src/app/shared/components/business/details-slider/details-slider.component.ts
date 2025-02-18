import { Component, Input,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Product } from '../../../../core/interfaces/products';

@Component({
  selector: 'app-details-slider',
  standalone: true,
  imports: [],
  templateUrl: './details-slider.component.html',
  styleUrl: './details-slider.component.scss',
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
})
export class DetailsSliderComponent {

  @Input() imgData:Product={}as Product
}
