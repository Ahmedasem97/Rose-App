import { baseUrl } from './../../../../src/app/core/environment/environment.prod';
import { Injectable } from '@angular/core';
import { AuthApi } from './base/authApi.abstract';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiEndpoint } from './enums/Auth.endpoint';
import { AuthAPIAdapter } from './adapter/auth_api.adapter';
import { LoginUserData } from './interfaces/login-user-data';
import { LoginResponse } from './interfaces/loginResponse';
import { RegisterUserData } from './interfaces/register-user-data';

@Injectable({
  providedIn: 'root'
})
export class AuthLibService implements AuthApi {

  constructor(
    private _httpClient:HttpClient,
    private _AuthAPIAdapter:AuthAPIAdapter
  ) { }

  login(baseUrl:string ,data: LoginUserData): Observable<LoginResponse> {
      return this._httpClient.post(baseUrl + ApiEndpoint.LOGIN , data).pipe(
        map( (res:any) => this._AuthAPIAdapter.loginAdapter(res)),
        
      )
  }

  register(baseUrl:string, data: RegisterUserData): Observable<any> {
      return this._httpClient.post(baseUrl + ApiEndpoint.REGISTER , data).pipe(
        map((res:any) => this._AuthAPIAdapter.registerAdapter(res))
      )
  }


  forgetPassword (baseUrl:string, data: any): Observable<any> {
    return this._httpClient.post(baseUrl + ApiEndpoint.FORGET_PASSWORD , data)
  }

  verifyResetCode (baseUrl:string, data: any): Observable<any> {
    return this._httpClient.post(baseUrl + ApiEndpoint.VERIFY_RESET_CODE , data)
  }

  ResetPassword (baseUrl:string, data: any): Observable<any> {
    return this._httpClient.put(baseUrl + ApiEndpoint.RESET_PASSWORD , data)
  }

  logOut(): Observable<any> {
      return this._httpClient.get(baseUrl + ApiEndpoint.LOG_OUT)
  }








}
