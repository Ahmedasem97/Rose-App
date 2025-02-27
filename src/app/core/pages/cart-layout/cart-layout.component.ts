import { Component, signal, WritableSignal } from '@angular/core';
import { CartComponent } from "../../../shared/components/ui/cart/cart.component";
import { CartSummaryComponent } from "../../../shared/components/ui/cart-summary/cart-summary.component";

@Component({
  selector: 'app-cart-layout',
  standalone: true,
  imports: [CartComponent, CartSummaryComponent],
  templateUrl: './cart-layout.component.html',
  styleUrl: './cart-layout.component.scss'
})
export class CartLayoutComponent {
  getTotalPrice: WritableSignal<number> = signal(0)
}
