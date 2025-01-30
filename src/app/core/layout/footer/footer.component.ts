import { Component, OnInit } from '@angular/core';
import { FlowbiteService } from '../../services/flowbite.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {


  
    constructor(private flowbiteService: FlowbiteService) {}
  
    ngOnInit(): void {
      this.flowbiteService.loadFlowbite(flowbite => {
        // Your custom code here
        console.log('Flowbite loaded', flowbite);
      });
    }
}
