import { Observable } from "rxjs";
import { LoginUserData } from "../interfaces/login-user-data";
import { LoginResponse } from "../interfaces/login-response";
import { RegisterUserData } from "../interfaces/register-user-data";
import { RegisterResponse } from "../interfaces/register-response";
import { ForgetPasswordApiRes } from "../interfaces/forget-password-response";
import { ForgetPasswordUserData } from "../interfaces/forget-password-user-data";
import { VerifyCodeUserData } from "../interfaces/verify-code-user-data";
import { VerifyCodeResponse } from "../interfaces/verify-code-response";
import { ResetPasswordUserData } from "../interfaces/reset-password-user-data";
import { ResetPasswordResponse } from "../interfaces/reset-password-response";



export abstract class AuthApi {
    abstract login(data: LoginUserData): Observable<LoginResponse>;
    abstract register(data: RegisterUserData): Observable<RegisterResponse>;
    abstract forgetPassword(data: ForgetPasswordUserData): Observable<ForgetPasswordApiRes>;
    abstract verifyResetCode(data: VerifyCodeUserData): Observable<VerifyCodeResponse>;
    abstract ResetPassword(data: ResetPasswordUserData): Observable<ResetPasswordResponse>;
    abstract logOut(): Observable<any>;



}