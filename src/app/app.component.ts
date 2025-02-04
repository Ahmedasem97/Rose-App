import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./core/layout/navbar/navbar.component";
import { FooterComponent } from "./core/layout/footer/footer.component";
import { FlowbiteService } from './core/services/flowbite.service';
import { AuthModalComponent } from "./shared/components/ui/auth-modal/auth-modal.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, AuthModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'rose';
  constructor (
    private _flowbiteService:FlowbiteService
  ){}
 

  ngOnInit(): void {
    this._flowbiteService.loadFlowbite(flowbite => {
      
    });
  }
}
