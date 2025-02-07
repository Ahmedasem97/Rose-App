import { Component } from '@angular/core';
import { PrimaryBtnComponent } from "../primary-btn/primary-btn.component";

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [PrimaryBtnComponent],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {

}
