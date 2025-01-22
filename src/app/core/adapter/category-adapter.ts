import { Injectable } from '@angular/core';
import { AllCategoriesRes, CategoriesRes, Category } from '../interfaces/categories';
import { CategoriesAbstract } from '../abstract/categories.abstract';

@Injectable({
  providedIn: 'root'
})
export class CategoryAdapter{

  constructor() { }

  AllCategoryAdapter(data: AllCategoriesRes): CategoriesRes {
    return {
      categories: data.categories.map((res: Category) => ({
        _id: res._id,
        name: res.name,
        createdAt: res.createdAt,
        image: res.image,
        productsCount: res.productsCount,
        slug: res.slug,
        updatedAt: res.updatedAt
      })),
      metadata: {
        currentPage: data.metadata.currentPage,
        limit: data.metadata.currentPage,
        totalItems: data.metadata.totalItems,
        totalPages: data.metadata.totalPages
      }
    }
  }


}
