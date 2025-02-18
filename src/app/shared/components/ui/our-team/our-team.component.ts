import { Component } from '@angular/core';
import { OurTeamCardComponent } from "../our-team-card/our-team-card.component";
import { OurTeam } from '../../../../core/interfaces/our-team.interface';

@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [OurTeamCardComponent],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.scss'
})
export class OurTeamComponent {

  ourTeamDisplay:OurTeam[] = [
    {
      image:"/our team 1.png",
      name:"ahmed mohamed",
      jobTitle:"Senior Manager"
    },
    {
      image:"/our team 2.png",
      name:"ahmed mohamed",
      jobTitle:"Senior Manager"
    },
    {
      image:"/our team 3.png",
      name:"ahmed mohamed",
      jobTitle:"Senior Manager"
    },
    {
      image:"/our team 4.png",
      name:"ahmed mohamed",
      jobTitle:"Senior Manager"
    },
  ]
}
