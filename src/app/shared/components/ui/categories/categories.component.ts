import { Component, input, InputSignal, OnInit, signal, WritableSignal } from '@angular/core';
import { CategoriesRes, Category } from '../../../../core/interfaces/categories';
import { CategoryCardComponent } from "../../business/category-card/category-card.component";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CategoryCardComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit{

  categoryApiFromHome: InputSignal<CategoriesRes> = input.required()

  categoryDisplay:WritableSignal<Category[]> = signal([])

  ngOnInit(): void {
    this.categoryDisplay.set(this.categoryApiFromHome().categories || []);
      
  }

}
