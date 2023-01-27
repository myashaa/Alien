import React from "react";
import styles from "./ErrorPage.module.css";
import baseStyles from "../../index.module.css";

import { Footer } from "../../components/Footer/Footer";
import { Header } from '../../components/Header/Header';

export const ErrorPage = () => {
  return (
    <div className={`${baseStyles.page} ${styles.pageError}`}>
      <Header />
      <div className={styles.mainWrapper}>
        <div className={baseStyles.container}>
          <h1 className={`${baseStyles.pageTitle} ${styles.pageTitle}`}>
            Ой, кажется, эта планета еще не исследована ;(
          </h1>
        </div>
        <div className={`${ styles.container } ${ baseStyles.container }`}>
        </div>  
      </div>
      <Footer />
    </div>
  );
}