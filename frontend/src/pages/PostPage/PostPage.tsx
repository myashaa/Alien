import React from "react";
import styles from "./PostPage.module.css";
import baseStyles from "../../index.module.css";

import Photo from "../../img/rock-default.jpg";
import IconHeart from "../../img/icon-heart.svg"; 
import IconHeartActive from "../../img/icon-heart-active.svg"; 
import IconComment from "../../img/icon-comment.svg"; 
import { Footer } from "../../components/Footer/Footer";
import { Header } from '../../components/Header/Header';
import { Comment } from '../../components/Comment/Comment';

export const PostPage = () => {
  return (
    <div className={`${baseStyles.page} ${styles.pagePost}`}>
      <Header />
      <div className={styles.mainWrapper}>
        <div className={baseStyles.container}>
          <h1 className={`${baseStyles.pageTitle} ${baseStyles.pageTitleRegistration}`}>
            Наконец, полет в открытый космос!
          </h1>
          <section className={styles.postDetails}>
            <h2 className={baseStyles.visuallyHidden}>Публикация</h2>
            <div className={`${styles.postDetailsWrapper} ${styles.postPhoto}`}>
              <div className={`${styles.postDetailsMainBlock} ${styles.post}`}>
                <div className={styles.postPhotoImageWrapper}>
                  <img src={Photo} alt="Фото от пользователя" width="760" height="507" />
                </div>
                <div className={styles.postIndicators}>
                  <div className={styles.postButtons}>
                    <a className={`${styles.postIndicator} ${baseStyles.button}`} href="#" title="Лайк">
                      <IconHeart className={styles.postIndicatorIcon} width="20" height="17" />
                      {/* <IconHeartActive className={`${ styles.postIndicatorIcon } ${ styles.postIndicatorIconLikeActive }`} width="20" height="17"/> */}
                      <span>250</span>
                      <span className={baseStyles.visuallyHidden}>количество лайков</span>
                    </a>
                    <a className={`${styles.postIndicator} ${baseStyles.button}`} href="#" title="Комментарии">
                      <IconComment className={ styles.postIndicatorIcon } width="19" height="17" />
                      <span>25</span>
                      <span className={baseStyles.visuallyHidden}>количество комментариев</span>
                    </a>
                  </div>
                </div>
                <ul className={styles.postTags}>
                  <li><a href="#">#nature</a></li>
                  <li><a href="#">#globe</a></li>
                  <li><a href="#">#photooftheday</a></li>
                  <li><a href="#">#canon</a></li>
                  <li><a href="#">#landscape</a></li>
                  <li><a href="#">#щикарныйвид</a></li>
                </ul>
                <div className={styles.comments}>
                  <form className={styles.commentsForm} action="#" method="post">
                    <div className={styles.commentsMyAvatar}>
                      {/* <img className="comments__picture" src="img/userpic-medium.jpg" alt="Аватар пользователя"> */}
                    </div>
                    <div className={`${baseStyles.formInputSection} ${baseStyles.formInputSectionError}`}>
                      <textarea className={`${styles.commentsTextarea} ${baseStyles.formTextarea} ${baseStyles.formInput}`}
                        placeholder="Ваш комментарий"></textarea>
                      <label className={baseStyles.visuallyHidden}>Ваш комментарий</label>
                      <button className={`${baseStyles.formErrorButton} ${baseStyles.button}`} type="button">!</button>
                      <div className={baseStyles.formErrorText}>
                        <h3 className={baseStyles.formErrorTitle}>Ошибка валидации</h3>
                        <p className={baseStyles.formErrorDesc}>Это поле обязательно к заполнению</p>
                      </div>
                    </div>
                    <button className={`${styles.commentsSubmit} ${baseStyles.button} ${baseStyles.buttonYellow}`} type="submit">Отправить</button>
                  </form>
                  <div className={styles.commentsListWrapper}>
                    <div className={styles.commentsList}>
                      <Comment />
                      <Comment />
                    </div>
                    <a className={styles.commentsMoreLink} href="#">
                      <span>Показать все комментарии</span>
                      <sup className={styles.commentsAmount}>45</sup>
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.postDetailsUser}>
                <div className={styles.postDetailsUserInfo}>
                  <div className={styles.postDetailsAvatar}>
                    <a className={styles.postDetailsAvatarLink} href="#">
                      {/* <img className="post-details__picture user__picture" src="img/userpic-elvira.jpg" alt="Аватар пользователя"> */}
                    </a>
                  </div>
                  <div className={styles.postDetailsNameWrapper}>
                    <a className={styles.postDetailsName} href="#">
                      <span>Эльвира Хайпулинова</span>
                    </a>
                    {/* <time className="post-details__time user__time" datetime="2014-03-20">5 лет на сайте</time> */}
                  </div>
                </div>
                <div className={styles.postDetailsRating}>
                  <p className={styles.postDetailsRatingItem}>
                    <span className={styles.postDetailsRatingAmount}>1856</span>
                    <span className={styles.postDetailsRatingText}>подписчиков</span>
                  </p>
                  <p className={styles.postDetailsRatingItem}>
                    <span className={styles.postDetailsRatingAmount}>556</span>
                    <span className={styles.postDetailsRatingText}>публикаций</span>
                  </p>
                </div>
                <div className={styles.postDetailsUserButtons}>
                  <button className={`${styles.postDetailsUserButton} ${baseStyles.button} ${baseStyles.buttonMain}`} type="button">Подписаться</button>
                  {/* <a className={`${styles.postDetailsUserButton} ${baseStyles.button} ${baseStyles.buttonYellow}`} href="#">Сообщение</a> */}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}