import { Observable } from 'rxjs';
import { ProductsRes } from '../interfaces/products';

export abstract class ProductsAbstract {
  abstract getAllProducts(cat: string): Observable<ProductsRes>;
  abstract getAllProductsByFilter(queryParams: string): Observable<ProductsRes>;
}
