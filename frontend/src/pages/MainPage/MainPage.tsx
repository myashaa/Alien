import React from "react";
import styles from "./MainPage.module.css";
import baseStyles from "../../index.module.css";

import { Footer } from "../../components/Footer/Footer";
import { LoginationForm } from '../../components/LoginationForm/LoginationForm';

export const MainPage = () => {
  return (
    <div className={`${baseStyles.page} ${styles.pageMain}`}>
      <div className={`${baseStyles.pageMainWrapper} ${baseStyles.container}`}>
        <section className={styles.intro}>
          <h2 className={baseStyles.visuallyHidden}>Наши преимущества</h2>
          <b className={styles.introSlogan}>Блог, каким<br/> он должен быть</b>
          <ul className={styles.introAdvantagesList}>
            <li className={`${styles.introAdvantage} ${styles.introAdvantageEase}`}>
              <p className={styles.introAdvantageText}>
                Есть все необходимое для&nbsp;простоты публикации
              </p>
            </li>
            <li className={`${styles.introAdvantage} ${styles.introAdvantageNoExcess}`}>
              <p className={styles.introAdvantageText}>
                Нет ничего лишнего, отвлекающего от сути
              </p>
            </li>
          </ul>
        </section>
        <LoginationForm />
      </div>
      <Footer />
    </div>
  );
}