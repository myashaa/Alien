import React from "react";
import styles from "./EditingProfilePage.module.css";
import baseStyles from "../../index.module.css";

import { Footer } from "../../components/Footer/Footer";
import { Header } from '../../components/Header/Header';
import { EditingProfileForm } from '../../components/EditingProfileForm/EditingProfileForm';
import { BackArrow } from "../../components/BackArrow/BackArrow";

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
        <EditingProfileForm />
      </div>
      <Footer />
    </div>
  );
}