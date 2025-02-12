import { Injectable } from '@angular/core';
import { productsEndPoint } from '../../core/api-end-point/products-end-point';
import { ProductsAbstract } from '../../core/abstract/products.abstract';
import { Observable } from 'rxjs';
import { ProductsRes } from '../../core/interfaces/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsFilterService {
  // variables
  private readonly productsAPI = productsEndPoint.allProducts;

  //inject Services
  filterBy() {}
}
