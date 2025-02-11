import { Component, input, output } from '@angular/core';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-primary-btn',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './primary-btn.component.html',
  styleUrl: './primary-btn.component.scss',
})
export class PrimaryBtnComponent {
  btnText = input.required<string>();
  btnIcon = input<string>();
  btnIconClasses = input<string>();
  btnClasses = input<string>();
  isDisabled = input<boolean>();
  isLoading = input<boolean>();
  loadingMsg = input<string>();
  btnTextClasses = input<string>();
  handleBtnClick = output();
  onClick() {
    if (!this.isDisabled()) {
      this.handleBtnClick.emit();
    }
  }
}
