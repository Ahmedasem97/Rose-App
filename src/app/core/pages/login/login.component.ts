import { Component, inject, input, OnDestroy, OnInit } from '@angular/core';
import { CustomInputComponent } from '../../../shared/components/business/custom-input/custom-input.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PrimaryBtnComponent } from '../../../shared/components/ui/primary-btn/primary-btn.component';
import { TokenManagerService } from '../../../shared/services/token-manager.service';
import { AuthLibService } from 'auth-lib';
import { baseUrl, PASSWORD_PATTERN } from '../../environment/environment';
import { Router } from '@angular/router';
import { AuthModalService } from '../../../shared/services/auth-modal.service';
import { ModalControlerService } from '../../../shared/services/modal-controler.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CustomInputComponent, ReactiveFormsModule, PrimaryBtnComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit, OnDestroy {
  // Initialize the variables
  isAuthPage: boolean = false;
  isSubmitted: boolean = false;
  loginForm!: FormGroup;

  // Inject services
  private readonly _tokenManagerService = inject(TokenManagerService);
  private readonly _authLibService = inject(AuthLibService);
  private readonly _router = inject(Router);
  private readonly _authModalService = inject(AuthModalService);
  private readonly _modalControlerService = inject(ModalControlerService);

  initLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(PASSWORD_PATTERN),
      ]),
      rememberMe: new FormControl(''),
    });
  }

  goTo(component: string) {
    if (this.isAuthPage) {
      this._router.navigate([`/auth/${component}`]);
    } else {
      this._authModalService.setStep(component)
    }
  }

  goToHome() {
    this._router.navigate(['/main/home']);
  }

  submit() {
    this.isSubmitted = true;
    let formData = this.loginForm.value;

    let rememberMeOption = formData.rememberMe;

    let data = {
      email: formData.email,
      password: formData.password,
    };

    console.log(rememberMeOption);

    this._authLibService.login(baseUrl, data).subscribe({
      next: (res) => {
        this.isSubmitted = false;
        let severity = '';
        let title = '';
        let message = '';
        if (res.message == 'success') {
          severity = 'success';
          title = 'Welcome!';
          message = 'You have logged-in successfully';

          // Save token for 180 days  if remember me option is selected
          rememberMeOption
            ? this._tokenManagerService.setToken(res.token, 180)
            : this._tokenManagerService.setToken(res.token);
          this._modalControlerService.setModalStatus(false)
          this._tokenManagerService.setLoginStatus(true)
          console.log(res);
          
          this.goToHome();
        }
        // this._Toaster.showToaster(severity, title, message);
      },

      error: (errObj) => {
        this.isSubmitted = false;
        console.log(errObj.error.error);
      },
    });
  }

  ngOnInit(): void {
    this.isAuthPage = this._router.url.includes('auth');
    this.initLoginForm();
  }

  ngOnDestroy(): void {
    this.loginForm.reset();
  }
}
