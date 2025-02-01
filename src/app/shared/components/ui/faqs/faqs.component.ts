import { Component } from '@angular/core';
import { faqsRules } from '../../../../mock/faqs-rules';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss'
})
export class FAQSComponent {

  faqsrule=faqsRules

}
