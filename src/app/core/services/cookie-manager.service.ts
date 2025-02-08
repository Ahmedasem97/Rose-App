import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Injectable({
  providedIn: 'root',
})
export class CookieManagerService {
  private readonly _platform = inject(PLATFORM_ID);
  private readonly _ssrCookieService = inject(SsrCookieService);

  /**
   * @param name : the cookie name
   * @summary Check if the given cookie name exists or not
   * @returns true if cookie available otherwise false
   * */
  isCookieExists(name: string): boolean {
    return this._ssrCookieService.check(name);
  }

  /**
   * @param name : the cookie name
   * @param value : the cookie value to be set
   * @param expires : the cookie expiration
   * @summary Add new cookie
   * */
  setCookie(name: string, value: string, expires?: number | Date) {
    if (isPlatformBrowser(this._platform)) {
      this._ssrCookieService.set(name, value, expires);
    }
  }

  /**
   * @param name : the cookie name
   * @summary Retrieve the cookie value based on the given cookie name
   * @returns the cookie value if cookie available otherwise null
   * */
  getCookie(name: string): string | null {
    if (isPlatformBrowser(this._platform) && this.isCookieExists(name)) {
      return this._ssrCookieService.get(name);
    }
    return null;
  }

  /**
   * @param name : the cookie name
   * @summary Delete the given cookie
   * @returns Deletes the cookie
   * */
  deleteCookie(name: string) {
    if (isPlatformBrowser(this._platform)) {
      this._ssrCookieService.delete(name);
    }
  }
}
