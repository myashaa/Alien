import React from "react";
import styles from "./Post.module.css";
import baseStyles from "../../index.module.css";

import Photo from "../../img/gagarin.jpg";
import UserPhoto from "../../img/userpic-larisa-small.jpg";
import IconHeart from "../../img/icon-heart.svg"; 
import IconHeartActive from "../../img/icon-heart-active.svg"; 
import IconComment from "../../img/icon-comment.svg"; 

export function Post() {
  return (
    <article className={ styles.post }>
      <header className={styles.postHeader}>
        <h2><a href="#">Наконец, полет в открытый космос!</a></h2>
      </header>
      <div className={styles.postMain}>
        <div className={styles.postPhotoImageWrapper}>
          <img src={Photo} alt="Фото от пользователя" width="360" height="240" />
        </div>
        <p>
          60 лет назад произошло событие огромной исторической значимости. Полетел в космос первый человек — советский лётчик Юрий Гагарин.
          Этот триумфальный полёт и сегодня воспринимается как невероятный прорыв, необычайное достижение всего человечества. Событие имело
          колоссальный общественный резонанс! Гагарин стал всенародным героем, любимцем всех женщин СССР сразу или, как сейчас бы сказали, настоящей «звездой».
        </p>
        <div className={styles.postTextMoreLinkWrapper}>
            <a className={styles.postTextMoreLink} href="#">Читать далее</a>
        </div>
      </div>
      <footer className={styles.postFooter}>
        <div className={styles.postAuthor}>
          <a className={styles.postAuthorLink} href="#" title="Автор">
            <div className={styles.postAvatarWrapper}>
              <img className={styles.postAuthorAvatar} src={UserPhoto}
                alt="Аватар пользователя" />
            </div>
            <div className={styles.postInfo}>
              <b className={ styles.postAuthorName}>Лариса Роговая</b>
              <time className={styles.postTime}>Месяц назад</time>
            </div>
          </a>
        </div>
        <div className={styles.postIndicators}>
          <div className={styles.postButtons}>
            <a className={`${styles.postIndicator} ${styles.postIndicatorLikes} ${baseStyles.button}`} href="#" title="Лайк">
              <IconHeart className={styles.postIndicatorIcon} width="20" height="17" />
              {/* <IconHeartActive className={`${ styles.postIndicatorIcon } ${ styles.postIndicatorIconLikeActive }`} width="20" height="17"/> */}
              <span>250</span>
              <span className={baseStyles.visuallyHidden}>количество лайков</span>
            </a>
            <a className={`${styles.postIndicator} ${styles.postIndicatorComments} ${baseStyles.button}`} href="#" title="Комментарии">
              <IconComment className={ styles.postIndicatorIcon } width="19" height="17" />
              <span>25</span>
              <span className={baseStyles.visuallyHidden}>количество комментариев</span>
            </a>
          </div>
        </div>
      </footer>
    </article>
  );
}