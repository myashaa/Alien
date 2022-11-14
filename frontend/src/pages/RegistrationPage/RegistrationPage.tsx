import React from "react";
import styles from "./RegistrationPage.module.css";
import baseStyles from "../../index.module.css";

import { Footer } from "../../components/Footer/Footer";
import { Header } from '../../components/Header/Header';
import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';

export const RegistrationPage = () => {
  return (
    // <div className={ baseStyles.page}>
    //   <Header />
    //   <RegistrationForm />
    //   <Footer />
    // </div>
    <div className={`${baseStyles.page} ${styles.pageRegistration}`}>
      <Header />
      <div className={styles.mainWrapper}>
        <div className={baseStyles.container}>
          <h1 className={`${baseStyles.pageTitle} ${baseStyles.pageTitleRegistration}`}>
            Регистрация
          </h1>
        </div>
        <RegistrationForm />
      </div>
      <Footer />
    </div>
  );
}