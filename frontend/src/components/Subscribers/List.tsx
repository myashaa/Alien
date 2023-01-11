import React, {useState, useEffect} from "react";
import styles from "./Subscribers.module.css";
import baseStyles from "../../index.module.css";
import UserPhoto from "../../img/userpic-medium.jpg";
import {variables} from  "../../Variables";
import axios, { AxiosResponse } from "axios";

export const List = (props: any) => { 
    const [superVillains, setSuperVillains] = useState([]);
 
    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
        setSuperVillains((data) => {
          return response.data;
        });
      });
    }, []);

    return (
        <>  
            <div >
                <ul> 
                 {superVillains.map((sv) =>
                     <div key = {sv["id"]}>
                     <span>{sv["title"]}</span>
                 </div>)}
                </ul>
            </div>
        </>
    )

  };
