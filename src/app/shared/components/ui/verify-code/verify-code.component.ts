import { Component, inject, OnDestroy } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CustomInputComponent } from '../../business/custom-input/custom-input.component';
import { PrimaryBtnComponent } from '../primary-btn/primary-btn.component';
import { AuthLibService } from 'auth-lib';
import {
  AnimationConfig,
  baseUrl,
} from '../../../../core/environment/environment';
import { ForgetSignalService } from '../../../services/forget-signal.service';
import { Subject, takeUntil } from 'rxjs';
import {
  animate,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import { authAnimation } from '../../../../animation/auth-animation';

@Component({
  selector: 'app-verify-code',
  standalone: true,
  imports: [ReactiveFormsModule, CustomInputComponent, PrimaryBtnComponent],
  templateUrl: './verify-code.component.html',
  styleUrl: './verify-code.component.scss',
  animations: [
    trigger('toggleWidget', [
      transition(':enter', [
        useAnimation(authAnimation, {
          params: {
            transformFrom: AnimationConfig.scale.hide,
            transformTo: AnimationConfig.scale.show,
            time: AnimationConfig.animationTime.normal,
            effect: AnimationConfig.transitionEffect.easeIn,
          },
        }),
      ]),
      transition(':leave', [
        useAnimation(authAnimation, {
          params: {
            transformFrom: AnimationConfig.scale.show,
            transformTo: AnimationConfig.scale.hide,
            time: AnimationConfig.animationTime.normal,
            effect: AnimationConfig.transitionEffect.easeIn,
          },
        }),
      ]),
    ]),
  ],
})
export class VerifyCodeComponent implements OnDestroy {
  $destroy = new Subject<string>();

  private _forgetSignalService = inject(ForgetSignalService);
  private _authLibService = inject(AuthLibService);

  verifyCodeForm: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [Validators.required]),
  });

  verifyCodeSumbit(): void {
    if (this.verifyCodeForm.valid) {
      this._authLibService
        .verifyResetCode(baseUrl, this.verifyCodeForm.value)
        .pipe(takeUntil(this.$destroy))
        .subscribe({
          next: (res) => {
            console.log(res);

            this._forgetSignalService.setStep(3);
          },
          error: (err) => {
            console.log(err);
          },
        });
    }
  }

  resendCode(): void {
    const resendCodeValue = {
      email: this._forgetSignalService.getUserEmail(),
    };
    this._authLibService
      .forgetPassword(baseUrl, resendCodeValue)
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        next: (res) => {},
        error: (err) => {
          console.log(err);
        },
      });
  }

  ngOnDestroy(): void {
    this.$destroy.next('subscribeDestroy');
  }
}
