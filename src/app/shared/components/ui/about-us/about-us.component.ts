import { Component } from '@angular/core';
import { SectionTagComponent } from '../section-tag/section-tag.component';
import { PrimaryBtnComponent } from '../primary-btn/primary-btn.component';
import { appFeaturesMockData } from '../../../../mock/app-features.mock';
@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [SectionTagComponent, PrimaryBtnComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  featuresList: string[] = appFeaturesMockData;
}
