import { Component, inject, OnInit } from '@angular/core';

import { RouterLink, RouterLinkActive } from '@angular/router';
import { ModalNavbarComponent } from "../../../shared/components/ui/modal-navbar/modal-navbar.component";
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ModalNavbarComponent, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  private readonly _TranslationService = inject(TranslationService)

  constructor() { }

  ngOnInit(): void {
    this._TranslationService.changeLang("en")
  }
}
