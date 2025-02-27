import { Component, input, InputSignal } from '@angular/core';
import { MainButtomComponent } from "../main-buttom/main-buttom.component";

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [MainButtomComponent],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.scss'
})
export class CartSummaryComponent {
  totalPrice: InputSignal<number> = input.required()

}
