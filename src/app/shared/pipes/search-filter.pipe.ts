import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../core/interfaces/products';

@Pipe({
  name: 'searchFilter',
  standalone: true,
})
export class SearchFilterPipe implements PipeTransform {
  transform(searchText: string, productsList: Product[]): Product[] {
    if (!productsList) {
      return [];
    }
    if (!searchText) {
      return productsList;
    }

    searchText = searchText.toLowerCase();

    return productsList.filter((prod) =>
      prod.title.toLowerCase().includes(searchText)
    );
  }
}
