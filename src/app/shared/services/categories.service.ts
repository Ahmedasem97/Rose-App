import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriesAbstract } from '../../core/abstract/categories.abstract';
import { map, Observable } from 'rxjs';
import { CategoriesEndPoint } from '../../core/api-end-point/category-end-point';
import { CategoryAdapter } from '../../core/adapter/category-adapter';
import { CategoriesRes } from '../../core/interfaces/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService implements CategoriesAbstract {

  constructor(
    private _HttpClient: HttpClient,
    private _CategoryAdapter:CategoryAdapter
  ) { }

  getAllCategories(): Observable<CategoriesRes> {
    return this._HttpClient.get(CategoriesEndPoint.getAllCategory).pipe(
      map((res:any) => this._CategoryAdapter.AllCategoryAdapter(res))
    )
  }

  

}
