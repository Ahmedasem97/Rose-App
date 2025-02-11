import { CookieManagerService } from '../../core/services/cookie-manager.service';
import { inject, Injectable, signal } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class TokenManagerService {
  // Declare Variables
  private _tokenCookieName = 'token';
  private isLogedIn = signal(false)
  // Inject Services
  private readonly _cookieManagerService = inject(CookieManagerService);

  setLoginStatus(value: boolean) {
    this.isLogedIn.set(this.isUserLoggedIn())
  }
  getLoginStatus() {
    return this.isLogedIn()
  }
  /**
   * @summary Check if user already logged in or not
   * @returns true if user already logged in (token already exists) otherwise false
   */
  isUserLoggedIn(): boolean {
    return this._cookieManagerService.isCookieExists(this._tokenCookieName);
  }

  /**
   * @summary Retrieve the token from the cookie
   * @returns token value if token is already available otherwise null
   */
  getToken(): string | null {
    return this._cookieManagerService.getCookie(this._tokenCookieName);
  }

  /**
   * @param value the token value
   * @param expires [Optional] : the expiration of the token value
   * @summary Add the token in the cookie
   */
  setToken(value: string, expires?: number | Date) {
    if (expires) {
      this._cookieManagerService.setCookie(
        this._tokenCookieName,
        value,
        expires
      );
    } else {
      this._cookieManagerService.setCookie(this._tokenCookieName, value);
    }
  }

  /**
   * @summary Delete the token from the cookie
   */
  deleteToken() {
    this._cookieManagerService.deleteCookie(this._tokenCookieName);
  }
}
