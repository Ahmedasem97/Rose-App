import { ForgetPasswordApiRes } from "../interfaces/forget-password-response";
import { LoginApiResponse, LoginResponse } from "../interfaces/login-response";
import { LogoutResponse } from "../interfaces/logout-response";
import { RegisterApiResponse, RegisterResponse } from "../interfaces/register-response";
import { ResetPasswordResponse } from "../interfaces/reset-password-response";
import { VerifyCodeResponse } from "../interfaces/verify-code-response";

export interface AdapterAbstract {
    loginAdapter(data:LoginApiResponse):LoginResponse,
    registerAdapter(data:RegisterApiResponse):RegisterResponse,
    forgetPassword(data:ForgetPasswordApiRes):ForgetPasswordApiRes,
    verifyCode(data:VerifyCodeResponse):VerifyCodeResponse,
    resetPassword(data:ResetPasswordResponse):ResetPasswordResponse,
    logoutPassword(data:LogoutResponse):LogoutResponse,
}
