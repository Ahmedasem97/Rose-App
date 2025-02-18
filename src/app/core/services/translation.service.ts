import { Injectable, Inject, PLATFORM_ID, inject, Renderer2, RendererFactory2, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class TranslationService {
  defaultLang = 'english';
  isRtl = signal(false)
  private renderer: Renderer2;

  constructor(
    private rendererFactory: RendererFactory2,
    private translateService: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('lang');
      if (savedLang) {
        this.defaultLang = savedLang;
      }
      this.translateService.setDefaultLang(this.defaultLang);
      this.translateService.use(this.defaultLang);
      this.changeDirection()
    }
  }

  changeLang(lang: string) {
    this.translateService.use(lang);
    this.translateService.setDefaultLang(lang);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', lang);
    }
    this.changeDirection()
    if (lang == "english") {
      this.isRtl.set(false)
    }else {
      this.isRtl.set(true)

    }
  }

  changeDirection() {
    const savedLang = localStorage.getItem("lang") || "english"
    if (savedLang == "english") {
      this.renderer.setAttribute(document.documentElement, "dir", "ltr")
      this.renderer.setAttribute(document.documentElement, "lang", "en")
    }else if (savedLang == "arabic"){
      this.renderer.setAttribute(document.documentElement, "dir", "rtl")
      this.renderer.setAttribute(document.documentElement, "lang", "ar")
    }
  }
}