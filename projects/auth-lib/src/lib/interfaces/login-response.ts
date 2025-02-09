export interface LoginResponse {
    message: string,
    token: string,
    userEmail: string,
    role: string
}

export interface LoginApiResponse {
    message: string,
    token: string,
    user: {
        _id:string
        username:string
        firstname:string
        lastname:string
        email:string
        phone:string
        role:string
        isVerified:boolean,
        createdAt:string,
    }
}