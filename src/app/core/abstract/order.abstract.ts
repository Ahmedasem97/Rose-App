import { Observable } from 'rxjs';
import {
  CashOrderRes,
  CheckoutSessionRes,
  UsersOrdersRes,
} from '../interfaces/Orders';

export abstract class OrdersAbstract {
  abstract getUserOrders(): Observable<UsersOrdersRes>;
  abstract createCashOrder(): Observable<CashOrderRes>;
  abstract checkoutSession(url: string): Observable<CheckoutSessionRes>;
}
