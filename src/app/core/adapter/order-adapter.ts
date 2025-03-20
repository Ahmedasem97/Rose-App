import { Injectable } from '@angular/core';
import {
  CashOrderRes,
  CheckoutSessionRes,
  UsersOrdersRes,
} from '../interfaces/Orders';

@Injectable({
  providedIn: 'root',
})
export class OrderAdapter {
  constructor() {}

  UserOrdersAdapter(data: UsersOrdersRes): UsersOrdersRes {
    return {
      message: data.message,
      metadata: {
        currentPage: data.metadata.currentPage,
        totalPages: data.metadata.totalPages,
        limit: data.metadata.limit,
        totalItems: data.metadata.totalItems,
      },
      orders: data.orders.map((order) => ({
        _id: order._id,
        user: order.user,
        orderItems: order.orderItems,
        totalPrice: order.totalPrice,
        paymentType: order.paymentType,
        isPaid: order.isPaid,
        isDelivered: order.isDelivered,
        state: order.state,
        createdAt: order.createdAt,
        orderNumber: order.orderNumber,
      })),
    };
  }

  CashOrderAdapter(data: CashOrderRes): CashOrderRes {
    return {
      message: data.message,
      order: data.order,
    };
  }

  CheckoutSessionAdapter(data: CheckoutSessionRes): CheckoutSessionRes {
    return {
      message: data.message,
      session: data.session,
    };
  }
}
