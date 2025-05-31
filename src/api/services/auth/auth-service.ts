import axios from "axios";
import Cookies from 'js-cookie';
import type { IAuthResponse } from "@/api/data-types/data-types";
import { getContentType } from "@/api/api-helper";
import { saveToStorage } from "./auth-helper";


export const AuthService = {

  async login(email: string, password: string) {
    const response = await axios.post<IAuthResponse>(
      import.meta.env.VITE_API_URL + '/auth/login',
      { email, password },
      {
        headers: getContentType(),
      }
    )

    if(response.data.accessToken) saveToStorage(response.data);

    return response
  },



  async register(email: string, password: string) {
    const response = await axios.post<string, {data: IAuthResponse}>(
      import.meta.env.VITE_API_URL + '/auth/register',
      { email, password },
      {
        headers: getContentType(),
      }
    )
    if(response.data.accessToken) saveToStorage(response.data);
    return response
  },



  async getNewTokens(){
    const refreshToken = Cookies.get('refreshToken');
    const response = await axios.post<string, {data: IAuthResponse}>(
      import.meta.env.VITE_API_URL + '/auth/login/access-token',
      { refreshToken },
      {
        headers: getContentType(),
      }
    )

    if(response.data.accessToken) saveToStorage(response.data);

    return response
  }
}