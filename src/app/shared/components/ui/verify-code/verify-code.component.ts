import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomInputComponent } from "../../business/custom-input/custom-input.component";
import { PrimaryBtnComponent } from "../primary-btn/primary-btn.component";

@Component({
  selector: 'app-verify-code',
  standalone: true,
  imports: [ReactiveFormsModule, CustomInputComponent, PrimaryBtnComponent],
  templateUrl: './verify-code.component.html',
  styleUrl: './verify-code.component.scss'
})
export class VerifyCodeComponent {

    verifyCodeForm: FormGroup = new FormGroup({
      resetCode: new FormControl(null, [Validators.required]),
    })
}
