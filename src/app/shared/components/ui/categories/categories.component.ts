import { Component, computed, input, InputSignal, OnInit, Signal, signal, WritableSignal } from '@angular/core';
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

  categoryDisplay!:Signal<Category[]>
  
  ngOnInit(): void {
    this.categoryDisplay = computed(()=> this.categoryApiFromHome().categories || [])
      
  }

}
