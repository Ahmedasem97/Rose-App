import { Injectable } from '@angular/core';
import { Adapter } from '../interfaces/adapter';
import { LoginApiResponse, LoginResponse } from '../interfaces/loginResponse';
import { RegisterApiResponse, RegisterResponse } from '../interfaces/register-response';

@Injectable({
  providedIn: 'root'
})
export class AuthAPIAdapter implements Adapter{

  constructor() { }

  loginAdapter (data: LoginApiResponse): LoginResponse{
    return {
      message: data.message,
      token: data.token,
      userEmail: data.user.email
    }
  }

  registerAdapter (data:RegisterApiResponse):RegisterResponse {
    return {
      message: data.message
    }
  }

}
