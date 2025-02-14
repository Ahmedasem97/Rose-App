import { inject, Injectable } from '@angular/core';
import { productsEndPoint } from '../../core/api-end-point/products-end-point';
import { HttpClient } from '@angular/common/http';
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
  //? ------------ Utilities  ----------

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

    if (filterObj.price) {
      let priceConditions = filterObj.price.map((obj) =>
        this.getConditionFilter('price', obj)
      );
      queryParamsList.push(...priceConditions);
    }

    if (filterObj.sort && filterObj.sortBy) {
      queryParamsList.push(
        this.getSortFilter(filterObj.sortBy, filterObj.sort)
      );
    }

    if (filterObj.limit) {
      queryParamsList.push(`limit=${filterObj.limit}`);
    }

    if (filterObj.category) {
      queryParamsList.push(`category=${filterObj.category}`);
    }

    if (filterObj.keyword) {
      queryParamsList.push(`keyword=${filterObj.keyword}`);
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
        filterStr = `${attr}[lt]=${val}`;
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
