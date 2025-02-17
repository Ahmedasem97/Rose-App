import { PopularProduct, ProductsRes } from './../../../../core/interfaces/products';
import { Component, input, InputSignal, OnDestroy, OnInit, signal, WritableSignal, inject } from '@angular/core';
import { CategoriesRes, Category } from '../../../../core/interfaces/categories';
import { ProductsService } from '../../../services/products.service';
import { Subject, takeUntil } from 'rxjs';
import { ProductCardComponent } from "../product-card/product-card.component";
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-popular-item',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './popular-item.component.html',
  styleUrl: './popular-item.component.scss'
})
export class PopularItemComponent implements OnInit, OnDestroy {

  private _ProductsService = inject(ProductsService)
  private readonly _categoriesService = inject(CategoriesService)

  constructor() { }

  categoryDisplay: WritableSignal<Category[]> = signal([])
  productsDisplay: WritableSignal<PopularProduct[]> = signal([])
  $destroy = new Subject()
  selectedActiveCategory: WritableSignal<number> = signal(-1)

  ngOnInit(): void {
    this.getCategoriesApi()
    this.getPopularProductApi()
  }

  getCategoriesApi(): void {
    this._categoriesService.getAllCategories()
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        next: (res) => {
          this.categoryDisplay.set(res.categories);
        },
      });
  }

  getPopularProductApi(keyword: string = ""): void {
    this._ProductsService.getAllProducts(keyword)
      .pipe(
        takeUntil(this.$destroy)
      )
      .subscribe({
        next: (res: ProductsRes) => {
          this.productsDisplay.set(res.products)
        }
      })
  }

  getKeyword(key: string, index: number): void {
    this.getPopularProductApi(key)
    this.selectedActiveCategory.set(index)
  }

  ngOnDestroy(): void {
    this.$destroy.next("destroy")
  }

}
