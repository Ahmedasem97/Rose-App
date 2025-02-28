import { Component, input } from '@angular/core';

@Component({
  selector: 'app-payment-section-title',
  standalone: true,
  imports: [],
  templateUrl: './payment-section-title.component.html',
  styleUrl: './payment-section-title.component.scss',
})
export class PaymentSectionTitleComponent {
  title = input.required<string>();
}
