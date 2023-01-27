import React, {useState, useEffect} from "react";
import UserPhoto from "../../img/userpic-medium.jpg";
import {variables} from  "../../Variables";
import axios, { AxiosResponse } from "axios";
import {AnotherProfile} from "../AnotherProfile/AnotherProfile";

interface AnotherProfileConstructorProps {
   idUser?: string,
}

export const AnotherProfileConstructor = (props: AnotherProfileConstructorProps) => { 
    const [post, setPost] = React.useState(null);
  
    React.useEffect(() => {
      axios.get(variables.USER_URL + props.idUser).then((response) => {
        setPost(response.data);
      });
    }, []);
  
    if (!post) return null;

    return (
        <>  
          <AnotherProfile login = {post["login"]} numberOfPosts = {post["numberOfPosts"]} numberOfSubscribers = {post["numberOfSubscribers"]}/>
        </>
    )

  };
