import React from "react";
import styles from "./LoginPage.module.css";
import baseStyles from "../../index.module.css";

import { Footer } from "../../components/Footer/Footer";
import { Header } from '../../components/Header/Header';
import { LoginationForm } from '../../components/LoginationForm/LoginationForm';

export const LoginPage = () => {
  return (
    <div className={`${baseStyles.page} ${styles.pageLogin}`}>
      <Header />
      <div className={styles.mainWrapper}>
        <div className={baseStyles.container}>
          <h1 className={`${baseStyles.pageTitle} ${baseStyles.pageTitleLogin}`}>
            Вход
          </h1>
        </div>
        <LoginationForm />
      </div>
      <Footer />
    </div>
  );
}