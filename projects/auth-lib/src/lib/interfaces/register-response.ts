export interface RegisterResponse {
    message:string
}


export interface RegisterApiResponse {
    message: string,
    token: string,
    user: {
        username: string,
        firstName: string,
        lastName: string,
        email: string,
        phone: number,
        role: string,
        isVerified: boolean,
        _id: string,
        createdAt: string
    }
}