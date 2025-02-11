import { Component } from '@angular/core';
import { delivery } from '../../../../mock/delivery';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.scss'
})
export class DeliveryComponent {

  deliveryData=delivery

}
