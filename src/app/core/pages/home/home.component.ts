import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PopularItemComponent } from '../../../shared/components/business/popular-item/popular-item.component';
import { SpecialGiftsSectionComponent } from '../../../shared/components/ui/special-gifts-section/special-gifts-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, PopularItemComponent, SpecialGiftsSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
