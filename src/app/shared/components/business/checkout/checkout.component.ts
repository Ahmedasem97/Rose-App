import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
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
import { isPlatformBrowser } from '@angular/common';
import GoogleMapsMarker from '../../../../core/interfaces/google-map-marker.interface';

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
export class CheckoutComponent implements OnInit, AfterViewInit, OnDestroy {
  shippingForm!: FormGroup;
  // Setup the map
  center!: google.maps.LatLng;
  mapOptions!: google.maps.MapOptions;
  marker!: GoogleMapsMarker;

  private readonly _defaultLat = 31.214639; // Default Lat
  private readonly _defaultLng = 29.945708; // Default Lng
  // inject services
  private readonly _platform = inject(PLATFORM_ID);

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
    if (!this.marker) {
      this.setMarker(this._defaultLat, this._defaultLng);
    }
    return this.marker;
  }

  setUpMap() {
    const location = this.getUserLocation();
    this.center = new google.maps.LatLng(location.lat, location.lng);
    this.setMarker(location.lat, location.lng);
    this.setMapOptions(this.center);
  }

  setMarker(lat: number, lng: number, applyAnimation: boolean = false) {
    this.marker = {
      position: { lat, lng },
    };

    if (applyAnimation) {
      this.marker.options = {
        animation: google.maps.Animation,
      };
    }
  }

  setMapOptions(center: google.maps.LatLng, zoom: number = 15) {
    this.mapOptions = {
      center: center,
      zoom: zoom,
    };
  }

  getUserLocation(): { lat: number; lng: number } {
    let lat = this._defaultLat;
    let lng = this._defaultLng;

    if (isPlatformBrowser(this._platform)) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          lat = position.coords.latitude;
          lng = position.coords.longitude;
        });
      }
    }

    return { lat, lng };
  }

  mapClick(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      this.marker.position = { lat, lng };
      this.shippingForm.patchValue({
        lat: lat,
        lng: lng,
      });

      console.log(this.shippingForm.value);
    }
  }
  //
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this._platform)) {
      if (window.google) {
        setTimeout(() => {
          this.setUpMap();
        }, 100);
      } else {
        console.log('Google API not loaded yet');
      }
    }
  }

  ngOnInit(): void {
    this.initShippingForm();
  }

  ngOnDestroy(): void {
    this.shippingForm.reset();
  }
}
