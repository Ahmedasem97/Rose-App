import { Component, Input } from '@angular/core';
import { OurTeam } from '../../../../core/interfaces/our-team.interface';

@Component({
  selector: 'app-our-team-card',
  standalone: true,
  imports: [],
  templateUrl: './our-team-card.component.html',
  styleUrl: './our-team-card.component.scss'
})
export class OurTeamCardComponent {
  @Input({ required: true }) getApi!: OurTeam;

}
