import { Observable } from "rxjs";


export abstract class AuthApi {
    abstract login(baseUrl:string ,data: any): Observable<any>;
    abstract register(baseUrl:string ,data: any): Observable<any>;
    abstract forgetPassword(baseUrl:string ,data: any): Observable<any>;
    abstract verifyResetCode(baseUrl:string ,data: any): Observable<any>;
    abstract ResetPassword(baseUrl:string ,data: any): Observable<any>;
    abstract logOut(): Observable<any>;


}