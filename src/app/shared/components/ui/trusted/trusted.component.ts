import { Component } from '@angular/core';
import { TrustedInterface } from '../../../../core/interfaces/trusted';

@Component({
  selector: 'app-trusted',
  standalone: true,
  imports: [],
  templateUrl: './trusted.component.html',
  styleUrl: './trusted.component.scss'
})
export class TrustedComponent {

  companyImg:TrustedInterface[] = [
    { src: "/company_1.png", name: "coconut."},
    { src: "/company_2.png", name: "ginyard"},
    { src: "/company_3.png", name: "ingoude"},
    { src: "/company_4.png", name: "velvet"},
    { src: "/company_5.png", name: "ingoude"},
    { src: "/company_6.png", name: "habus"},
  ]

  
}
