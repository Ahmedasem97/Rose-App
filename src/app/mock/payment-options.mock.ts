import {
  PaymentMethod,
  paymentMethodType,
} from '../core/interfaces/payments-options.inteface';

export const paymentMethodssMockData: PaymentMethod[] = [
  {
    name: 'cash',
    description: 'Cash on Delivery',
    icon: '/cash.png',
  },
  {
    name: 'credit_card',
    description: 'Pay With Credit Card',
    icon: '/visa.png',
  },
];
