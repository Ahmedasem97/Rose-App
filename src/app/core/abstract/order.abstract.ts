import { Observable } from 'rxjs';
import {
  CashOrderRes,
  CheckoutSessionRes,
  ShippingAddress,
  UsersOrdersRes,
} from '../interfaces/Orders';

export abstract class OrdersAbstract {
  abstract getUserOrders(): Observable<UsersOrdersRes>;
  abstract createCashOrder(data: ShippingAddress): Observable<CashOrderRes>;
  abstract checkoutSession(
    url: string,
    data: ShippingAddress
  ): Observable<CheckoutSessionRes>;
}
