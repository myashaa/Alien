import React, {useState, useEffect} from "react";
import UserPhoto from "../../img/userpic-medium.jpg";
import {variables} from  "../../Variables";
import axios, { AxiosResponse } from "axios";
import {AnotherProfile} from "../AnotherProfile/AnotherProfile";

interface AnotherProfileConstructorProps {
   idUser?: string,
}

export const AnotherProfileConstructor = (props: AnotherProfileConstructorProps) => { 
  const [user, setUser] = React.useState(null);
  
  React.useEffect(() => {
    axios.get(variables.USER_URL + props.idUser).then((response) => {
      setUser(response.data);
    });
  }, []);

  if (!user) return null;

  return (
      <>  
        <AnotherProfile login = {user["login"]} numberOfPosts = {user["numberOfPosts"]} numberOfSubscribers = {user["numberOfSubscribers"]} photo = {user["userPhotos"]}/>
      </>
  )

};
