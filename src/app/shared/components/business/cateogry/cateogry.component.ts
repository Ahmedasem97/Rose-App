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
import { CategoriesService } from '../../../services/categories.service';
import {
  CategoriesRes,
  Category,
} from '../../../../core/interfaces/categories';
import { CustomRadioDropdownComponent } from '../custom-dropdown/custom-radio-dropdown.component';
import { sortOrder } from '../../../../mock/sort-order.mock';
import { sortAttributes } from '../../../../mock/sort-attributes.mock';
import { CustomSearchComponent } from '../custom-search/custom-search.component';

@Component({
  selector: 'app-cateogry',
  standalone: true,
  imports: [
    ProductCardComponent,
    NgxPaginationModule,
    CustomRadioDropdownComponent,
    CustomSearchComponent,
  ],
  templateUrl: './cateogry.component.html',
  styleUrl: './cateogry.component.scss',
})
export class CateogryComponent implements OnInit, OnDestroy {
  private _productsService = inject(ProductsService);
  private _productsFilterService = inject(ProductsFilterService);
  private _categoriesService = inject(CategoriesService);
  p: number = 1;

  sidecateo: Category[] = [] as Category[];
  sidebrand = sidebarBrands;
  sidesales = sidebarSales;
  sidesize = sidebarSizes;
  sortByOptionsList: SortAttributes[] = [];
  sortOrderOptionsList: SortOrder[] = [];

  productsDisplay: WritableSignal<PopularProduct[]> = signal([]);
  $destroy = new Subject();
  selectedActiveCategory: WritableSignal<number> = signal(-1);

  searchText: string = '';

  //FEATURE : Filter Products Service
  productsFilterParamsObj: ProductsQueryParams = {};

  getCategories() {
    this._categoriesService
      .getAllCategories()
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        next: (res: CategoriesRes) => {
          this.sidecateo = res.categories;
        },
      });
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

  // init

  initSortOrderList() {
    this.sortOrderOptionsList = sortOrder;
  }

  initSortByList() {
    this.sortByOptionsList = sortAttributes;
  }

  setDefaultSortOrder() {
    this.setSortOrderFilter('asc');
  }

  // Events

  onClickResetFilter() {
    this.clearAllFilters();
    // TODO : Call the API getPopularProductApi
  }

  onClickSearch(value: string) {
    if (value) {
      this.setKeywordFilter(value);
      // console.log(`The Keyword`);
      // console.log(this.productsFilterParamsObj);
      // TODO : Call the API
      this.filterProducts();
    }
  }

  onChangeCategory(event: Event) {
    const element = event.target as HTMLInputElement;
    const id = element.value;
    console.log(`The category = ${id}`);
    this.setCategoryFilter(id);
    // TODO : Call the API
    this.filterProducts();
  }

  onChangePrice(event: Event) {
    const element = event.target as HTMLInputElement;
    const num = Number(element.value);
    console.log(`The price = ${num}`);
    this.setPriceConditionFilter(num);
    // TODO : Call the API
    this.filterProducts();
  }

  onChangeSearch(event: Event) {
    const element = event.target as HTMLInputElement;
    const value = element.value;
    this.setKeywordFilter(value);
    // TODO : Call the API
    this.filterProducts();
  }

  onChangeSortOrder(event: Event) {
    const element = event.target as HTMLInputElement;
    const value = element.value as SortOrder;
    this.setSortOrderFilter(value);
    // console.log('------ Sort Order ------------');
    // console.log(this.productsFilterParamsObj);
    // TODO : Call the API
    this.filterProducts();
  }

  onChangeSortBy(event: Event) {
    const element = event.target as HTMLInputElement;
    const value = element.value as SortAttributes;
    this.setSortByFilter(value);
    // console.log('------ Sort By ------------');
    // console.log(this.productsFilterParamsObj);
    // TODO : Call the API
    this.filterProducts();
  }

  //  Set Methods
  setKeywordFilter(value: string) {
    this.productsFilterParamsObj.keyword = value;
  }

  setSortOrderFilter(sortOrder: SortOrder) {
    this.productsFilterParamsObj.sort = sortOrder;
  }

  setSortByFilter(attr: SortAttributes) {
    this.productsFilterParamsObj.sortBy = attr;
  }

  setLimitFilter(num: number) {
    this.productsFilterParamsObj.limit = num;
  }

  setCategoryFilter(id: string) {
    this.productsFilterParamsObj.category = id;
  }

  setPriceConditionFilter(num: number) {
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

    // console.log('The price');
    // console.log(this.productsFilterParamsObj);
  }

  //  Clear Methods

  clearKeywordFilter() {
    delete this.productsFilterParamsObj.keyword;
  }

  clearSortOrderFilter() {
    delete this.productsFilterParamsObj.sort;
  }

  clearSortByFilter() {
    delete this.productsFilterParamsObj.sortBy;
  }

  clearLimitFilter() {
    delete this.productsFilterParamsObj.limit;
  }

  clearPriceConditionFilter() {
    delete this.productsFilterParamsObj.price;
  }

  clearCategoryFilter() {
    delete this.productsFilterParamsObj.category;
  }

  clearAllFilters() {
    this.clearKeywordFilter();
    this.clearLimitFilter();
    this.clearPriceConditionFilter();
    this.clearSortByFilter();
    this.clearSortOrderFilter();
    this.clearCategoryFilter();
  }

  // Check Object
  isFilterObjectEmpty() {
    return Object.keys(this.productsFilterParamsObj).length === 0;
  }

  // Call API
  filterProducts() {
    const isFilterObjEmpty = this.isFilterObjectEmpty();
    if (!isFilterObjEmpty) {
      const queryParams = this._productsFilterService.getQueryParamsAsStr(
        this.productsFilterParamsObj
      );

      console.log('~~~~~~~~~~ Final Params ~~~~~~~~~~ ');
      console.log(queryParams);
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ');
      // this._productsService
      //   .getAllProductsByFilter(queryParams)
      //   .pipe(takeUntil(this.$destroy))
      //   .subscribe({
      //     next: (res: ProductsRes) => {
      //       console.log(res);
      //     },
      //   });
    }
  }
  // --------------------------------------------------

  ngOnInit(): void {
    this.initSortByList();
    this.initSortOrderList();
    this.setDefaultSortOrder();
    this.getPopularProductApi();
    this.getCategories();
  }

  ngOnDestroy(): void {
    this.$destroy.next('destroy');
  }
}
