import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PrimaryBtnComponent } from '../../../shared/components/ui/primary-btn/primary-btn.component';
import { CustomInputComponent } from '../../../shared/components/business/custom-input/custom-input.component';
import { AuthLibService } from 'auth-lib';
import { baseUrl } from '../../environment/environment';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [PrimaryBtnComponent, CustomInputComponent, ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss',
  animations: [
    trigger('toggleWidget', [
      transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate('0.4s ease-in', style({ transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)' }),
        animate('0.4s ease-in', style({ transform: 'scale(0)' })),
      ]),
    ]),
  ],
})
export class ForgetPasswordComponent {
  private _authLibService = inject(AuthLibService);

  forgetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required]),
  });

  forgetPasswordSubmit(): void {
    this._authLibService
      .forgetPassword(baseUrl, this.forgetPasswordForm.value)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
