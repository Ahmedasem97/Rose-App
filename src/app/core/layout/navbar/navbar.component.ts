import { Component, inject, OnInit } from '@angular/core';

import { RouterLink, RouterLinkActive } from '@angular/router';
import { ModalNavbarComponent } from "../../../shared/components/ui/modal-navbar/modal-navbar.component";
import { TranslateModule } from '@ngx-translate/core';
import { LangButtomComponent } from "../../../shared/components/business/lang-buttom/lang-buttom.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ModalNavbarComponent, TranslateModule, LangButtomComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor() { }
  
}
