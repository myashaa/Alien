import { Dispatch } from "@reduxjs/toolkit"
import api from "../../api"
import { ILoginRequest, ILoginResponse } from "../../api/auth/types"
import { loginStart, loginSucess, loginFailure, logoutSuccess, loadProfileStart, loadProfileFailure, loadProfileSucess } from "./authReducer"
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

        localStorage.setItem('idUser', res.data.id.toString());

      } catch (e: any) {
        console.error(e)

        dispatch(loginFailure(e.message))
      }
    }

