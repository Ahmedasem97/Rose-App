import { Component, effect, inject, OnDestroy, OnInit } from '@angular/core';
import { ForgetPasswordComponent } from "../../../shared/components/ui/forget-password/forget-password.component";
import { VerifyCodeComponent } from "../../../shared/components/ui/verify-code/verify-code.component";
import { ResetPasswordComponent } from "../../../shared/components/ui/reset-password/reset-password.component";
import { ForgetSignalService } from '../../../shared/services/forget-signal.service';

@Component({
  selector: 'app-forget-pass-layout',
  standalone: true,
  imports: [ForgetPasswordComponent, VerifyCodeComponent, ResetPasswordComponent],
  templateUrl: './forget-pass-layout.component.html',
  styleUrl: './forget-pass-layout.component.scss'
})
export class ForgetPassLayoutComponent implements OnInit, OnDestroy {

  private _forgetSignalService = inject(ForgetSignalService);
  currentStep: number | null = 1;

  constructor() {
    // Use effect to track changes in the signal
    effect(() => {
      this.currentStep = this._forgetSignalService.getCurrentStep();
    });
  }

  ngOnInit(): void {
    // Initialize currentStep from the signal
    this._forgetSignalService.setStep(1);
    this.currentStep = this._forgetSignalService.getCurrentStep();

  }

  ngOnDestroy(): void {
    // Reset the signal when the component is destroyed
    this._forgetSignalService.setStep(null);
  }

}
