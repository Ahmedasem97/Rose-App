import { Component, inject, input, OnInit } from '@angular/core';
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
import { baseUrl } from '../../environment/environment';
import { NavigationTypes } from '../../interfaces/navigation-types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CustomInputComponent, ReactiveFormsModule, PrimaryBtnComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  // Inputs
  navigationType = input.required<NavigationTypes>();
  navigateTo = input.required<string>();

  // initialize the variables
  isSubmitted: boolean = false;
  loginForm!: FormGroup;

  // inject services
  private readonly _tokenManagerService = inject(TokenManagerService);
  private readonly _authLibService = inject(AuthLibService);
  private readonly _router = inject(Router);

  initLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$`
        ),
      ]),
      rememberMe: new FormControl(''),
    });
  }

  runNavigator() {
    switch (this.navigationType()) {
      case 'page':
        this._router.navigate([this.navigateTo]);
        break;
      case 'switchComponent':
        //TODO: Switch Componenets
        break;
    }
  }

  submit() {
    this.isSubmitted = true;
    let formData = this.loginForm.value;

    let rememberMeOption = formData.rememberMe;

    let data = {
      email: formData.email,
      password: formData.password,
    };

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
        }
        // this._Toaster.showToaster(severity, title, message);
        this.runNavigator();
      },

      error: (errObj) => {
        this.isSubmitted = false;
        console.log(errObj);
      },
    });
  }

  ngOnInit(): void {
    this.initLoginForm();
  }
}
