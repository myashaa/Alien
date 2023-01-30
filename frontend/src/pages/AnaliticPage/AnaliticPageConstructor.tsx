import React from "react";
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

type AnaliticType =
{
    date: string,
    count: number,
}

interface AnaliticProps
{
  likeMonth: Array<AnaliticType>,
}

export const AnaliticPageConstructor = () => {

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
        data: [100, 136, 300, 200, 180],
        label: "Коментарии",
        borderColor: "#F9CE07",
        backgroundColor: "rgba(249, 206, 7, 0.5)",
        fill: true,
        lineTension: 0.5
      },
      {
        data: [200, 500, 2000, 2500, 4000],
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
        data: [10, 13, 3, 20, 18, 5, 12, 12, 1],
        label: "Коментарии",
        borderColor: "#F9CE07",
        backgroundColor: "rgba(249, 206, 7, 0.5)",
        fill: true,
        lineTension: 0.5
      },
      {
        data: [20, 50, 20, 25, 40, 45, 13, 24, 1, 23, 23],
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
        data: [10, 13, 3, 20, 18, 50, 12, 12, 4, 6, 0, 8, 9],
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
        data: [200, 500, 2000, 2500, 400, 544, 344, 122, 111, 340],
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
        data: [200, 230, 70],
        label: "Половая принадлежность",
        backgroundColor: ["#052E70", "#F9CE07", "#24454C"],
        hoverBackgroundColor: ["rgba(5, 46, 113, 0.5)", "rgba(249, 206, 7, 0.5)", "#6C8C8B"]
    }]
  };
  const barChartData = {
    labels: ["01-02", "02-03", "03-04", "04-05", "05-06", "06-07", "07-08", "08-09", "09-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", 
    "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-00", "00-01"],
    datasets: [
      {
        data: [200, 300, 7, 8, 6, 7, 6, 90, 156, 345, 456, 524, 555, 555, 443, 266, 122, 123, 35, 677, 613, 543, 345, 654],
        label: "Людишек активно",
        borderColor: "#F9CE07",
        backgroundColor: "rgba(249, 206, 7, 0.5)",
        fill: true
      }
    ]
  };
    
  return (
      <div className={`${baseStyles.page} ${styles.pageAnalitic}`}>
        <Header />
        <ProfileConstructor idUser={String(3)}/>
      
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

        {/* <div className={`${ styles.profileTabs } ${ baseStyles.filters }`}>
          <b className={`${ styles.profileTabsCaption } ${ baseStyles.filtersCaption }`}>Аналитика:</b>
          <ul className={`${ styles.profileTabsList } ${ baseStyles.filtersList }`}>
            <li onClick={handleToggleActionPanel} className={`${ styles.profileTabsItem } ${ baseStyles.filtersItem }`}>
              {actionPanelVisible ? (<button className={`${ styles.profileTabsLink } ${ baseStyles.filtersButton } ${ baseStyles.filtersButtonActive }`} >Активность</button>) : 
              (<button className={`${ styles.profileTabsLink } ${ baseStyles.filtersButton }`} >Активность</button>)} 
            </li>
            <li onClick={handleTogglePeoplePanel} className={`${ styles.profileTabsItem } ${ baseStyles.filtersItem }`}>
              {peoplePanelVisible ? (<button className={`${ styles.profileTabsLink } ${ baseStyles.filtersButton } ${ baseStyles.filtersButtonActive }`} >Люди</button>) : 
              (<button className={`${ styles.profileTabsLink } ${ baseStyles.filtersButton }`} >Люди</button>)}
            </li>
            <li onClick={handleTogglePostPanel} className={`${ styles.profileTabsItem } ${ baseStyles.filtersItem }`}>
              {postPanelVisible ? (<button className={`${ styles.profileTabsLink } ${ baseStyles.filtersButton } ${ baseStyles.filtersButtonActive }`} >Посты</button>) : 
              (<button className={`${ styles.profileTabsLink } ${ baseStyles.filtersButton }`} >Посты</button>)}
            </li>
          </ul>
        </div> */}

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

              <div className={`${ styles.feedPosts } ${ baseStyles.container }`}>
                <article className={ styles.post }>
                  <h1 className={ styles.graficHeader}>В какое время людишки активны</h1>
                  <div className={ styles.graficBox }>
                    <Bar data={barChartData}/>
                  </div>
                </article>
              </div>
            </> 
        ) : (null)}
        {postPanelVisible ? (
            <>
              <div className={`${ styles.analiticPosts } ${ baseStyles.container }`}>
                {/*<Post />*/}
              </div>  
            </> 
        ) : (null)} 

        <Footer />
      </div>
  );
};

  