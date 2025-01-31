import { Component, OnInit } from '@angular/core';

import { RouterLink, RouterLinkActive } from '@angular/router';
import { ModalNavbarComponent } from "../../../shared/components/ui/modal-navbar/modal-navbar.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ModalNavbarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor() {}

 
}
