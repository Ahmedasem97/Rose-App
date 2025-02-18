import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { LangDropDown } from '../../../../core/interfaces/lang-drop-down.interface';
import { TranslationService } from '../../../../core/services/translation.service';
import { isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Lang } from '../../../../core/enums/lang.enum';

@Component({
  selector: 'app-lang-buttom',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './lang-buttom.component.html',
  styleUrl: './lang-buttom.component.scss'
})
export class LangButtomComponent implements OnInit {

  isDisabled: boolean = false
  selectedDropDown!: string

  private readonly _translationService = inject(TranslationService)
  private readonly _PLATFORM_ID = inject(PLATFORM_ID)

  

  dropDownList: Lang[] = [
    Lang.en,
    Lang.ar
  ]

  ngOnInit(): void {
    if (isPlatformBrowser(this._PLATFORM_ID)) {
      this._translationService.changeDirection()
      this.selectedDropDown = localStorage.getItem("lang") || "engilsh"
    }
  }

  openDropDown(): void {
    this.isDisabled = !this.isDisabled
  }

  changeLang(event: MouseEvent): void {
    const langValue = (event.target as HTMLAnchorElement).innerHTML.toLowerCase()
    this.selectedDropDown = langValue
    // localStorage.setItem("lang", langValue)
    this._translationService.changeLang(langValue)
  }
}
