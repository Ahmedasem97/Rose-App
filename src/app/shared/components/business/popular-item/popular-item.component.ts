import { PopularProduct, ProductsRes } from './../../../../core/interfaces/products';
import { Component, input, InputSignal, OnDestroy, OnInit, signal, WritableSignal, inject, Signal, computed } from '@angular/core';
import { CategoriesRes, Category } from '../../../../core/interfaces/categories';
import { ProductsService } from '../../../services/products.service';
import { Subject, takeUntil } from 'rxjs';
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
  selector: 'app-popular-item',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './popular-item.component.html',
  styleUrl: './popular-item.component.scss'
})
export class PopularItemComponent implements OnInit, OnDestroy{
  categoryApiFromHome: InputSignal<CategoriesRes> = input.required()

  private _ProductsService = inject(ProductsService)
  constructor(){}
  
  categoryDisplay!:Signal<Category[]>
  productsDisplay:WritableSignal<PopularProduct[]> = signal([])
  $destroy = new Subject()
  selectedActiveCategory:WritableSignal<number> = signal(-1)

  ngOnInit(): void {
    this.categoryDisplay = computed(()=> this.categoryApiFromHome().categories || [])
      
      this.getPopularProductApi()
  }
  
  getPopularProductApi (keyword:string = ""):void {
    this._ProductsService.getAllProducts(keyword)
    .pipe(
      takeUntil(this.$destroy)
    )
    .subscribe({
      next: (res:ProductsRes) => {        
        this.productsDisplay.set(res.products)
      }
    })
  }

  getKeyword (key:string , index:number):void {
    this.getPopularProductApi(key)
    this.selectedActiveCategory.set(index)
  }

  ngOnDestroy(): void {
      this.$destroy.next("destroy")
  }

}
