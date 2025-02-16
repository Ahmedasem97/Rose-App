import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SpecificPrService } from '../../../services/specific-pr.service';
import { Product } from '../../../../core/interfaces/products';
import { DetailsSliderComponent } from "../details-slider/details-slider.component";
import { RelatedProductService } from '../../../services/related-product.service';
import { RelatedProductComponent } from "../related-product/related-product.component";
import { Relatedproduct } from '../../../../core/interfaces/relatedproduct';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [DetailsSliderComponent,RouterLink ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {

private readonly _ActivatedRoute=inject(ActivatedRoute)
private readonly _SpecificPrService=inject(SpecificPrService)
private readonly _RelatedProductService=inject(RelatedProductService)


specificProduct:Product = {} as Product;
relatedProducts:Relatedproduct[] | null=null



  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        let id=params.get('id')
        
        this._SpecificPrService.getspecificpro(id).subscribe({
          next: (res) => {this.specificProduct = res.product
            console.log(this.specificProduct);}})
      },
     })

     this.getrelated()
     
 
  }


  getrelated(){
    if (this.specificProduct.category!=undefined) {
      this._RelatedProductService.getsrelatedProduct(this.specificProduct.category).subscribe({
        next: (res) => {console.log(res.products)
        this.relatedProducts=res.products
        }
      })
    }

  }

}
