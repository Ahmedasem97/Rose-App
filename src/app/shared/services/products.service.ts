import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { productsEndPoint } from '../../core/api-end-point/products-end-point';
import { ProductsRes } from '../../core/interfaces/products';
import { ProductsAdapter } from '../../core/adapter/products.adapter';
import { ProductsAbstract } from '../../core/abstract/products.abstract';

@Injectable({
  providedIn: 'root',
})
export class ProductsService implements ProductsAbstract {
  constructor(
    private _HttpClient: HttpClient,
    private _ProductsAdapter: ProductsAdapter
  ) {}

  getAllProductsByFilter(): Observable<ProductsRes> {
    throw new Error('Method not implemented.');
  }

  getAllProducts(cat: string): Observable<ProductsRes> {
    return this._HttpClient
      .get(productsEndPoint.popularItemsProducts + cat)
      .pipe(map((res: any) => this._ProductsAdapter.AllProductsAdapt(res)));
  }
}
