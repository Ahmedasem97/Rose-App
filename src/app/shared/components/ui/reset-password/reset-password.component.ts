import { Component, inject, OnDestroy } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryBtnComponent } from "../primary-btn/primary-btn.component";
import { CustomInputComponent } from "../../business/custom-input/custom-input.component";
import { AuthLibService } from 'auth-lib';
import { baseUrl, PASSWORD_PATTERN } from '../../../../core/environment/environment';
import { ForgetSignalService } from '../../../services/forget-signal.service';
import { ResetPasswordUserData } from '../../../../../../dist/auth-lib/lib/interfaces/reset-password-user-data';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { AuthModalService } from '../../../services/auth-modal.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [ReactiveFormsModule, PrimaryBtnComponent, CustomInputComponent],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent implements OnDestroy {
  $destroy = new Subject<string>();
  private _isAuthPage: boolean = false;

  private _authLibService = inject(AuthLibService)
  private _forgetSignalService = inject(ForgetSignalService)
  private _authModalService = inject(AuthModalService)
  private readonly _router = inject(Router);

  resetPasswordForm: FormGroup = new FormGroup({
    newPassword: new FormControl(null, [Validators.required, Validators.pattern(PASSWORD_PATTERN)]),
    rePassword: new FormControl(null, [Validators.required]),
  }, this.confirmPassword)

  confirmPassword(g: AbstractControl) {
    if (g.get('newPassword')?.value === g.get('rePassword')?.value) {
      return null
    } else {
      return { mismatch: true }
    }
  }

  runNavigator() {
    if (this._isAuthPage) {
      this._router.navigate(['/auth/login']);
    } else {
      this._authModalService.setStep("login")
    }
  }

  ResendCode(): void {
    const resetPasswordValue: ResetPasswordUserData = {
      email: this._forgetSignalService.getUserEmail(),
      newPassword: this.resetPasswordForm.value.newPassword
    }

    if (this.resetPasswordForm.valid) {
      this._authLibService.ResetPassword(baseUrl, resetPasswordValue)
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        next: res => {
          this._forgetSignalService.setStep(1);
          this.runNavigator()
        },
        error: err => {
          console.log(err);
        }
      })
    }
  }

  ngOnDestroy(): void {
    this.$destroy.next('subscribeDestroy');
  }
}
