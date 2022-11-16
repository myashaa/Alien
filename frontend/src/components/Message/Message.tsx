import React from "react";
import styles from "./Message.module.css";
import baseStyles from "../../index.module.css";

export function Message() {
  return (
    <div className={styles.messagesItem}>
      <div className={styles.messagesInfoWrapper}>
        <div className={styles.messagesItemAvatar}>
          <a className={styles.messagesAuthorLink} href="#">
            {/* <img className={styles.messagesAvatar} src="img/userpic-larisa-small.jpg" alt="Аватар пользователя" /> */}
          </a>
        </div>
        <div className={styles.messagesItemInfo}>
          <a className={styles.messagesAuthor} href="#">
            Лариса Роговая
          </a>
          <time className={styles.messagesTime}>
            1 ч назад
          </time>
        </div>
      </div>
      <p className={styles.messagesText}>
        Озеро Байкал – огромное древнее озеро в горах Сибири к северу от монгольской границы. Байкал считается самым глубоким озером в мире. Он окружен сетью пешеходных маршрутов, называемых Большой байкальской тропой. Деревня Листвянка, расположенная на западном берегу озера, – популярная отправная точка для летних экскурсий. Зимой здесь можно кататься на коньках и собачьих упряжках.
      </p>
    </div>
  );
}