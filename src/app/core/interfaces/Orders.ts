import { Product } from './products';

export interface ShippingAddress {
  street: string;
  phone: string;
  city: string;
  lat: string;
  long: string;
}

export interface Order {
  _id: string;
  user: string;
  orderItems: Product[];
  totalPrice: number;
  paymentType: string;
  isPaid: boolean;
  isDelivered: boolean;
  state: string;
  createdAt: string;
  orderNumber: string;
}

export interface UsersOrdersRes {
  message: string;
  metadata: {
    currentPage: number;
    totalPages: number;
    limit: number;
    totalItems: number;
  };
  orders: Order[];
}

export interface CashOrderRes {
  message: string;
  order: {
    user: string;
    totalPrice: number;
    paymentType: string;
    isPaid: boolean;
    isDelivered: boolean;
    state: string;
    _id: string;
    createdAt: string;
    orderNumber: string;
  };
}

export interface CheckoutSessionRes {
  message: string;
  session: {
    id: string;
    object: string;
    amount_subtotal: number;
    amount_total: number;
    cancel_url: string;
    client_reference_id: string;
    currency: string;
    customer_email: string;
    expires_at: number;
    metadata: ShippingAddress;
    mode: string;
    payment_status: string;
    status: string;
    success_url: string;
    ui_mode: string;
    url: string;
  };
}

export interface CreateOrderReq {
  shippingAddress: ShippingAddress;
}
