import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Injectable({
  providedIn: 'root',
})
export class CookieManagerService {
  private readonly _platform = inject(PLATFORM_ID);
  private readonly _SsrCookieService = inject(SsrCookieService);

  isCookieExists(name: string): boolean {
    return this._SsrCookieService.check(name);
  }

  setCookie(name: string, value: string, expires: number) {
    if (isPlatformBrowser(this._platform)) {
      this._SsrCookieService.set(name, value, expires);
    }
  }

  getCookie(name: string): string | null {
    if (isPlatformBrowser(this._platform) && this.isCookieExists(name)) {
      return this._SsrCookieService.get(name);
    }
    return null;
  }

  deleteCookie(name: string) {
    if (isPlatformBrowser(this._platform)) {
      this._SsrCookieService.delete(name);
    }
  }
}
