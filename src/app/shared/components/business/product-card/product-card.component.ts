import { Component, inject, input, InputSignal, OnDestroy } from '@angular/core';
import { PopularProduct } from '../../../../core/interfaces/products';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { UserCartData } from '../../../../core/interfaces/cart.interface';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnDestroy{
  productApi: InputSignal<PopularProduct> = input.required()
  $destroy = new Subject()

  private readonly _cartService = inject(CartService)

  addToCart(productId: string): void {
    const productData: UserCartData = {
      "product": productId,
      "quantity": 1
    }
    this._cartService.addProductToCart(productData)
    .pipe(
      takeUntil(this.$destroy)
    )
    .subscribe({
      next: res => {
        this._cartService.numberOfCart.set(res.numOfCartItems)
        
      },
      error: err => {
        console.log(err);
        
      }
    })
  }


  ngOnDestroy(): void {
    this.$destroy.next("destroy")
  }

}
