import { Component } from '@angular/core';
import { AboutUsComponent } from "../../../shared/components/ui/about-us/about-us.component";
import { ReviewComponent } from "../../../shared/components/ui/review/review.component";
import { FeaturesComponent } from "../../../shared/components/ui/features/features.component";
import { InstgramComponent } from "../../../shared/components/ui/instgram/instgram.component";

@Component({
  selector: 'app-about-us-page',
  standalone: true,
  imports: [AboutUsComponent, ReviewComponent, FeaturesComponent, InstgramComponent],
  templateUrl: './about-us-page.component.html',
  styleUrl: './about-us-page.component.scss'
})
export class AboutUsPageComponent {

}
