import React, { useEffect } from "react";
import styles from "./AnaliticPage.module.css";
import baseStyles from "../../index.module.css";
import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import {useState } from 'react';
import 'chart.js/auto'; // ADD THIS

import { Footer } from "../../components/Footer/Footer";
import { Header } from '../../components/Header/Header';
import { Profile } from '../../components/Profile/Profile';
import { Post } from '../../components/Post/Post';
import { BackArrow } from "../../components/BackArrow/BackArrow";
import { ProfileConstructor } from "../../components/Profile/ProfileConstructor";
import axios from "axios";
import { variables } from "../../Variables";

export type LikeMonthType = {
  count: number,
  date: number,
}

export type GenderType = {
  count: number,
  gender: number,
}

interface AnaliticProps
{
  likeMonth: Array<number>,
  likeYear: Array<number>,
  commentMonth: Array<number>,
  commentYear: Array<number>,
  userMonth: Array<number>,
  userYear: Array<number>,
  gender: Array<number>
}

export const AnaliticPageConstructor = (props: AnaliticProps) => {

  const [posts, setPosts] = useState([]);

  const [actionPanelVisible, setActionPanelVisible] = useState(true);
    const handleToggleActionPanel = () => {
        setActionPanelVisible(true);
        setPeoplePanelVisible(false);
        setPostPanelVisible(false);
    };
    const [peoplePanelVisible, setPeoplePanelVisible] = useState(false);
    const handleTogglePeoplePanel = () => {
        setPeoplePanelVisible(true);
        setActionPanelVisible(false);
        setPostPanelVisible(false);
    };
    const [postPanelVisible, setPostPanelVisible] = useState(false);
    const handleTogglePostPanel = () => {
        setPostPanelVisible(true);
        setActionPanelVisible(false);
        setPeoplePanelVisible(false);
    };


  const lineChartDataYear = {
    labels: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    datasets: [
      {
        data: props.commentYear,
        label: "Коментарии",
        borderColor: "#F9CE07",
        backgroundColor: "rgba(249, 206, 7, 0.5)",
        fill: true,
        lineTension: 0.5
      },
      {
        data: props.likeYear,
        label: "Лайки",
        borderColor: "#052E70",
        backgroundColor: "rgba(5, 46, 113, 0.1)",
        fill: true,
        lineTension: 0.5
      }
    ]
  };
  const lineChartDataMonth = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", 
    "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
    datasets: [
      {
        data: props.commentMonth,
        label: "Коментарии",
        borderColor: "#F9CE07",
        backgroundColor: "rgba(249, 206, 7, 0.5)",
        fill: true,
        lineTension: 0.5
      },
      {
        data: props.likeMonth,
        label: "Лайки",
        borderColor: "#052E70",
        backgroundColor: "rgba(5, 46, 113, 0.1)",
        fill: true,
        lineTension: 0.5
      }
    ]
  };
  const lineChartDataNewDay = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", 
    "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
    datasets: [
      {
        data: props.commentMonth,
        label: "Новые людишки",
        borderColor: "#F9CE07",
        backgroundColor: "rgba(249, 206, 7, 0.5)",
        fill: true,
        lineTension: 0.5
      }
    ]
  };
  const lineChartDataNewMonth = {
    labels: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    datasets: [
      {
        data: props.userYear,
        label: "Новые людишки",
        borderColor: "#052E70",
        backgroundColor: "rgba(5, 46, 113, 0.1)",
        fill: true,
        lineTension: 0.5
      }
    ]
  };
  const pieChartData = {
    labels: ["Мужчины", "Женщины", "Инопланетяне"],
    datasets: [{
        data: props.gender,
        label: "Половая принадлежность",
        backgroundColor: ["#052E70", "#F9CE07", "#24454C"],
        hoverBackgroundColor: ["rgba(5, 46, 113, 0.5)", "rgba(249, 206, 7, 0.5)", "#6C8C8B"]
    }]
  };

  useEffect(() => {
    axios.get(variables.ANALITIC_POST + localStorage.getItem('idUser')).then((response) => {
      setPosts((data) => {
        return response.data;
      });
    });
  }, []);
    
  return (
      <div className={`${baseStyles.page} ${styles.pageAnalitic}`}>
        <Header />
        <ProfileConstructor idUser={localStorage.getItem('idUser')}/>
      
        <div className={styles.mainWrapper}>
          <div className={baseStyles.container}>
            <BackArrow />
            <h1 className={`${baseStyles.pageTitle} ${baseStyles.pageTitleLogin}`}>
              Аналитика
            </h1>
          </div>
          <div className={baseStyles.container}>
            <div className={styles.feedFiltersWrapper}>
              <div className={styles.feedSorting}>
                <b className={styles.feedSortingCaption}>Показать:</b>
                <ul className={styles.feedSortingList}>
                  <li className={ styles.sortingItem } onClick={handleToggleActionPanel}>
                    <a className={actionPanelVisible ? `${styles.sortingLink} ${styles.sortingLinkActive}` : styles.sortingLink}>
                      <span>Активность</span>
                    </a>
                  </li>
                  <li className={ styles.sortingItem } onClick={handleTogglePeoplePanel}>
                    <a className={peoplePanelVisible ? `${styles.sortingLink} ${styles.sortingLinkActive}` : styles.sortingLink}>
                      <span>Люди</span>
                    </a>
                  </li>
                  <li className={ styles.sortingItem } onClick={handleTogglePostPanel}>
                    <a className={postPanelVisible ? `${styles.sortingLink} ${styles.sortingLinkActive}` : styles.sortingLink}>
                      <span>Самые популярные посты</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {actionPanelVisible ? (
            <>
              <div className={`${ styles.feedPosts } ${ baseStyles.container }`}>
                <article className={ styles.post }>
                  <h1 className={ styles.graficHeader}>За месяц</h1>
                  <div className={ styles.graficBox }>
                    <Line data={lineChartDataMonth}/>
                  </div>
                </article>
              </div>

              <div className={`${ styles.feedPosts } ${ baseStyles.container }`}>
                <article className={ styles.post }>
                  <h1 className={ styles.graficHeader}>За год</h1>
                  <div className={ styles.graficBox }>
                    <Line data={lineChartDataYear}/>
                  </div>
                </article>
              </div>
            </> 
        ) : (null)}
        {peoplePanelVisible ? (
            <>
              <div className={`${ styles.feedPosts } ${ baseStyles.container }`}>
                <article className={ styles.post }>
                  <h1 className={ styles.graficHeader}>Пол</h1>
                  <div className={ styles.pieBox }>
                    <Pie className={ styles.pie } data={pieChartData}/>
                  </div>
                </article>
              </div>

              <div className={`${ styles.feedPosts } ${ baseStyles.container }`}>
                <article className={ styles.post }>
                  <h1 className={ styles.graficHeader}>Прибавилось людишек за день</h1>
                  <div className={ styles.graficBox }>
                    <Line data={lineChartDataNewDay}/>
                  </div>
                </article>
              </div>

              <div className={`${ styles.feedPosts } ${ baseStyles.container }`}>
                <article className={ styles.post }>
                  <h1 className={ styles.graficHeader}>Прибавилось людишек за месяц</h1>
                  <div className={ styles.graficBox }>
                    <Line data={lineChartDataNewMonth}/>
                  </div>
                </article>
              </div>
            </> 
        ) : (null)}
        {postPanelVisible ? (
            <>
              <div className={`${ styles.analiticPosts } ${ baseStyles.container }`}>
                {posts.map((post) => 
                  <Post key = {post["idPost"]} numberOfLikes = {post["numberOfLikes"]} numberOfComments = {post["numberOfComments"]} title = {post["title"]} 
                  imgs = {post["postPhotos"]} text= {post["text"]} id = {post["idPost"]} user = {post["user"]}/>
                )}
              </div>  
            </> 
        ) : (null)} 

        <Footer />
      </div>
  );
};

  