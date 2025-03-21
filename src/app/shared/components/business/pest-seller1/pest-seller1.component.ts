import { Component, effect, inject, input, InputSignal, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { PopularProduct, ProductsRes } from '../../../../core/interfaces/products';
import { ProductCardComponent } from "../product-card/product-card.component";
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CategoriesRes, Category } from '../../../../core/interfaces/categories';
import { ProductsService } from '../../../services/products.service';
import { Subject, takeUntil } from 'rxjs';
import { PopularItemComponent } from '../popular-item/popular-item.component';
import { TranslationService } from '../../../../core/services/translation.service';

@Component({
  selector: 'app-Best-seller1',
  standalone: true,
  imports: [ProductCardComponent,CarouselModule ],
  templateUrl: './pest-seller1.component.html',
  styleUrl: './pest-seller1.component.scss'
})
export class BestSeller1Component  {

  isRtl = false

  private _ProductsService = inject(ProductsService)
  private _translationService = inject(TranslationService)

  constructor(){
    effect(()=> {
      if (this._translationService.isRtl()) {
        this.isRtl = true
      }else {
        this.isRtl = false
      }
    })
  }

  customOptionsAR: OwlOptions = {
      loop: true,
      mouseDrag: false,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 700,
      rtl: true,
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

    customOptionsEN: OwlOptions = {
      loop: true,
      mouseDrag: false,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 700,
      rtl: false,
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

  productsDisplay:WritableSignal<PopularProduct[]> = signal([])
  $destroy = new Subject()
  selectedActiveCategory:WritableSignal<number> = signal(-1)

  ngOnInit(): void {
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
