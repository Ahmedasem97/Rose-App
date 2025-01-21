import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-special-gift-banner',
  standalone: true,
  imports: [],
  templateUrl: './special-gift-banner.component.html',
  styleUrl: './special-gift-banner.component.scss',
})
export class SpecialGiftBannerComponent {
  @Input() imgSrc: string = '';
  @Input() label: string = '';
  @Input() title: string = '';
  @Input() btnText: string = '';
  @Input() labelColor = 'var(--primary-color)';
}
