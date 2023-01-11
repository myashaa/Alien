import React, {useState, useEffect} from "react";
import styles from "./Subscribers.module.css";
import baseStyles from "../../index.module.css";
import UserPhoto from "../../img/userpic-medium.jpg";
import {variables} from  "../../Variables";
import axios, { AxiosResponse } from "axios";
import {Profile} from "../Profile/Profile";

export const List = () => { 
    const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

    const [post, setPost] = React.useState(null);
  
    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setPost(response.data);
      });
    }, []);
  
    if (!post) return null;

    return (
        <>  
          <Profile login = {post["title"]} numberOfPosts = {post["id"]} numberOfSubscribers = {post["id"]}/>
        </>
    )

  };
