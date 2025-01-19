import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PopularItemComponent } from "../../../shared/components/business/popular-item/popular-item.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet , PopularItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
