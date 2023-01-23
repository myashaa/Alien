import React from "react";
import styles from "./Post.module.css";
import baseStyles from "../../index.module.css";

import Photo from "../../img/gagarin.jpg";
import UserPhoto from "../../img/userpic-larisa-small.jpg";
import IconHeart from "../../img/icon-heart.svg"; 
import IconHeartActive from "../../img/icon-heart-active.svg"; 
import IconComment from "../../img/icon-comment.svg"; 
import IconDelete from "../../img/delete.svg"; 
import {PhotoPost} from "../PhotoPost/PhotoPost";

type PhotoType = {
    idPhoto: number,
    url: string
}

interface PostProps {
  login: string,
  text: string,
  title: string,
  imgs: Array<PhotoType>,
  imgUser: string,
  numberOfLikes: number,
  numberOfComments: number,
}

export function Post(props: PostProps) {
  return (
    <article className={ styles.post }>
      <header className={styles.postHeader}>
        <h2><a href="#">{props.title}</a></h2>
      </header>
      <div className={styles.postMain}>
          {props.imgs.map((photo) => 
            <PhotoPost key = {photo.idPhoto} url = {photo.url} />
          )}
        <p>
          {props.text}
        </p>
        <div className={styles.postTextMoreLinkWrapper}>
            <a className={styles.postTextMoreLink} href="/post">Подробнее</a>
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
              <b className={ styles.postAuthorName}>{props.login}</b>
            </div>
          </a>
        </div>
        <div className={styles.postIndicators}>
          <div className={styles.postButtons}>
            <a className={`${styles.postIndicator} ${styles.postIndicatorLikes} ${baseStyles.button}`} href="#" title="Лайк">
              <IconHeart className={styles.postIndicatorIcon} width="20" height="17" />
              {/* <IconHeartActive className={`${ styles.postIndicatorIcon } ${ styles.postIndicatorIconLikeActive }`} width="20" height="17"/> */}
              <span>{props.numberOfLikes}</span>
              <span className={baseStyles.visuallyHidden}>количество лайков</span>
            </a>
            <a className={`${styles.postIndicator} ${styles.postIndicatorComments} ${baseStyles.button}`} href="#" title="Комментарии">
              <IconComment className={ styles.postIndicatorIcon } width="19" height="17" />
              <span>{props.numberOfLikes}</span>
              <span className={baseStyles.visuallyHidden}>количество комментариев</span>
            </a>
            <a className={`${styles.postIndicator} ${styles.postIndicatorComments} ${baseStyles.button}`} href="#" title="Удаление">
              <IconDelete className={ styles.postIndicatorIcon } width="19" height="17" />
              <span className={baseStyles.visuallyHidden}>удаление поста </span>
            </a>
          </div>
        </div>
      </footer>
    </article>
  );
}