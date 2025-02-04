import { Component, forwardRef, input, Optional, Self } from '@angular/core';
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
  label = input<string | undefined>();
  inputName = input.required<string>();
  inputType = input.required<InputTypes>();
  inputPlaceholder = input.required<string | undefined>();

  value: string = '';
  disabled: boolean = false;
  onChangeCallback = (value: any) => {};
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

  onChange(event: any): void {
    let val = event.target.value;
    // console.log(val);
    this.onChangeCallback(val); // Notify parent forms about the new value
  }

  onTouched(): void {
    this.onTouchedCallback(); // Notify parent forms that the input was touched
  }
}
