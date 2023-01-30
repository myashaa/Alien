import React from "react";
import styles from "./EditingProfilePage.module.css";
import baseStyles from "../../index.module.css";

import { Footer } from "../../components/Footer/Footer";
import { Header } from '../../components/Header/Header';
import { BackArrow } from "../../components/BackArrow/BackArrow";
import { EditingProfileFormConstructor } from "../../components/EditingProfileForm/EditingProfileFormConstructor";

export const EditingProfilePage = () => {
  return (
    <div className={`${baseStyles.page} ${styles.pageRegistration}`}>
      <Header />
      <div className={styles.mainWrapper}>
        <div className={baseStyles.container}>
          <BackArrow />
          <h1 className={`${baseStyles.pageTitle} ${baseStyles.pageTitleRegistration}`}>
            Редактировать профиль
          </h1>
        </div>
        <EditingProfileFormConstructor />
      </div>
      <Footer />
    </div>
  );
}