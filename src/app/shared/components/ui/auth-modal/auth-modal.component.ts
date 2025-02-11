import { Component, effect, inject, OnDestroy, OnInit } from '@angular/core';
import { RegisterComponent } from "../../../../core/pages/register/register.component";
import { LoginComponent } from "../../../../core/pages/login/login.component";
import { ForgetPassLayoutComponent } from "../../../../core/pages/forget-pass-layout/forget-pass-layout.component";
import { AuthModalService } from '../../../services/auth-modal.service';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [RegisterComponent, LoginComponent, ForgetPassLayoutComponent],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.scss'
})
export class AuthModalComponent implements OnInit, OnDestroy{

  currentStep!: string

    private _authModalService = inject(AuthModalService);
  

    constructor() {
      // Use effect to track changes in the signal
      effect(() => {
        this.currentStep = this._authModalService.getCurrentStep();
      });
    }
  
    ngOnInit(): void {
      // Initialize currentStep from the signal
      this._authModalService.setStep("login");
      this.currentStep = this._authModalService.getCurrentStep();
  
    }
  
    ngOnDestroy(): void {
      // Reset the signal when the component is destroyed
      this._authModalService.setStep("login");
    }
  
}
