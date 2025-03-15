import {
  AfterViewInit,
  Component,
  ElementRef,
  input,
  OnInit,
  Self,
  viewChild,
} from '@angular/core';
import { ControlValueAccessor, NgModel } from '@angular/forms';

@Component({
  selector: 'app-payment-option',
  standalone: true,
  imports: [],
  templateUrl: './payment-option.component.html',
  styleUrl: './payment-option.component.scss',
})
export class PaymentOptionComponent implements ControlValueAccessor {
  formOptionName = input.required<string>();
  optionId = input.required<string>();
  optionName = input.required<string>();
  optionIcon = input.required<string>();
  optionText = input.required<string>();
  classes = input<string>();
  readonly optionInputRef = viewChild.required<ElementRef>('optionInput');
  value: string = '';

  // Constructor to set the value accessor
  constructor(@Self() public ngControl: NgModel) {
    this.ngControl.valueAccessor = this;
  }

  // Callback functions to track input
  onChangeCallback = (value: string) => {};
  onTouchedCallback = () => {};

  onOptionClick() {
    this.optionInputRef().nativeElement.click();
  }

  get isChecked() {
    return this.optionInputRef().nativeElement.checked;
  }

  writeValue(value: string): void {
    this.value = value || '';
    console.log(this.value);
    if (this.optionInputRef) {
      this.optionInputRef().nativeElement.checked =
        this.value === this.optionName();
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  onChange(event: Event): void {
    let element = event.target as HTMLInputElement;
    let value = element.value;
    this.onChangeCallback(value);
  }
}
