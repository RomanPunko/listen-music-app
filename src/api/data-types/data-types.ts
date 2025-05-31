export interface IUser {
  id: string;
  email: string;
}

export interface ITokens{
  accessToken: string;
  refreshToken: string;
}

export interface IAuthResponse extends ITokens {
  user: IUser; 
}