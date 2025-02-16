import { Component, effect, inject, OnInit ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { FlowbiteService } from './core/services/flowbite.service';
import { TokenManagerService } from './shared/services/token-manager.service';
import { NavbarAuthComponent } from "./core/layout/navbar-auth/navbar-auth.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, NavbarAuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements OnInit {
  title = 'rose';
  isLogedIn!: boolean

  private readonly _tokenManagerService = inject(TokenManagerService)

  constructor(private _flowbiteService: FlowbiteService) {
    effect(() => {
      this.isLogedIn = this._tokenManagerService.getLoginStatus() || this._tokenManagerService.isUserLoggedIn()
      
    });
  }

  ngOnInit(): void {
    this._flowbiteService.loadFlowbite((flowbite) => { });
    
  }


}
