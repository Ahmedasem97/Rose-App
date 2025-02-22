import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-payment-option',
  standalone: true,
  imports: [],
  templateUrl: './payment-option.component.html',
  styleUrl: './payment-option.component.scss',
})
export class PaymentOptionComponent {
  optionIcon = input.required<string>();
  optionText = input.required<string>();
  handleOptionClick = output();

  onOptionClick() {
    this.handleOptionClick.emit();
  }
}
