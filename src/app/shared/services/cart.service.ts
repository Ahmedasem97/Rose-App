import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { CartRes, ProductQuantity, UserCartData } from '../../core/interfaces/cart.interface';
import { map, Observable } from 'rxjs';
import { CartEndPoint } from '../../core/api-end-point/cart-end-point';
import { CartAdapter } from '../../core/adapter/cart-adapter';
import { CartAbstract } from '../../core/abstract/cart.abstract';

@Injectable({
  providedIn: 'root'
})
export class CartService implements CartAbstract {

  numberOfCart: WritableSignal<number> = signal(0)

  private readonly _HttpClient = inject(HttpClient)
  private readonly _cartAdapter = inject(CartAdapter)

  addProductToCart(data: UserCartData): Observable<CartRes> {
    return this._HttpClient.post(CartEndPoint.addProductToCart, data)
      .pipe(map((res: any) => this._cartAdapter.addProductToCartAdapt(res)))
  }

  getLoggedUserCart(): Observable<CartRes> {
    return this._HttpClient.get(CartEndPoint.GetLoggedUserCart)
      .pipe(map((res: any) => this._cartAdapter.getLoggedUserCartAdapt(res)))
  }

  removeSpecificCartItem(productId: string): Observable<CartRes> {
    return this._HttpClient.delete(CartEndPoint.RemoveSpecificCartItem + productId)
      .pipe(map((res: any) => this._cartAdapter.removeSpecificCartItemAdapt(res)))
  }

  updateCartProductQuantity(productId: string , body: ProductQuantity) { 
    return this._HttpClient.put(CartEndPoint.updateCartProductQuantity + productId , body)
    .pipe(map((res: any) => this._cartAdapter.updateCartProductQuantityAdapt(res)))
  }
}
