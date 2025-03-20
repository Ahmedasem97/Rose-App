import { Component, computed, effect, inject, OnInit, signal, WritableSignal } from '@angular/core';

import { RouterLink, RouterLinkActive } from '@angular/router';
import { ModalNavbarComponent } from "../../../shared/components/ui/modal-navbar/modal-navbar.component";
import { TranslateModule } from '@ngx-translate/core';
import { LangButtomComponent } from "../../../shared/components/business/lang-buttom/lang-buttom.component";
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ModalNavbarComponent, TranslateModule, LangButtomComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  
  cartNumber = computed(() => this._cartService.numberOfCart())

  private readonly _cartService = inject(CartService)

  ngOnInit(): void {
    this._cartService.getLoggedUserCart().subscribe({
      next: res => {
        this._cartService.numberOfCart.set(res.numOfCartItems)
      }
    })
  }

}
