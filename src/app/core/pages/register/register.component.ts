import { Component, inject } from '@angular/core';
import {
  baseUrl,
  NAME_PATTERN,
  PASSWORD_PATTERN,
} from '../../environment/environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthLibService } from 'auth-lib';
import { Router } from 'express';
import { FormUtilsService } from '../../../shared/services/form-utils.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  // Initialize the variables
  isSubmitted: boolean = false;
  registerForm!: FormGroup;
  private _isAuthPage: boolean = false;
  // Inject services
  private readonly _authLibService = inject(AuthLibService);
  private readonly _FormUtilsService = inject(FormUtilsService);
  private readonly _router = inject(Router);

  initRegisterForm() {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.pattern(NAME_PATTERN),
        Validators.required,
      ]),
      lastName: new FormControl('', [
        Validators.pattern(NAME_PATTERN),
        Validators.required,
      ]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(PASSWORD_PATTERN),
      ]),
      rePassword: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
    });
    // By default disable rePassword , enable it only when password is valid
    this._FormUtilsService.disableField(this.registerForm, 'rePassword');
  }

  passwordMatchValidator() {}

  /**
   * @summary Check if the [ Password ] input entered without validation error, if so then enable the [ Re-Password ] input otherwise disable the [ Re-Password ] input
   */
  control_RePassword() {
    if (this.registerForm.get('password')?.valid) {
      this._FormUtilsService.enableField(this.registerForm, 'rePassword');
    } else {
      this._FormUtilsService.disableField(this.registerForm, 'rePassword');
      this._FormUtilsService.clearField(this.registerForm, 'rePassword');
    }
  }

  /**
   * @summary Control how the navigation will performed
   */
  runNavigator() {
    if (this._isAuthPage) {
      this._router.navigate(['/auth/login']);
    } else {
      //TODO Switch The Component
    }
  }

  submit() {
    this.isSubmitted = true;
    let formData = this.registerForm.value;

    this._authLibService.register(baseUrl, formData).subscribe({
      next: (res) => {
        this.isSubmitted = false;
        let severity = '';
        let title = '';
        let message = '';
        if (res.message == 'success') {
          severity = 'success';
          title = 'Good Job!';
          message = 'You have Created the Account successfully';
          // this._Toaster.showToaster(severity, title, message);
          this.runNavigator();
        }
      },

      error: (errObj) => {
        this.isSubmitted = false;
        console.log(errObj);
      },
    });
  }

  ngOnInit(): void {
    this._isAuthPage = this._router.url.includes('auth');
    this.initRegisterForm();
  }
}
