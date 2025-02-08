import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-btn',
  standalone: true,
  imports: [],
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
  loadingMsg = input<boolean>();
  btnTextClasses = input<string>();
  handleBtnClick = output();
  onClick() {
    this.handleBtnClick.emit();
  }
}
