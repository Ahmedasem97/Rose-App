import {
  Component,
  effect,
  ElementRef,
  inject,
  input,
  output,
  ViewChild,
} from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ProductsFilterService } from '../../../services/products-filter.service';

@Component({
  selector: 'app-custom-search',
  standalone: true,
  imports: [],
  templateUrl: './custom-search.component.html',
  styleUrl: './custom-search.component.scss',
})
export class CustomSearchComponent {
  placeholder = input.required<string>();
  resetTrigger = input<boolean>();
  handlClick = output<string>();
  handlInput = output<Event>();
  handlChange = output<Event>();

  @ViewChild('searchInput') searchInput!: ElementRef;

  private readonly _productsFilterService = inject(ProductsFilterService);

  constructor() {
    effect(() => {
      const status = this._productsFilterService.getResetFilterStatus();
      if (status) {
        this.resetValue();
      }
    });
  }

  resetValue() {
    this.searchInput.nativeElement.value = '';
  }

  onValueInput(event: Event) {
    this.handlInput.emit(event);
    this._productsFilterService.setResetFilterStatus(false);
  }

  onValueChange(event: Event) {
    this.handlChange.emit(event);
  }

  onClick() {
    this.handlClick.emit(this.searchInput.nativeElement.value);
  }
}
