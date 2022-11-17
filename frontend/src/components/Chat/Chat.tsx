import React from "react";
import styles from "./Chat.module.css";
import baseStyles from "../../index.module.css";

import { Message } from '../../components/Message/Message';

export function Chat() {
  return (
    <div className={styles.messagesChat}>
      <div className={styles.messagesChatWrapper}>
        <ul className={styles.messagesList}>
          <li className={styles.messagesItem}>
            <Message />
          </li>
          <li className={`${styles.messagesItem} ${styles.messagesItemMy}`}>
            <Message />
          </li>
          <li className={styles.messagesItem}>
            <Message />
          </li>
          <li className={`${styles.messagesItem} ${styles.messagesItemMy}`}>
            <Message />
          </li>
        </ul>
      </div>
      <div className={styles.comments}>
        <form className={styles.commentsForm} action="#" method="post">
          <div className={styles.commentsMyAvatar}>
            {/* <img className={styles.commentsPicture} src="img/userpic-medium.jpg" alt="Аватар пользователя" /> */}
          </div>
          <div className={`${baseStyles.formInputSection} ${baseStyles.formInputSectionError}`}>
            <textarea className={`${styles.commentsTextarea} ${baseStyles.formTextarea} ${baseStyles.formInput}`}
                      placeholder="Ваше сообщение"></textarea>
            <label className={baseStyles.visuallyHidden}>Ваше сообщение</label>
            <button className={`${baseStyles.formErrorButton} ${baseStyles.button}`} type="button">!</button>
            <div className={baseStyles.formErrorText}>
              <h3 className={baseStyles.formErrorTitle}>Ошибка валидации</h3>
              <p className={baseStyles.formErrorDesc}>Это поле обязательно к заполнению</p>
            </div>
          </div>
          <button className={`${styles.commentsSubmit} ${baseStyles.button} ${baseStyles.buttonYellow}`} type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
}