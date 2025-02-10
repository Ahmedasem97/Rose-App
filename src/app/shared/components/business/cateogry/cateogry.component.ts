import { Component, inject, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { sidebarBrands, sidebarCo, sidebarSales, sidebarSizes } from '../../../../mock/sidebar-cat';
import { PopularProduct, ProductsRes } from '../../../../core/interfaces/products';
import { Subject, takeUntil } from 'rxjs';
import { ProductsService } from '../../../services/products.service';
import { ProductCardComponent } from "../product-card/product-card.component";
import {NgxPaginationModule} from 'ngx-pagination';




@Component({
  selector: 'app-cateogry',
  standalone: true,
  imports: [ProductCardComponent ,NgxPaginationModule],
  templateUrl: './cateogry.component.html',
  styleUrl: './cateogry.component.scss'
})
export class CateogryComponent implements OnInit, OnDestroy{

  private _productsService = inject(ProductsService)
  p: number = 1;
 
  

  sidecateo=sidebarCo
  sidebrand=sidebarBrands
  sidesales=sidebarSales
  sidesize=sidebarSizes


    



    productsDisplay:WritableSignal<PopularProduct[]> = signal([])
    $destroy = new Subject()
    selectedActiveCategory:WritableSignal<number> = signal(-1)
  
    ngOnInit(): void {
        this.getPopularProductApi()
    }
    
    getPopularProductApi (keyword:string = ""):void {
      this._productsService.getAllProducts(keyword)
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
