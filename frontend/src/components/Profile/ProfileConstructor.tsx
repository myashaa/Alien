import React, {useState, useEffect} from "react";
import UserPhoto from "../../img/userpic-medium.jpg";
import {variables} from  "../../Variables";
import axios, { AxiosResponse } from "axios";
import {Profile} from "../Profile/Profile";

interface ProfileConstructorProps {
   idUser?: string,
}

export const ProfileConstructor = (props: ProfileConstructorProps) => { 
    const [post, setPost] = React.useState(null);
  
    React.useEffect(() => {
      axios.get(variables.USER_URL + props.idUser).then((response) => {
        setPost(response.data);
      });
    }, []);
  
    if (!post) return null;

    return (
        <>  
          <Profile login = {post["login"]} numberOfPosts = {post["numberOfPosts"]} numberOfSubscribers = {post["numberOfSubscribers"]}/>
        </>
    )

  };
