import React from "react";
import styles from "./LikesAlert.module.css";
import baseStyles from "../../index.module.css";
import UserPhoto from "../../img/userpic-medium.jpg";
import PostPhoto from "../../img/rock-small.png";


<div className={`${styles.profileAvatar} ${styles.userAvatar}`}>
<img className={styles.userPicture} src={ UserPhoto } alt="Аватар пользователя"/>
</div>

export const LikesAlert = () => {  
  return (
    <>
        <div className={`${styles.postMiniUserInfo} ${styles.userInfo}`}>
            <div className={`${styles.postMiniAvatar} ${styles.userAvatar}`}>
                <a className={styles.userAvatarLink} href="#">
                    <img className={styles.userPicture} src={UserPhoto} alt="Аватар пользователя"/>
                </a>
            </div>
            <div className={`${styles.postMiniNameWrapper}`}>
                <a className={`${styles.postMiniName} ${styles.userName}`} href="#">
                    <span>Котик Любовный</span>
                </a>
                <div className={styles.postMiniAction}>
                    <span className={`${styles.postMiniActivity} ${styles.userAdditional}`}>Лайкнул вашу космическую публикацию</span>
                    <time className={`${styles.postMiniTime} ${styles.userAdditional}`}>5 минут назад</time>
                </div>
            </div>
        </div>
        <div className={styles.postMiniPreview}>
            <a className={styles.postMiniLink} href="#" title="Перейти на публикацию">
                <div className={styles.postMiniImageWrapper}>
                    <img className={styles.postMiniImage} src={PostPhoto} width="109" height="109" alt="Превью публикации"/>
                </div>
            </a>
        </div>
    </>

  );
};
