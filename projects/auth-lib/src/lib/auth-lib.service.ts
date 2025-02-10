import { Injectable } from '@angular/core';
import { AuthApi } from './base/authApi.abstract';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiEndpoint } from './enums/Auth.endpoint';
import { AuthAPIAdapter } from './adapter/auth_api.adapter';
import { LoginUserData } from './interfaces/login-user-data';
import { LoginResponse } from './interfaces/login-response';
import { RegisterUserData } from './interfaces/register-user-data';
import { RegisterResponse } from './interfaces/register-response';
import { ForgetPasswordUserData } from './interfaces/forget-password-user-data';
import { ForgetPasswordApiRes } from './interfaces/forget-password-response';
import { VerifyCodeUserData } from './interfaces/verify-code-user-data';
import { VerifyCodeResponse } from './interfaces/verify-code-response';
import { ResetPasswordResponse } from './interfaces/reset-password-response';
import { ResetPasswordUserData } from './interfaces/reset-password-user-data';
import { LogoutResponse } from './interfaces/logout-response';


@Injectable({
  providedIn: 'root'
})
export class AuthLibService implements AuthApi {

  constructor(
    private _httpClient: HttpClient,
    private _AuthAPIAdapter: AuthAPIAdapter
  ) { }

  login(data: LoginUserData): Observable<LoginResponse> {
    return this._httpClient.post(ApiEndpoint.LOGIN, data).pipe(
      map((res: any) => this._AuthAPIAdapter.loginAdapter(res)),
    )
  }

  register(data: RegisterUserData): Observable<RegisterResponse> {
    return this._httpClient.post(ApiEndpoint.REGISTER, data).pipe(
      map((res: any) => this._AuthAPIAdapter.registerAdapter(res))
    )
  }


  forgetPassword(data: ForgetPasswordUserData): Observable<ForgetPasswordApiRes> {
    return this._httpClient.post(ApiEndpoint.FORGET_PASSWORD, data).pipe(
      map((res: any) => this._AuthAPIAdapter.forgetPassword(res))
    )
  }

  verifyResetCode(data: VerifyCodeUserData): Observable<VerifyCodeResponse> {
    return this._httpClient.post(ApiEndpoint.VERIFY_RESET_CODE, data).pipe(
      map((res: any) => this._AuthAPIAdapter.verifyCode(res))
    )
  }

  ResetPassword(data: ResetPasswordUserData): Observable<ResetPasswordResponse> {
    return this._httpClient.put(ApiEndpoint.RESET_PASSWORD, data).pipe(
      map((res:any)=>this._AuthAPIAdapter.resetPassword(res) )
    )
  }

  logOut(): Observable<LogoutResponse> {
    return this._httpClient.get(ApiEndpoint.LOG_OUT ).pipe(
      map((res:any)=>this._AuthAPIAdapter.logoutPassword(res) )
    )
  }




}
