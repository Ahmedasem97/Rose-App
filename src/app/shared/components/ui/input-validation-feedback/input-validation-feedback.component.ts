import { Component, input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-validation-feedback',
  standalone: true,
  imports: [],
  templateUrl: './input-validation-feedback.component.html',
  styleUrl: './input-validation-feedback.component.scss',
})
export class InputValidationFeedbackComponent {
  fieldObj = input<FormControl>();
  fieldName = input<string>();

  // This [errorMessage] to receiev errors like Password & Re-Password mismatch error [Errors related to 2 or more fields]
  // Please don't use it with single input validation
  errorMessage = input<string | undefined>();

  get fieldErrorList(): any[] {
    console.log(Object.keys(this.fieldObj()?.errors ?? {}));
    return Object.keys(this.fieldObj()?.errors ?? {});
  }
}
