import { Component, OnInit, effect, inject } from '@angular/core';
import { FlowbiteService } from '../../services/flowbite.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthModalComponent } from "../../../shared/components/ui/auth-modal/auth-modal.component";
import { ModalComponent } from "../../../shared/components/ui/modal/modal.component";
import { ModalControlerService } from '../../../shared/services/modal-controler.service';
import { LangButtomComponent } from "../../../shared/components/business/lang-buttom/lang-buttom.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar-auth',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, AuthModalComponent, ModalComponent, LangButtomComponent, TranslateModule],
  templateUrl: './navbar-auth.component.html',
  styleUrl: './navbar-auth.component.scss'
})
export class NavbarAuthComponent implements OnInit {

  isOpen: boolean = false

  private readonly _modalControlerService = inject(ModalControlerService)

  constructor(private flowbiteService: FlowbiteService) {
    effect(() => {
      this.isOpen = this._modalControlerService.getModalStatus()
    });
  }

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
    });
  }

  openModal(): void {
    this._modalControlerService.setModalStatus(true)
    this.isOpen = this._modalControlerService.getModalStatus()

  }


}
