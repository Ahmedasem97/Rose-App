import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from "./core/layout/navbar/navbar.component";
import { NavbarAuthComponent } from "./core/layout/navbar-auth/navbar-auth.component";
import { FooterComponent } from "./core/layout/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  title = 'rose';

 
}
