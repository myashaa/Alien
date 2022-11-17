import React from "react";
import styles from "./MainPage.module.css";
import baseStyles from "../../index.module.css";

import { Footer } from "../../components/Footer/Footer";
import { LoginationFormWithRegistrationButton } from '../../components/LoginationFormWithRegistrationButton/LoginationFormWithRegistrationButton';

export const MainPage = () => {
  return (
    <div className={`${baseStyles.page} ${styles.pageMain}`}>
      <div className={`${baseStyles.pageMainWrapper} ${baseStyles.container}`}>
        <section className={styles.intro}>
          <h2 className={baseStyles.visuallyHidden}>Наши преимущества</h2>
          <b className={styles.introSlogan}>Блог, каким<br/> он должен быть</b>
          {/* <ul className={styles.introAdvantagesList}>
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
          </ul> */}
          <ul className={styles.introAdvantagesList}>
            <li className={styles.introAdvantage}>Сфотографировали НЛО?</li>
            <li className={styles.introAdvantage}>Придумали рецепт идеального лимонада?</li>
            <li className={styles.introAdvantage}>Разгадали загадку вселенной? </li>
            <li className={styles.introAdvantage}>Мы ждём вас в Alien!</li>
          </ul>
        </section>
        <LoginationFormWithRegistrationButton />
      </div>
      <Footer />
    </div>
  );
}