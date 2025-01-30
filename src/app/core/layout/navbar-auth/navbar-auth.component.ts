import { Component, OnInit } from '@angular/core';
import { FlowbiteService } from '../../services/flowbite.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-auth',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar-auth.component.html',
  styleUrl: './navbar-auth.component.scss'
})
export class NavbarAuthComponent implements OnInit {

  constructor(private flowbiteService: FlowbiteService) {}
  
    ngOnInit(): void {
      this.flowbiteService.loadFlowbite(flowbite => {
        // Your custom code here
        console.log('Flowbite loaded', flowbite);
      });
    }

}
