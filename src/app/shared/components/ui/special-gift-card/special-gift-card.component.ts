import { Component, Input } from '@angular/core';
import { PrimaryBtnComponent } from '../primary-btn/primary-btn.component';

@Component({
  selector: 'app-special-gift-card',
  standalone: true,
  imports: [PrimaryBtnComponent],
  templateUrl: './special-gift-card.component.html',
  styleUrl: './special-gift-card.component.scss',
})
export class SpecialGiftCardComponent {
  @Input() imgSrc: string = '';
  @Input() label: string = '';
  @Input() title: string | HTMLElement = '';
  @Input() titleClasses?: string = '';
  @Input() btnText: string = '';
  @Input() labelColor = 'var(--primary-color)';
}
