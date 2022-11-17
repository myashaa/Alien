import React from "react";
import styles from "./MessagesPage.module.css";
import baseStyles from "../../index.module.css";

import { Footer } from "../../components/Footer/Footer";
import { Header } from '../../components/Header/Header';
import { Dialog } from '../../components/Dialog/Dialog';
import { Chat } from '../../components/Chat/Chat';

export const MessagesPage = () => {
  return (
    <div className={`${baseStyles.page} ${styles.pageMessages}`}>
      <Header />
      <div className={styles.mainWrapper}>
        <div className={baseStyles.container}>
          <h1 className={`${baseStyles.pageTitle} ${baseStyles.pageTitleRegistration}`}>
            Сообщения
          </h1>
        </div>
        <div className={`${baseStyles.container} ${styles.messagesWrapper}`}>
          <div className={styles.messagesContacts}>
            <ul className={styles.messagesContactsList}>
              <li className={styles.messagesContactsItem}>
                <Dialog />
              </li>
              <li className={styles.messagesContactsItem}>
                <Dialog />
              </li>
              <li className={styles.messagesContactsItem}>
                <Dialog />
              </li>
            </ul>
          </div>
          <Chat />
        </div>
      </div>
      <Footer />
    </div>
  );
}