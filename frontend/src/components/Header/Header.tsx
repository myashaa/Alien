import React, {useState, useEffect} from "react";
import UserPhoto from "../../img/userpic-medium.jpg";
import {variables} from  "../../Variables";
import axios, { AxiosResponse } from "axios";
import {Profile} from "../Profile/Profile";
import { HeaderConstructor } from "./HeaderConstructor";
import { useSelector } from "react-redux";
import { IRootState } from "../../store";

export const Header = () => { 
    const [user, setUser] = React.useState(null);
  
    React.useEffect(() => {
      axios.get(variables.MY_USER_URL).then((response) => {
        setUser(response.data);
      });
    }, []);

    const isLoggedIn = useSelector(
      (state: IRootState) => !!state.auth.authData.accessToken
    );
  
    if (!user)
    {
      return (
        <>  
          <HeaderConstructor login = {""} isLoginatedUser = {isLoggedIn} photo = {[]}/>
        </>
    )
    }
    return (
        <>  
          <HeaderConstructor login = {user["login"]}  isLoginatedUser = {isLoggedIn} photo = {user["userPhotos"]}/>
        </>
    )

  };
