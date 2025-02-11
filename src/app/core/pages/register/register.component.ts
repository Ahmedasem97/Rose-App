import { Component, inject, OnDestroy } from '@angular/core';
import {
  baseUrl,
  NAME_PATTERN,
  PASSWORD_PATTERN,
  PHONE_PATTERN,
} from '../../environment/environment';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthLibService } from 'auth-lib';
import { FormUtilsService } from '../../../shared/services/form-utils.service';
import { CustomFormValidatorsService } from '../../../shared/services/custom-form-validators.service';
import { CustomInputComponent } from '../../../shared/components/business/custom-input/custom-input.component';
import { PrimaryBtnComponent } from '../../../shared/components/ui/primary-btn/primary-btn.component';
import { Router } from '@angular/router';
import { InputValidationFeedbackComponent } from '../../../shared/components/ui/input-validation-feedback/input-validation-feedback.component';
import { AuthModalService } from '../../../shared/services/auth-modal.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CustomInputComponent,
    ReactiveFormsModule,
    PrimaryBtnComponent,
    InputValidationFeedbackComponent,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnDestroy {
  // Initialize the variables
  isSubmitted: boolean = false;
  passNotMatched: boolean = false;
  registerForm!: FormGroup;
  private _isAuthPage: boolean = false;
  // Inject services
  private readonly _authLibService = inject(AuthLibService);
  private readonly _FormUtilsService = inject(FormUtilsService);
  private readonly _customFormValidatorsService = inject(
    CustomFormValidatorsService
  );
  private readonly _router = inject(Router);
  private readonly _authModalService=inject(AuthModalService)

  initRegisterForm() {
    this.registerForm = new FormGroup(
      {
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
        rePassword: new FormControl('', [
          Validators.required,
          Validators.pattern(PASSWORD_PATTERN),
        ]),
        phone: new FormControl('', [
          Validators.required,
          Validators.pattern(PHONE_PATTERN),
        ]),
        gender: new FormControl('', [Validators.required]),
      },
      { validators: this._customFormValidatorsService.confirmPasswordValidator }
    );
    // By default disable rePassword , enable it only when password is valid
    this._FormUtilsService.disableField(this.registerForm, 'rePassword');
  }

  /**
   * @summary Check if the [ Password ] input entered without validation error, if so then enable the [ Re-Password ] input otherwise disable the [ Re-Password ] input
   */
  controlRePasswordDisplay() {
    if (this.registerForm.get('password')?.valid) {
      this._FormUtilsService.enableField(this.registerForm, 'rePassword');
    } else {
      this._FormUtilsService.disableField(this.registerForm, 'rePassword');
      this._FormUtilsService.clearField(this.registerForm, 'rePassword');
    }
  }

  checkPassMisMatch() {
    if (
      this.registerForm.get('password') !==
        this.registerForm.get('rePassword') &&
      this.registerForm.get('rePassword')?.touched
    ) {
      this.passNotMatched = true;
    } else {
      this.passNotMatched = false;
    }
  }

  /**
   * @summary Control how the navigation will performed
   */
  runNavigator() {
    if (this._isAuthPage) {
      this._router.navigate(['/auth/login']);
    } else {
      this._authModalService.setStep("login")
    }
  }

  goToLogin() {
    this.runNavigator();
  }

  trackPasswordChanges() {
    this.registerForm.get('password')?.valueChanges.subscribe(() => {
      this.controlRePasswordDisplay();
    });
  }

  trackRePasswordChanges() {
    this.registerForm.get('rePassword')?.valueChanges.subscribe(() => {
      this.checkPassMisMatch();
    });
  }

  submit() {
    this.isSubmitted = true;
    let formData = this.registerForm.value;
    console.log(this.registerForm);
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
        console.log('-----------------');
        console.log(errObj);
      },
    });
  }

  ngOnInit(): void {
    this._isAuthPage = this._router.url.includes('auth');
    this.initRegisterForm();
    this.trackPasswordChanges();
    this.trackRePasswordChanges();
  }

  ngOnDestroy(): void {
    this.registerForm.reset();
  }
}
