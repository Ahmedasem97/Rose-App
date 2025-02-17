import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SpecificPrService } from '../../../services/specific-pr.service';
import { Product } from '../../../../core/interfaces/products';
import { DetailsSliderComponent } from "../details-slider/details-slider.component";
import { RelatedProductService } from '../../../services/related-product.service';
import { PercentPipe } from '@angular/common';
import { Relatedproducts } from '../../../../core/interfaces/relatedproduct';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [DetailsSliderComponent,RouterLink ,PercentPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
private readonly _activatedRoute=inject(ActivatedRoute)
private readonly _specificPrService=inject(SpecificPrService)
private readonly _relatedProductService=inject(RelatedProductService)


add:number=0
plus(){
  this.add=this.add+1
}


minus(){

  if(this.add>0){

    this.add=this.add-1
  }else{
    this.add=0
  }

}


id:any
specificProduct:Product = {} as Product;
relatedProducts:Relatedproducts[]=[]


stock:string=''

stockAvailable(){
  if(this.specificProduct.quantity>0){
    this.stock='available'
  }else{
    this.stock='not available'
  }
}

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe({
      next: (params) => {
        this.id=params.get('id')
        this.getProducts()
      },
    })
  }
  getProducts(){
    this._specificPrService.getspecificpro(this.id).subscribe({
      next: (res) => {
        this.specificProduct = res.product
        console.log(this.specificProduct);
        this.getrelated()
      }})
  }
  getrelated(){
    if(this.specificProduct.category!=undefined){
      this._relatedProductService.getsrelatedProduct(this.specificProduct.category).subscribe({
        next: (res) => {console.log(res.products)
        this.relatedProducts=res.products||[]
        this.stockAvailable()
        }
      })
      
    }
    
  }
}












