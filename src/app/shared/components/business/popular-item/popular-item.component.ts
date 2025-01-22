import { AllProductsRes } from './../../../../core/interfaces/products';
import { Component, input, InputSignal, OnInit, signal, WritableSignal } from '@angular/core';
import { CategoriesRes, Category } from '../../../../core/interfaces/categories';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../../core/interfaces/products';

@Component({
  selector: 'app-popular-item',
  standalone: true,
  imports: [],
  templateUrl: './popular-item.component.html',
  styleUrl: './popular-item.component.scss'
})
export class PopularItemComponent implements OnInit{
  categoryApiFromHome: InputSignal<CategoriesRes> = input.required()

  constructor(private _ProductsService:ProductsService){}
  
  categoryDisplay:WritableSignal<Category[]> = signal([])
  productsDisplay:WritableSignal<Product[]> = signal([])

  ngOnInit(): void {
      this.categoryDisplay.set(this.categoryApiFromHome().categories)
      
      this.getPopularApi()
  }
  
  getPopularApi (keyword:string = ""):void {
    this._ProductsService.getPopularProducts(keyword).subscribe({
      next: (res:AllProductsRes) => {
        console.log(res);
        this.productsDisplay.set(res.products)
      }
    })
  }



}
