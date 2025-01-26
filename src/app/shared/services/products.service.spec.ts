import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { HttpTestingController , HttpClientTestingModule} from '@angular/common/http/testing';
import { productsEndPoint } from '../../core/api-end-point/products-end-point';
import {  popularProducts, popularProductsAdapt } from '../../core/mock data/product.mock.data';


describe('ProductsService', () => {
  let service: ProductsService,
    httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [
        ProductsService
      ]
    });
    service = TestBed.inject(ProductsService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  it('should return all product', () => {
    expect(service).toBeTruthy();
    service.getAllProducts("").subscribe(flower => {
      expect(flower).toBeTruthy("no product return")
      expect(flower.products[0].discount).toBe(50)
      expect(flower).toEqual(popularProductsAdapt)
      
    })
    const reqApi = httpTestingController.expectOne(productsEndPoint.popularItemsProducts)
    expect(reqApi.request.method).toBe("GET")
    reqApi.flush(popularProducts)
  });



});
