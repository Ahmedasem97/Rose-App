import { Observable } from 'rxjs';
import { ProductsRes } from '../interfaces/products';

export abstract class ProductsAbstract {
  abstract getAllProducts(cat: string): Observable<ProductsRes>;
  abstract getAllProductsByFilter(cat: string): Observable<ProductsRes>;
}
