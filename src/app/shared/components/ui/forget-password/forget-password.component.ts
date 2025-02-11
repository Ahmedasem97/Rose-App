import { Component, inject, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryBtnComponent } from '../primary-btn/primary-btn.component';
import { CustomInputComponent } from '../../business/custom-input/custom-input.component';
import { AuthLibService } from 'auth-lib';
import { baseUrl } from '../../../../core/environment/environment';
import { ForgetSignalService } from '../../../services/forget-signal.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [PrimaryBtnComponent, CustomInputComponent, ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent implements OnDestroy {
  $destroy = new Subject<string>();


  private _forgetSignalService = inject(ForgetSignalService);
  private _authLibService= inject(AuthLibService)

  forgetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  })

  forgetPasswordSubmit (): void {
    if (this.forgetPasswordForm.valid) {
      this._authLibService.forgetPassword(baseUrl , this.forgetPasswordForm.value)
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        next: res => {
          this._forgetSignalService.setUserEmail(this.forgetPasswordForm.value.email)
          this._forgetSignalService.setStep(2);
          

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
