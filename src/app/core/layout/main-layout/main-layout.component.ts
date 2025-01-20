import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SpecialGiftCardComponent } from '../../../shared/components/ui/special-gift-card/special-gift-card.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [SpecialGiftCardComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {}
