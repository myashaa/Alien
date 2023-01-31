import React, { useEffect } from "react";
import {useState } from 'react';
import 'chart.js/auto'; // ADD THIS

import { AnaliticPageConstructor, LikeMonthType } from "./AnaliticPageConstructor";
import { useActionData } from "react-router";
import axios from "axios";
import { variables } from "../../Variables";

export const AnaliticPage = () => {

  const [likeMonth, setLikeMonth] = useState(Array<LikeMonthType>);
  
  useEffect(() => {
    axios.get(variables.ANALITIC_LIKE_MONTH + localStorage.getItem('idUser')).then((response) => {
      setLikeMonth((data) => {
        return response.data;
      });
    });
  }, []);

  let likeMonthData: Array<number> = [];
  for(let i = 1; i < 32; i++)
  {
    let hasDate: number|undefined = likeMonth.find(like => like.date == i)?.count
    if(hasDate == null)
    {
      likeMonthData.push(0);
    }
    else
    {
      likeMonthData.push(hasDate)
    }
  }

  return (
      <>  
        <AnaliticPageConstructor likeMonth={likeMonthData}/>
      </>
  )
};

  