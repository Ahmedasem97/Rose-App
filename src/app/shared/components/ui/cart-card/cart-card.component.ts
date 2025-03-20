import { Component, EventEmitter, inject, input, InputSignal, OnDestroy, Output } from '@angular/core';
import { CartItem, ProductQuantity } from '../../../../core/interfaces/cart.interface';
import { CartService } from '../../../services/cart.service';
import { Subject, takeUntil } from 'rxjs';
import { MainButtomComponent } from "../main-buttom/main-buttom.component";

@Component({
  selector: 'app-cart-card',
  standalone: true,
  imports: [],
  templateUrl: './cart-card.component.html',
  styleUrl: './cart-card.component.scss'
})
export class CartCardComponent implements OnDestroy {
  cartProduct: InputSignal<CartItem> = input.required()
  @Output() productUpdate = new EventEmitter<CartItem[]>();

  $destroy = new Subject()

  private readonly _cartService = inject(CartService)

  removeProduct(productId: string): void {
    this._cartService.removeSpecificCartItem(productId)
      .pipe(
        takeUntil(this.$destroy)
      )
      .subscribe({
        next: res => {
          this.productUpdate.emit(res.cart.cartItems);
          this._cartService.numberOfCart.set(res.numOfCartItems)
        }
      })
  }

  UpdateQuantity(productId: string, newQuantity: number): void {
    if (newQuantity > 0) {
      const quantityNumber: ProductQuantity = {
        "quantity": newQuantity
      }
      this._cartService.updateCartProductQuantity(productId, quantityNumber)
      .pipe(
        takeUntil(this.$destroy)
      )
      .subscribe({
        next: res => {
          this.productUpdate.emit(res.cart.cartItems);
        }
      })
    }
  }


  ngOnDestroy(): void {
    this.$destroy.next("destroy")
  }
}
