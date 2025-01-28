import { Component, Input } from '@angular/core';
import { PrimaryBtnComponent } from '../primary-btn/primary-btn.component';

@Component({
  selector: 'app-special-gift-banner',
  standalone: true,
  imports: [PrimaryBtnComponent],
  templateUrl: './special-gift-banner.component.html',
  styleUrl: './special-gift-banner.component.scss',
})
export class SpecialGiftBannerComponent {
  @Input() imgSrc: string = '';
  @Input() label: string = '';
  @Input() title: string | HTMLElement = '';
  @Input() btnText: string = '';
  @Input() labelColor = 'var(--primary-color)';
}
