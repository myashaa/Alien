// login

export interface ILoginRequest {
    mail: string
    password: string
  }
  
  export interface ILoginResponse {
    accessToken: string
  }