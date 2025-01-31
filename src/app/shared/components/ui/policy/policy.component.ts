import { Component } from '@angular/core';
import { policyRules } from '../../../../mock/policy-rules';

@Component({
  selector: 'app-policy',
  standalone: true,
  imports: [],
  templateUrl: './policy.component.html',
  styleUrl: './policy.component.scss'
})
export class PolicyComponent {


  policyRule=policyRules
}
