import { LoginApiResponse, LoginResponse } from "./loginResponse";
import { RegisterApiResponse, RegisterResponse } from "./register-response";

export interface Adapter {
    loginAdapter(data:LoginApiResponse):LoginResponse,
    registerAdapter(data:RegisterApiResponse):RegisterResponse,
}
