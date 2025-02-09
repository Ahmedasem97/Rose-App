import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryBtnComponent } from '../../../shared/components/ui/primary-btn/primary-btn.component';
import { CustomInputComponent } from '../../../shared/components/business/custom-input/custom-input.component';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [PrimaryBtnComponent, CustomInputComponent, ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {

  forgetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required]),
  })


}
