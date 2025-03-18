import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { OrderAdapter } from '../../core/adapter/order-adapter';
import {
  CashOrderRes,
  CheckoutSessionRes,
  ShippingAddress,
  UsersOrdersRes,
} from '../../core/interfaces/Orders';
import { OrderEndPoint } from '../../core/api-end-point/order-end-point';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';
import { OrdersAbstract } from '../../core/abstract/order.abstract';
import { baseUrl } from '../../core/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService implements OrdersAbstract {
  private readonly _HttpClient = inject(HttpClient);
  private readonly _OrderAdapter = inject(OrderAdapter);

  getUserOrders(): Observable<UsersOrdersRes> {
    return this._HttpClient
      .get(`${baseUrl}${OrderEndPoint.orders}`)
      .pipe(map((res: any) => this._OrderAdapter.UserOrdersAdapter(res)));
  }

  createCashOrder(data: ShippingAddress): Observable<CashOrderRes> {
    return this._HttpClient
      .post(`${baseUrl}${OrderEndPoint.orders}`, data)
      .pipe(map((res: any) => this._OrderAdapter.CashOrderAdapter(res)));
  }

  checkoutSession(
    url: string,
    data: ShippingAddress
  ): Observable<CheckoutSessionRes> {
    return this._HttpClient
      .post(`${baseUrl}${OrderEndPoint.checkoutSession}?url=${url}`, data)
      .pipe(map((res: any) => this._OrderAdapter.CheckoutSessionAdapter(res)));
  }
}
