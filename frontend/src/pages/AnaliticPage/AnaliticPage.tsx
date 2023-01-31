import React, { useEffect } from "react";
import {useState } from 'react';
import 'chart.js/auto'; // ADD THIS

import { AnaliticPageConstructor, GenderType, LikeMonthType } from "./AnaliticPageConstructor";
import { useActionData } from "react-router";
import axios from "axios";
import { variables } from "../../Variables";

export const AnaliticPage = () => {

  const [likeMonth, setLikeMonth] = useState(Array<LikeMonthType>);
  const [likeYear, setLikeYear] = useState(Array<LikeMonthType>);
  const [commentMonth, setCommentMonth] = useState(Array<LikeMonthType>);
  const [commentYear, setCommentYear] = useState(Array<LikeMonthType>);
  const [userMonth, setUserMonth] = useState(Array<LikeMonthType>);
  const [userYear, setUserYear] = useState(Array<LikeMonthType>);
  const [gender, setGender] = useState(Array<GenderType>);

  let today = new Date().getDate();
  let currentMonth = new Date().getMonth();
  
  useEffect(() => {
    axios.get(variables.ANALITIC_LIKE_MONTH + localStorage.getItem('idUser')).then((response) => {
      setLikeMonth((data) => {
        return response.data;
      });
    });
    axios.get(variables.ANALITIC_LIKE_YEAR + localStorage.getItem('idUser')).then((response) => {
      setLikeYear((data) => {
        return response.data;
      });
    });
    axios.get(variables.ANALITIC_COMMENT_MONTH + localStorage.getItem('idUser')).then((response) => {
      setCommentMonth((data) => {
        return response.data;
      });
    });
    axios.get(variables.ANALITIC_COMMENT_YEAR + localStorage.getItem('idUser')).then((response) => {
      setCommentYear((data) => {
        return response.data;
      });
    });
    axios.get(variables.ANALITIC_NEW_MONTH + localStorage.getItem('idUser')).then((response) => {
      setUserMonth((data) => {
        return response.data;
      });
    });
    axios.get(variables.ANALITIC_NEW_YEAR + localStorage.getItem('idUser')).then((response) => {
      setUserYear((data) => {
        return response.data;
      });
    });
    axios.get(variables.ANALITIC_GENDER + localStorage.getItem('idUser')).then((response) => {
      setGender((data) => {
        return response.data;
      });
    });
  }, []);

  let likeMonthData: Array<number> = [];
  for(let i = 1; i < today+1 ; i++)
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
  let likeYearData: Array<number> = [];
  for(let i = 1; i < currentMonth+2; i++)
  {
    let hasDate: number|undefined = likeYear.find(like => like.date == i)?.count
    if(hasDate == null)
    {
      likeYearData.push(0);
    }
    else
    {
      likeYearData.push(hasDate)
    }
  }
  let commentMonthData: Array<number> = [];
  for(let i = 1; i < today+1; i++)
  {
    let hasDate: number|undefined = commentMonth.find(like => like.date == i)?.count
    if(hasDate == null)
    {
      commentMonthData.push(0);
    }
    else
    {
      commentMonthData.push(hasDate)
    }
  }
  let commentYearData: Array<number> = [];
  for(let i = 1; i < currentMonth+2; i++)
  {
    let hasDate: number|undefined = commentYear.find(like => like.date == i)?.count
    if(hasDate == null)
    {
      commentYearData.push(0);
    }
    else
    {
      commentYearData.push(hasDate)
    }
  }
  let userMonthData: Array<number> = [];
  for(let i = 1; i < today+1 ; i++)
  {
    let hasDate: number|undefined = userMonth.find(like => like.date == i)?.count
    if(hasDate == null)
    {
      userMonthData.push(0);
    }
    else
    {
      userMonthData.push(hasDate)
    }
  }
  let userYearData: Array<number> = [];
  for(let i = 1; i < currentMonth+2; i++)
  {
    let hasDate: number|undefined = userYear.find(like => like.date == i)?.count
    if(hasDate == null)
    {
      userYearData.push(0);
    }
    else
    {
      userYearData.push(hasDate)
    }
  }
  let genderData: Array<number> = [];
  for(let i = 0; i < 3; i++)
  {
    let hasDate: number|undefined = gender.find(like => like.gender == i)?.count;
    if(hasDate == null)
    {
      genderData.push(0);
    }
    else
    {
      genderData.push(hasDate)
    }
  }
  return (
      <>  
        <AnaliticPageConstructor likeMonth={likeMonthData} likeYear={likeYearData} commentMonth={commentMonthData} commentYear={commentYearData}
        userMonth={userMonthData} userYear={userYearData} gender={genderData}/>
      </>
  )
};