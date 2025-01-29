import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from "./core/layout/navbar/navbar.component";

import { NavbarAuthComponent } from "./core/layout/navbar-auth/navbar-auth.component";

import { FlowbiteService } from './core/services/flowbite.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
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
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
  }
}
