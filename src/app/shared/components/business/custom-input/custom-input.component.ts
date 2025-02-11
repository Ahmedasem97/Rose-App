import { Component, input, Self } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputTypes } from '../../../../core/interfaces/custom-input.interface';
import { CommonModule } from '@angular/common';
import { InputValidationFeedbackComponent } from '../../ui/input-validation-feedback/input-validation-feedback.component';
@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    InputValidationFeedbackComponent,
  ],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss',
})
export class CustomInputComponent implements ControlValueAccessor {
  // Label
  label = input<string | undefined>();
  // Input attributes
  inputName = input.required<string>();
  inputType = input.required<InputTypes>();
  inputValue = input<string>();
  inputPlaceholder = input<string | undefined>();
  inputId = input<string>(); // for label effect
  // Variables for styles
  labelClasses = input<string>();
  inputGroupClasses = input<string>();
  inputClasses = input<string>();

  // Variables for logic
  checked: boolean = false;
  value: string = '';
  disabled: boolean = false;

  // Callback functions to track input
  onChangeCallback = (value: string) => {};
  onTouchedCallback = () => {};

  constructor(@Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  get formControl(): FormControl {
    return this.ngControl.control as FormControl;
  }

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onChange(event: Event): void {
    let element = event.target as HTMLInputElement;
    let value = element.value;
    this.onChangeCallback(value);
  }

  onTouched(): void {
    this.onTouchedCallback();
  }

  toggleCheckbox() {
    this.checked = !this.checked;
    let value = this.checked ? 'Yes' : '';
    this.onChangeCallback(value);
  }

  switchRadio(event: Event) {
    let element = event.target as HTMLInputElement;
    let value = element.value;
    this.onChangeCallback(value);
  }
}
