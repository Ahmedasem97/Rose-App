import { Component, Input } from '@angular/core';
import { OurTeam } from '../../../../core/interfaces/our-team.interface';
import { IconSection } from '../../../../core/interfaces/icons-section.interface';
import { IconsSectionComponent } from "../icons-section/icons-section.component";

@Component({
  selector: 'app-our-team-card',
  standalone: true,
  imports: [IconsSectionComponent],
  templateUrl: './our-team-card.component.html',
  styleUrl: './our-team-card.component.scss'
})
export class OurTeamCardComponent {
  @Input({ required: true }) getApi!: OurTeam;

  displayIcons: IconSection[] = [
    {icon: "fab fa-facebook"},
    {icon: "fab fa-instagram"},
    {icon: "fab fa-twitter"},
    {icon: "fab fa-youtube"},
  ]
}
