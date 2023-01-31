import React, {useState, useEffect} from "react";
import UserPhoto from "../../img/userpic-medium.jpg";
import {variables} from  "../../Variables";
import axios, { AxiosResponse } from "axios";
import {Profile} from "../Profile/Profile";

interface ProfileConstructorProps {
   idUser: string | null,
}

export const ProfileConstructor = (props: ProfileConstructorProps) => { 
    const [user, setUser] = React.useState(null);
  
    React.useEffect(() => {
      axios.get(variables.USER_URL + props.idUser).then((response) => {
        setUser(response.data);
      });
    }, []);
  
    if (!user) return null;

    return (
        <>  
          <Profile login = {user["login"]} numberOfPosts = {user["numberOfPosts"]} numberOfSubscribers = {user["numberOfSubscribers"]} photo = {user["userPhotos"]}/>
        </>
    )

  };
