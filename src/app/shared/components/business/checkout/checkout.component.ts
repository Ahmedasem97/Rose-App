import { Component, OnInit } from '@angular/core';
import { PaymentSectionTitleComponent } from '../../ui/payment-section-title/payment-section-title.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CustomInputComponent } from '../custom-input/custom-input.component';
import { PHONE_PATTERN } from '../../../../core/environment/environment';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    PaymentSectionTitleComponent,
    CustomInputComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent implements OnInit {
  shippingForm!: FormGroup;

  initShippingForm() {
    this.shippingForm = new FormGroup({
      street: new FormControl('', [Validators.required]),

      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(PHONE_PATTERN),
      ]),
      city: new FormControl('', [Validators.required]),
      lat: new FormControl('', [Validators.required]),
      long: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.initShippingForm();
  }
}
