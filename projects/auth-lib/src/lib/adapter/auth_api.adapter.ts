import { Injectable } from '@angular/core';
import { AdapterAbstract } from '../abstract/adapter.abstract';
import { LoginApiResponse, LoginResponse } from '../interfaces/login-response';
import { RegisterApiResponse, RegisterResponse } from '../interfaces/register-response';
import { ForgetPasswordApiRes } from '../interfaces/forget-password-response';
import { VerifyCodeResponse } from '../interfaces/verify-code-response';
import { ResetPasswordResponse } from '../interfaces/reset-password-response';
import { LogoutResponse } from '../interfaces/logout-response';

@Injectable({
  providedIn: 'root'
})
export class AuthAPIAdapter implements AdapterAbstract {

  constructor() { }

  loginAdapter(data: LoginApiResponse): LoginResponse {
    return {
      message: data.message,
      token: data.token,
      userEmail: data.user.email,
      role: data.user.role
    }
  }

  registerAdapter(data: RegisterApiResponse): RegisterResponse {
    return {
      message: data.message
    }
  }


  forgetPassword(data: ForgetPasswordApiRes): ForgetPasswordApiRes {
    return {
      message: data.message,
      info: data.info
    }
  }


  verifyCode(data: VerifyCodeResponse): VerifyCodeResponse {
    return {
      status: data.status
    }
  }


  resetPassword(data: ResetPasswordResponse): ResetPasswordResponse {
    return {
      message: data.message,
      token: data.token
    }
  }


  logoutPassword(data: LogoutResponse): LogoutResponse {
    return {
      message: data.message
    }
  }
}
