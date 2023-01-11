import React from "react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.commentsItem}>
      <div className={styles.commentsAvatar}>
        <a className={styles.userAvatarLink} href="#">
          {/* <img className={styles.commentsPicture} src="img/userpic-larisa.jpg" alt="Аватар пользователя" /> */}
        </a>
      </div>
      <div className={styles.commentsInfo}>
        <div className={styles.commentsNameWrapper}>
          <a className={styles.commentsUserName} href="#">
            <span>Лариса Роговая</span>
          </a>
          <time className={styles.commentsTime}>11.01.2023 17.00</time>
        </div>
        <p className={styles.commentsText}>
          Красота!!!1!
        </p>
      </div>
    </div>
  );
}