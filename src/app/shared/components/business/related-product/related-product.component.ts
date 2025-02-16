import { Component, Input } from '@angular/core';
import { AllProductsRes, Product } from '../../../../core/interfaces/products';
import { Relatedproduct } from '../../../../core/interfaces/relatedproduct';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-related-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './related-product.component.html',
  styleUrl: './related-product.component.scss'
})
export class RelatedProductComponent {

  @Input() relatedProduct:Relatedproduct[]=[]

}
