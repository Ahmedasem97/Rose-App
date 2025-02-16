import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RelatedProductService {

  constructor( private _HttpClient:HttpClient) { }

  getsrelatedProduct(catid:string):Observable<any>{
        return this._HttpClient.get(`https://flower.elevateegy.com/api/v1/products?category=${catid}`)
        // return this._HttpClient.get(productsEndPoint.specificProduct+id).pipe(map((res:any) =>this._SpecificAdapter.specificProductAdapt(res)))
      }
}
