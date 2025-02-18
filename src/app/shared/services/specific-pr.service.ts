import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpecificAdapter } from '../../core/adapter/specific.adapter';
import { map, Observable } from 'rxjs';
import { Product } from '../../core/interfaces/products';
import { productsEndPoint } from '../../core/api-end-point/products-end-point';

@Injectable({
  providedIn: 'root'
})
export class SpecificPrService {

  constructor(
      private _httpClient:HttpClient,
      private _SpecificAdapter:SpecificAdapter
    ) { }


    getspecificpro(id :string|null):Observable<any>{
      return this._httpClient.get(`https://flower.elevateegy.com/api/v1/products/${id}`)
      // return this._HttpClient.get(productsEndPoint.specificProduct+id).pipe(map((res:any) =>this._SpecificAdapter.specificProductAdapt(res)))
    }
}
