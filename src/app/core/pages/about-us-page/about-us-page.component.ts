import { Component } from '@angular/core';
import { AboutUsComponent } from "../../../shared/components/ui/about-us/about-us.component";
import { ReviewComponent } from "../../../shared/components/ui/review/review.component";
import { FeaturesComponent } from "../../../shared/components/ui/features/features.component";
import { InstgramComponent } from "../../../shared/components/ui/instgram/instgram.component";
import { OurTeamComponent } from "../../../shared/components/ui/our-team/our-team.component";

@Component({
  selector: 'app-about-us-page',
  standalone: true,
  imports: [AboutUsComponent, ReviewComponent, FeaturesComponent, InstgramComponent, OurTeamComponent],
  templateUrl: './about-us-page.component.html',
  styleUrl: './about-us-page.component.scss'
})
export class AboutUsPageComponent {

}
