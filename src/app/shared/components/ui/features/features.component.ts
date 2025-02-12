import { Component } from '@angular/core';
import { features } from '../../../../core/interfaces/feature.interface';
import { CategoryCardComponent } from "../../business/category-card/category-card.component";

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  featureData: features[] = [
    {
      image: "/free delivery.png",
      title: "Free Delivery",
      desc: "Orders Over $120"
    },
    {
      image: "/get refund.png",
      title: "Get Refund",
      desc: "Within 30 Days Returns"
    },
    {
      image: "/safe payment.png",
      title: "Safe Payment",
      desc: "100% Secure Payment"
    },
    {
      image: "/support.png",
      title: "Free Delivery",
      desc: "Orders Over $120"
    },
  ]
}
