import { Observable } from 'rxjs';
import { CartRes, ProductQuantity, UserCartData } from '../interfaces/cart.interface';

export abstract class CartAbstract {
  abstract  addProductToCart(data: UserCartData): Observable<CartRes>;
  abstract  getLoggedUserCart(): Observable<CartRes>;
  abstract  removeSpecificCartItem(productId: string): Observable<CartRes>;
  abstract  updateCartProductQuantity(productId: string , body: ProductQuantity): Observable<CartRes>;
}
