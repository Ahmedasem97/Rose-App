import { productsEndPoint } from './../api-end-point/products-end-point';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class SpecificAdapter {

  constructor() { }

  specificProductAdapt(data:Product){
    return {
      products: data.products.map((res: Product) => ({
        _id: res._id,
        category: res.category,
        discount: res.discount,
        images: res.images,
        imgCover: res.imgCover,
        price: res.price,
        priceAfterDiscount: res.priceAfterDiscount,
        quantity: res.quantity,
        slug: res.slug,
        sold: res.sold,
        title: res.title,
        description:res.description
      }))
    }
  }
}
