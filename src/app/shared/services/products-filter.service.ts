import { Injectable, signal } from '@angular/core';
import {
  ProductsQueryParams,
  SortAttributes,
  SortOrder,
  ValueCondition,
} from '../../core/interfaces/products-query-param.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsFilterService {
  // variables
  private readonly resetFilterSignal = signal<boolean>(false);

  //? ------------ Utilities  ----------

  // Signal Methods

  getResetFilterStatus() {
    return this.resetFilterSignal();
  }

  setResetFilterStatus(status: boolean) {
    this.resetFilterSignal.set(status);
  }

  // Public Methods
  getQueryParamsAsStr(filterParamsObj: ProductsQueryParams): string {
    const queryParams = this.getFilterParamsForAPI(
      this.getFilterList(filterParamsObj)
    );

    return queryParams;
  }

  // Private Methods
  private getFilterList(filterObj: ProductsQueryParams): string[] {
    const queryParamsList = [];

    if (filterObj.sort && filterObj.sortBy) {
      queryParamsList.push(
        this.getSortFilter(filterObj.sortBy, filterObj.sort)
      );
    }

    for (const [key, value] of Object.entries(filterObj)) {
      switch (key) {
        case 'price':
          let priceConditions = value.map((obj: ValueCondition) =>
            this.getConditionFilter('price', obj)
          );
          queryParamsList.push(...priceConditions);
          break;
        case 'sort': // sort will be set only if sortby available & defined [Handle it befor for loop to avoid added twice]
          break;
        case 'sortBy': // sortBy will be set only if sort available & defined  [Handle it befor for loop to avoid added twice]
          break;
        default:
          queryParamsList.push(`${key}=${value}`);
      }
    }
    return queryParamsList;
  }

  private getConditionFilter(
    attr: string,
    conditionObj: ValueCondition
  ): string {
    const val = conditionObj.value;
    const condition = conditionObj.condition;
    let filterStr = '';
    switch (condition) {
      case 'gt':
        filterStr = `${attr}[gt]=${val}`;
        break;
      case 'gte':
        filterStr = `${attr}[gte]=${val}`;
        break;
      case 'lt':
        filterStr = `${attr}[lt]=${val}`;
        break;
      case 'lte':
        filterStr = `${attr}[lte]=${val}`;
        break;
    }

    return filterStr;
  }

  private getIncludedFields(fieldsList: string[]): string {
    return fieldsList.join(',');
  }

  private getSortFilter(attr: SortAttributes, order: SortOrder): string {
    let sortFilter = '';
    switch (order) {
      case 'asc':
        sortFilter = `sort=${attr}`;
        break;
      case 'desc':
        sortFilter = `sort=-${attr}`;
        break;
    }
    return sortFilter;
  }

  private getFilterParamsForAPI(paramsList: string[]) {
    let paramFilterStr = '';

    for (let i = 0; i < paramsList.length; i++) {
      if (i !== 0) {
        paramFilterStr += '&';
      }
      const param = paramsList[i];
      paramFilterStr += param;
    }

    return paramFilterStr;
  }
}
