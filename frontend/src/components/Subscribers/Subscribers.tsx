import React from "react";
import styles from "./Subscribers.module.css";
import baseStyles from "../../index.module.css";
import UserPhoto from "../../img/userpic-medium.jpg";

<div className={`${styles.profileAvatar} ${styles.userAvatar}`}>
<img className={styles.userPicture} src={ UserPhoto } alt="Аватар пользователя"/>
</div>

export const Subscribers = () => {   
  return (
    <div className={`${styles.postMiniUserInfo} ${styles.userInfo}`}>
        <div className={`${styles.postMiniAvatar} ${styles.userAvatar}`}>
            <a className={styles.userAvatarLink} href="#">
                <img className={styles.userPicture} src={UserPhoto} alt="Аватар пользователя"/>
            </a>
        </div>
        
        <div className={`${styles.postMiniNameWrapper}`}>
            <a className={`${styles.postMiniName} ${styles.userName}`} href="#">
                <span>Котик Воторой</span>
            </a>
            <time className={`${styles.postMiniTime} ${styles.userAdditional}`}>1 год на сайте</time>
        </div>
        <div className={`${styles.postMiniRating} ${styles.userRating}`}>
            <p className={`${styles.postMiniRatingItem} ${styles.userRatingItem} ${styles.userRatingItemPublications}`}>
              <span className={`${styles.postMiniRatingAmount} ${styles.userRatingAmount}`}>556</span>
              <span className={`${styles.postMiniRatingAmount} ${styles.userRatingAmount}`}>Posts</span>
            </p>

        </div>
    </div>
  );
};



