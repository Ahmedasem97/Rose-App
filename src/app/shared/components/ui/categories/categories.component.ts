import { Component, inject, input, InputSignal, OnInit, signal, WritableSignal } from '@angular/core';
import { CategoriesRes, Category } from '../../../../core/interfaces/categories';
import { CategoryCardComponent } from "../../business/category-card/category-card.component";
import { CategoriesService } from '../../../services/categories.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CategoryCardComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit{

  private readonly _categoriesService = inject(CategoriesService)

  categoryDisplay:WritableSignal<Category[]> = signal([])
  $destroy = new Subject<string>();


  ngOnInit(): void {
    this._categoriesService.getAllCategories()
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        next: (res) => {
          this.categoryDisplay.set(res.categories);
        },
      });
  }

  ngOnDestroy(): void {
    this.$destroy.next('subscribeDestroy');
  }

}
