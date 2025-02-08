import { CookieManagerService } from '../../core/services/cookie-manager.service';
import { inject, Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class TokenManagerService {
  private readonly _cookieManagerService = inject(CookieManagerService);

  tokenCookieName = 'token';

  /**
   * @summary Check if user already logged in or not
   * @returns true if user already logged in (token already exists) otherwise false
   */
  isUserLoggedIn(): boolean {
    return this._cookieManagerService.isCookieExists(this.tokenCookieName);
  }

  /**
   * @summary Retrieve the token from the cookie
   * @returns token value if token is already available otherwise null
   */
  getToken(): string | null {
    return this._cookieManagerService.getCookie(this.tokenCookieName);
  }

  /**
   * @param value
   * @param expires
   * @summary Add the token in the cookie
   */
  setToken(value: string, expires?: number | Date) {
    if (expires) {
      this._cookieManagerService.setCookie(
        this.tokenCookieName,
        value,
        expires
      );
    } else {
      this._cookieManagerService.setCookie(this.tokenCookieName, value);
    }
  }

  /**
   * @summary Delete the token from the cookie
   */
  deleteToken() {
    this._cookieManagerService.deleteCookie(this.tokenCookieName);
  }
}
