import { Component, input, InputSignal } from '@angular/core';
import { Category } from '../../../../core/interfaces/categories';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss'
})
export class CategoryCardComponent {
  getcategoryApi: InputSignal<Category> = input.required()
  classes: InputSignal<string> = input.required()
  innerDivClasses: InputSignal<string> = input.required()
}
