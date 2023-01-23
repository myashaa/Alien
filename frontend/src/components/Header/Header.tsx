import React, {useState, useEffect} from "react";
import UserPhoto from "../../img/userpic-medium.jpg";
import {variables} from  "../../Variables";
import axios, { AxiosResponse } from "axios";
import {Profile} from "../Profile/Profile";
import { HeaderConstructor } from "./HeaderConstructor";

export const Header = () => { 
    const [post, setPost] = React.useState(null);
  
    React.useEffect(() => {
      axios.get(variables.MY_USER_URL).then((response) => {
        setPost(response.data);
      });
    }, []);

    const loginatedUser = true;
    const notLoginatedUser = false;
  
    if (!post)
    {
      return (
        <>  
          <HeaderConstructor login = {""} isLoginatedUser = {loginatedUser} />
        </>
    )
    }
    return (
        <>  
          <HeaderConstructor login = {post["login"]}  isLoginatedUser = {loginatedUser}/>
        </>
    )

  };
