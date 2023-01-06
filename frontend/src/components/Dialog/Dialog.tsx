import React from "react";
import styles from "./Dialog.module.css";
import baseStyles from "../../index.module.css";

export function Dialog() {
  return (
    <a className={styles.messagesContactsTab} href="#">
      <div className={styles.messagesAvatarWrapper}>
        {/* <img className={styles.messagesAvatar} src="img/userpic-larisa.jpg" alt="Аватар пользователя" /> */}
      </div>
      <div className={styles.messagesInfo}>
        <span className={styles.messagesContactName}>
          Лариса Роговая
        </span>
        <div className={styles.messagesPreview}>
          <p className={styles.messagesPreviewText}>
            Джефф - типичный неудачник
          </p>
          <time className={styles.messagesPreviewTime}>
            14:40
          </time>
        </div>
      </div>
    </a>
  );
}