import { Component, effect, EventEmitter, inject, OnDestroy, OnInit, Output, signal, WritableSignal } from '@angular/core';
import { CartCardComponent } from "../cart-card/cart-card.component";
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../../core/interfaces/cart.interface';
import { MainButtomComponent } from "../main-buttom/main-buttom.component";
import { RouterLink } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartCardComponent, MainButtomComponent, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit, OnDestroy {
  $destroy = new Subject()

  @Output() totalPriceEmitt = new EventEmitter();

  cartProduct: WritableSignal<CartItem[]> = signal([])

  private readonly _cartService = inject(CartService)

  constructor() {
    effect(() => {
      this.totalPriceEmitt.emit(this.getCartSummaryTotal())
    })
  }

  ngOnInit(): void {
    this._cartService.getLoggedUserCart()
      .pipe(
        takeUntil(this.$destroy)
      )
      .subscribe({
        next: res => {
          this.cartProduct.set(res.cart.cartItems)
        }
      })
  }

  getCartSummaryTotal(): number {
    return this.cartProduct().reduce((total, item) => total + (item.product.priceAfterDiscount * item.quantity), 0);
  }

  onProductUpdate(productId: CartItem[]) {
    this.cartProduct.set(productId)
  }

  ngOnDestroy(): void {
    this.$destroy.next("destroy")
  }

}
