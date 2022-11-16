import React from "react";
import styles from "./AnaliticPage.module.css";
import baseStyles from "../../index.module.css";
import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import 'chart.js/auto'; // ADD THIS

import { Footer } from "../../components/Footer/Footer";
import { Header } from '../../components/Header/Header';
import UserPhoto from "../../img/userpic-medium.jpg";

export const AnaliticPage = () => {
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
  const pieChartData = {
    labels: ["Мужчины", "Женщины", "Инопланетяне"],
    datasets: [{
        data: [200, 230, 70],
        label: "Половая принадлежность",
        backgroundColor: ["#052E70", "#F9CE07", "#24454C"],
        hoverBackgroundColor: ["rgba(5, 46, 113, 0.5)", "rgba(249, 206, 7, 0.5)", "#6C8C8B"]
    }]
  };
  
  return (
      <div className={`${baseStyles.page} ${styles.profile}`}>
        <Header />

        <div className={styles.profileUserInfo}>
            <div className={`${styles.profileAvatar} ${styles.userAvatar}`}>
              <img className={styles.userPicture} src={ UserPhoto } alt="Аватар пользователя"/>
            </div>
        </div>
        <h1 className={`${ baseStyles.container} ${styles.h1Style}`}>Аналитика активности людишек</h1>
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

        <div className={`${ styles.feedPosts } ${ baseStyles.container }`}>
          <article className={ styles.post }>
            <h1 className={ styles.graficHeader}>Пол</h1>
            <div className={ styles.pieBox }>
              <Pie className={ styles.pie } data={pieChartData}/>
            </div>
          </article>
        </div>

        <Footer />
      </div>
  );
};

