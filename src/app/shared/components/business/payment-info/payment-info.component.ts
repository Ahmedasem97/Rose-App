import { Component } from '@angular/core';
import { paymentMethodssMockData } from '../../../../mock/payment-options.mock';
import { PaymentOptionComponent } from '../../ui/payment-option/payment-option.component';
import { FormsModule } from '@angular/forms';
import { paymentMethodType } from '../../../../core/interfaces/payments-options.inteface';

@Component({
  selector: 'app-payment-info',
  standalone: true,
  imports: [PaymentOptionComponent, FormsModule],
  templateUrl: './payment-info.component.html',
  styleUrl: './payment-info.component.scss',
})
export class PaymentInfoComponent {
  paymentMethodsList = paymentMethodssMockData;
  selectedPaymentMethod: paymentMethodType = 'cash';
  onOptionChange(event: paymentMethodType) {
    this.selectedPaymentMethod = event;
    console.log('Current Method ', this.selectedPaymentMethod);
  }
}
