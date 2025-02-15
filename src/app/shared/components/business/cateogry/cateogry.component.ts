import {
  Component,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
  QueryList,
  signal,
  ViewChild,
  ViewChildren,
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
  @ViewChildren('categoryRadios') categoryRadios!: QueryList<ElementRef>;
  @ViewChild('priceRange') priceRange!: ElementRef;

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
    this._productsFilterService.setResetFilterStatus(true);
    this.clearAllFilters();
    this.getPopularProductApi();
  }

  onClickSearch(value: string) {
    if (value) {
      this.filterProducts();
    } else {
      this.getPopularProductApi();
    }
  }

  onChangeSearch(event: Event) {
    const element = event.target as HTMLInputElement;
    const value = element.value;

    if (value) {
      this.setKeywordFilter(value);
      this.filterProducts();
    } else {
      this.clearKeywordFilter();
      this.getPopularProductApi();
    }
  }

  onInputSearch(event: Event) {
    //! Don't call the API on input, this will affect the performance and not best practice
    const element = event.target as HTMLInputElement;
    const value = element.value;
    if (value) {
      this.setKeywordFilter(value);
    } else {
      this.clearKeywordFilter();
    }
  }

  onChangeCategory(event: Event) {
    const element = event.target as HTMLInputElement;
    const id = element.value;
    this.setCategoryFilter(id);
    this.filterProducts();
  }

  onChangePrice(event: Event) {
    const element = event.target as HTMLInputElement;
    const num = Number(element.value);
    this.setPriceConditionFilter(num);
    this.filterProducts();
  }

  onChangeSortOrder(event: Event) {
    const element = event.target as HTMLInputElement;
    const value = element.value as SortOrder;
    this.setSortOrderFilter(value);

    if (
      this.productsFilterParamsObj.sort &&
      this.productsFilterParamsObj.sortBy
    ) {
      this.filterProducts();
    }
  }

  onChangeSortBy(event: Event) {
    const element = event.target as HTMLInputElement;
    const value = element.value as SortAttributes;
    this.setSortByFilter(value);
    if (
      this.productsFilterParamsObj.sort &&
      this.productsFilterParamsObj.sortBy
    ) {
      this.filterProducts();
    }
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
    this.priceRange.nativeElement.value = 100;
    delete this.productsFilterParamsObj.price;
  }

  clearCategoryFilter() {
    this.categoryRadios.forEach(
      (radio: ElementRef) => (radio.nativeElement.checked = false)
    );
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

      this._productsService
        .getAllProductsByFilter(queryParams)
        .pipe(takeUntil(this.$destroy))
        .subscribe({
          next: (res: ProductsRes) => {
            this.productsDisplay.set(res.products);
          },
        });
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
