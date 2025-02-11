import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CustomFormValidatorsService {
  confirmPasswordValidator(control: AbstractControl): ValidationErrors | null {
    return control.value.password === control.value.rePassword
      ? null
      : { PasswordNotMatch: true };
  }
}
