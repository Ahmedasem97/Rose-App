import { Injectable } from '@angular/core';
import { ProductsAbstract } from '../abstract/products.abstract';
import { AllProductsRes, PopularProduct, ProductsRes } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsAdapter {

  constructor() { }

  AllProductsAdapt(data: AllProductsRes): ProductsRes {
    return {
      message: data.message,
      products: data.products.map((res: PopularProduct) => ({
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
        title: res.title
      }))
    }
  }

}
