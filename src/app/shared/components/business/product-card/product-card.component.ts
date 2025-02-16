import { Component, input, InputSignal } from '@angular/core';
import { PopularProduct } from '../../../../core/interfaces/products';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
productApi: InputSignal<PopularProduct> = input.required()


}
