import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productsEndPoint } from '../../core/api-end-point/products-end-point';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient) { }

  getPopularProducts (cat:string):Observable<any> {
    return this._HttpClient.get(productsEndPoint.popularItemsProducts + cat)
  }

}
