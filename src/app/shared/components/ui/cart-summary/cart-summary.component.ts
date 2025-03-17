import { Component, computed, effect, input, InputSignal, signal, Signal, WritableSignal } from '@angular/core';
import { MainButtomComponent } from "../main-buttom/main-buttom.component";
import { CartSummary } from '../../../../core/interfaces/cart.interface';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [MainButtomComponent],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.scss'
})
export class CartSummaryComponent {
  totalPrice: InputSignal<number> = input.required()

  constructor() {
    effect(() => {
      this.cartSummary[0].price = this.totalPrice()
    })
  }

  cartSummary: CartSummary[] = [
    {
      title: "Sub Total:",
      price: 0
    },
    {
      title: "Discount:",
      price: "$" + 5.00
    },
    {
      title: "Shipping:",
      price: "Free"
    },
    {
      title: "Taxes:",
      price: "$" + 25.00
    },
  ]
}
