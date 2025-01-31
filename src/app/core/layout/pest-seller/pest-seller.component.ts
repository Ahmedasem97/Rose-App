import { Component, inject, input, InputSignal, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CategoriesRes, Category } from '../../interfaces/categories';
import { ProductsService } from '../../../shared/services/products.service';
import { PopularProduct, ProductsRes } from '../../interfaces/products';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-pest-seller',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './pest-seller.component.html',
  styleUrl: './pest-seller.component.scss'
})
export class PestSellerComponent implements OnInit, OnDestroy {

  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    responsive: {
    
      0: {
        items: 1
      },
      765: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }



  categoryApiFromHome: InputSignal<CategoriesRes> = input.required()
  
    private _ProductsService = inject(ProductsService)
    constructor(){}
    
    categoryDisplay:WritableSignal<Category[]> = signal([])
    productsDisplay:WritableSignal<PopularProduct[]> = signal([])
    $destroy = new Subject()
    selectedActiveCategory:WritableSignal<number> = signal(-1)
  
    ngOnInit(): void {
      this.categoryDisplay.set(this.categoryApiFromHome().categories || []);
        
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
