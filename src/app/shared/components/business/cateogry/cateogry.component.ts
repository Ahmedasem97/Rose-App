import {
  Component,
  inject,
  OnDestroy,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import {
  sidebarBrands,
  sidebarCo,
  sidebarSales,
  sidebarSizes,
} from '../../../../mock/sidebar-cat';
import {
  PopularProduct,
  ProductsRes,
} from '../../../../core/interfaces/products';
import { Subject, takeUntil } from 'rxjs';
import { ProductsService } from '../../../services/products.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {
  Conditions,
  ProductsQueryParams,
  SortAttributes,
  SortOrder,
} from '../../../../core/interfaces/products-query-param.interface';
import { ProductsFilterService } from '../../../services/products-filter.service';

@Component({
  selector: 'app-cateogry',
  standalone: true,
  imports: [ProductCardComponent, NgxPaginationModule],
  templateUrl: './cateogry.component.html',
  styleUrl: './cateogry.component.scss',
})
export class CateogryComponent implements OnInit, OnDestroy {
  private _productsService = inject(ProductsService);
  private _productsFilterService = inject(ProductsFilterService);
  p: number = 1;

  sidecateo = sidebarCo;
  sidebrand = sidebarBrands;
  sidesales = sidebarSales;
  sidesize = sidebarSizes;

  productsDisplay: WritableSignal<PopularProduct[]> = signal([]);
  $destroy = new Subject();
  selectedActiveCategory: WritableSignal<number> = signal(-1);

  searchText: string = '';

  //FEATURE : Filter Products Service
  productsFilterParamsObj: ProductsQueryParams = {};

  ngOnInit(): void {
    this.getPopularProductApi();
  }

  getPopularProductApi(keyword: string = ''): void {
    this._productsService
      .getAllProducts(keyword)
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        next: (res: ProductsRes) => {
          this.productsDisplay.set(res.products);
        },
      });
  }

  getKeyword(key: string, index: number): void {
    this.getPopularProductApi(key);
    this.selectedActiveCategory.set(index);
  }

  //FEATURE : ------------------------[Filter Products Service ]--------------------------

  //  Set Methods
  setKeywordFilter(value: string) {
    this.productsFilterParamsObj.keyword = value;
  }

  setSortOrder(sortOrder: SortOrder) {
    this.productsFilterParamsObj.sort = sortOrder;
  }

  setSortBy(attr: SortAttributes) {
    this.productsFilterParamsObj.sortBy = attr;
  }

  setLimit(num: number) {
    this.productsFilterParamsObj.limit = num;
  }

  setCategory(id: string) {
    this.productsFilterParamsObj.category = id;
  }

  setPriceCondition(num: number) {
    if (!this.productsFilterParamsObj.price) {
      // By default the slider will start from 0 & the price should be greater than Or equal to 0
      this.productsFilterParamsObj.price = [
        {
          value: 0,
          condition: 'gte',
        },
      ];
    }
    // The scond element of the array is the value that the slider stop at it, & the price should be less than Or equal to this value
    this.productsFilterParamsObj.price[1] = {
      value: num,
      condition: 'lte',
    };
  }

  //  Clear Methods

  clearKeywordFilter() {
    delete this.productsFilterParamsObj.keyword;
  }

  clearSortOrder() {
    delete this.productsFilterParamsObj.sort;
  }

  clearSortBy() {
    delete this.productsFilterParamsObj.sortBy;
  }

  clearLimit() {
    delete this.productsFilterParamsObj.limit;
  }

  clearPriceCondition() {
    delete this.productsFilterParamsObj.price;
  }

  clearCategory() {
    delete this.productsFilterParamsObj.category;
  }

  clearAllFilters() {
    this.clearKeywordFilter();
    this.clearLimit();
    this.clearPriceCondition();
    this.clearSortBy();
    this.clearSortOrder();
    this.clearCategory();
  }

  // Check Object
  isFilterObjectEmpty() {
    return Object.keys(this.productsFilterParamsObj).length === 0;
  }

  // Call API
  filterProducts() {
    if (!this.isFilterObjectEmpty()) {
      const queryParams = this._productsFilterService.getQueryParamsAsStr(
        this.productsFilterParamsObj
      );

      this._productsService
        .getAllProductsByFilter(queryParams)
        .pipe(takeUntil(this.$destroy))
        .subscribe({
          next: (res: ProductsRes) => {
            console.log(res);
          },
        });
    }
  }
  // --------------------------------------------------
  ngOnDestroy(): void {
    this.$destroy.next('destroy');
  }
}
