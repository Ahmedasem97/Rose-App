export type paymentMethodType = 'credit_card' | 'cash';

export interface PaymentMethod {
  name: paymentMethodType;
  description: string;
  icon: string;
}
