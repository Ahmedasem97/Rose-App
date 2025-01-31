import { Component, input, InputSignal } from '@angular/core';
import { PopularProduct } from '../../../../core/interfaces/products';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
productApi: InputSignal<PopularProduct> = input.required()


}
