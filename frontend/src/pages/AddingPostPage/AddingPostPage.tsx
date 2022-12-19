import React from "react";
import styles from "./AddingPostPage.module.css";
import baseStyles from "../../index.module.css";

import { Footer } from "../../components/Footer/Footer";
import { Header } from '../../components/Header/Header';
import { AddingPostForm } from '../../components/AddingPostForm/AddingPostForm';
import { BackArrow } from "../../components/BackArrow/BackArrow";

export const AddingPostPage = () => {
  return (
    <div className={`${baseStyles.page} ${styles.pageAddingPost}`}>
      <Header />
      <div className={styles.mainWrapper}>
        <div className={baseStyles.container}>
          <BackArrow />
          <h1 className={`${baseStyles.pageTitle} ${baseStyles.pageTitleRegistration}`}>
            Добавить публикацию
          </h1>
        </div>
        <AddingPostForm />
      </div>
      <Footer />
    </div>
  );
}