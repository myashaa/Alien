import { Dispatch } from "@reduxjs/toolkit"
import api from "../../api"
import { ILoginRequest, ILoginResponse } from "../../api/auth/types"
import { loginStart, loginSucess, loginFailure, logoutSuccess,loadProfileStart, loadProfileFailure, loadProfileSucess } from "./authReducer"
import { store } from ".."
import axios, { AxiosPromise } from "axios"
import { isTokenExpired } from "../../utils/jwt"



export const loginUser =
  (data: ILoginRequest) =>
    async (dispatch: Dispatch<any>): Promise<void> => {
      try {
        dispatch(loginStart())

        const res = await axios.post("https://localhost:44390/api/auth/login", data);

        store.dispatch(loginSucess(res.data));

        localStorage.setItem('token', res.data.access_token);
        //change to id from token
        //localStorage.setItem('idUser', res.data.id.toString());
        localStorage.setItem('idUser', "1");
        
      } catch (e: any) {
        console.error(e)

        dispatch(loginFailure(e.message))
      }
    }

export const logoutUser =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
      try {
        await api.auth.logout()

        dispatch(logoutSuccess())

        //history.push('/')
      } catch (e) {
          console.error(e)
      }
  }

export const getProfile = () =>
  async (dispatch: Dispatch<any>): Promise<void> => {
    try {
      dispatch(loadProfileStart())

      const res = await api.auth.getProfile()

      dispatch(loadProfileSucess(res.data))
    } catch (e: any) {
      console.error(e)

      dispatch(loadProfileFailure(e.message))
    }
  }

// переменная для хранения запроса токена (для избежания race condition)
let refreshTokenRequest: AxiosPromise<ILoginResponse> | null = null

export const getAccessToken =
    () =>
    async (dispatch: Dispatch<any>): Promise<string | null> => {
        try {
            const accessToken = store.getState().auth.authData.accessToken

            if (!accessToken || isTokenExpired(accessToken)) {
              if (refreshTokenRequest === null) {
                  refreshTokenRequest = api.auth.refreshToken()
              }

              const res = await refreshTokenRequest
              refreshTokenRequest = null

              dispatch(loginSucess(res.data.accessToken))

              return res.data.accessToken
            }
            
            return accessToken
        } catch (e) {
            console.error(e)

            return null
        }
    }