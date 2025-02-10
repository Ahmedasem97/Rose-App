import { Component, inject, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CustomInputComponent, ReactiveFormsModule, PrimaryBtnComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  isSubmitted: boolean = false;
  canNavigate: boolean = false;
  loginForm!: FormGroup;

  private readonly _tokenManagerService = inject(TokenManagerService);
  private readonly _authLibService = inject(AuthLibService);

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

  ngOnInit(): void {
    this.initLoginForm();
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
          // this._TokenManagerService.setToken(res.token);
          this.canNavigate = true;
        } else {
          // let errorMsg = res.error.message;
          // severity = 'error';
          // title = 'Error!';
          // message = errorMsg;
        }

        // this._Toaster.showToaster(severity, title, message);
        // this.canNavigate && this._Router.navigate(['/main/dashboard']);
      },
    });
    console.log(this.loginForm);
  }
}
