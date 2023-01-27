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
            11.01.2023 17.00
          </time>
        </div>
      </div>
      <p className={styles.messagesText}>
        Джефф - типичный неудачник, который работает в смузи-кафе и большую часть времени проводит в своей холостяцкой квартирке в
        окружении творческого беспорядка. Однажды тройка инопланетян выбирает его в качестве объекта изучения, чтобы поближе
        познакомиться с человеческой расой. Пришельцам предстоит тщательно рассмотреть все аспекты земной жизни и решить, уничтожать
        человечество или нет. Теперь от того, как себя покажет Джефф, зависит судьба планеты.
      </p>
    </div>
  );
}