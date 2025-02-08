import { Component } from '@angular/core';
import { PrimaryBtnComponent } from "../primary-btn/primary-btn.component";
import { CustomInputComponent } from "../../business/custom-input/custom-input.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
