import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  viewChild,
} from '@angular/core';
import { PaymentSectionTitleComponent } from '../../ui/payment-section-title/payment-section-title.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { CustomInputComponent } from '../custom-input/custom-input.component';
import { PHONE_PATTERN } from '../../../../core/environment/environment';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    PaymentSectionTitleComponent,
    CustomInputComponent,
    ReactiveFormsModule,
    GoogleMapsModule,
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent implements OnInit, AfterViewInit {
  shippingForm!: FormGroup;

  // Setup the map

  map!: google.maps.Map;
  center = new google.maps.LatLng(31.214639, 29.945708); // Smouha, Alexandria as default
  mapOptions: google.maps.MapOptions = {
    center: this.center,
    zoom: 15,
  };

  marker = {
    position: {
      lat: 31.214639,
      lng: 29.945708,
    },
    options: {
      animation: google.maps.Animation,
    },
  };

  mapInit() {}

  initShippingForm() {
    this.shippingForm = new FormGroup({
      street: new FormControl('', [Validators.required]),

      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(PHONE_PATTERN),
      ]),
      city: new FormControl('', [Validators.required]),
      lat: new FormControl('', [Validators.required]),
      lng: new FormControl('', [Validators.required]),
    });
  }

  get markerOptions() {
    return this.marker;
  }

  mapClick(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      this.marker.position = { lat, lng };
      console.log('Latitude:', lat);
      console.log('Longitude:', lng);

      this.shippingForm.patchValue({
        lat: lat,
        lng: lng,
      });

      console.log(this.shippingForm.value);
    }
  }

  ngAfterViewInit() {
    this.mapInit();
  }
  ngOnInit(): void {
    this.initShippingForm();
  }
}
