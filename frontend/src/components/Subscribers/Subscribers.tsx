import React from "react";
import styles from "./Subscribers.module.css";
import baseStyles from "../../index.module.css";
import UserPhoto from "../../img/userpic-medium.jpg";
import {useState } from 'react';

<div className={`${styles.profileAvatar} ${styles.userAvatar}`}>
<img className={styles.userPicture} src={ UserPhoto } alt="Аватар пользователя"/>
</div>

export const Subscribers = () => {  
    
  const [subPanelVisible, setsubPanelVisible] = useState(true);
  const handleToggleSubPanel = () => {
        setunsubPanelVisible(false);
        setsubPanelVisible(true);
    };
    const [unsubPanelVisible, setunsubPanelVisible] = useState(false);
    const handleToggleUnsubPanel = () => {
        setunsubPanelVisible(true);
        setsubPanelVisible(false);
    };
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
                <span>Котик Воторой</span>
            </a>
            <time className={`${styles.postMiniTime} ${styles.userAdditional}`}>1 год на сайте</time>
        </div>
    </div>
        <div className={`${styles.postMiniRating} ${styles.userRating}`}>
            <p className={`${styles.postMiniRatingItem} ${styles.userRatingItem} ${styles.userRatingItemPublications}`}>
              <span className={`${styles.postMiniRatingAmount} ${styles.userRatingAmount}`}>556</span>
              <span className={`${styles.postMiniRatingText} ${styles.userRatingText}`}>публикаций</span>
            </p>
            <p className={`${styles.postMiniRatingItem} ${styles.userRatingItem} ${styles.userRatingItemPublications}`}>
              <span className={`${styles.postMiniRatingAmount} ${styles.userRatingAmount}`}>556</span>
              <span className={`${styles.postMiniRatingText} ${styles.userRatingText}`}>подписчиков</span>
            </p>
        </div>

        {subPanelVisible ? (
            <>
                <div className={styles.postMiniUserButtons}>
                    <button className={`${styles.postMiniUserButton} ${styles.userButton} ${baseStyles.button} ${baseStyles.buttonMain}`} onClick={handleToggleUnsubPanel}>
                        Подписаться
                    </button>
                </div>
            </> 
        ) : (null)}

        {unsubPanelVisible ? (
            <>
                <div className={styles.postMiniUserButtons}>
                    <button className={`${styles.postMiniUserButton} ${styles.userButton} ${baseStyles.button} ${baseStyles.buttonQuartz}`} onClick={handleToggleSubPanel}>
                        Отписаться
                    </button>
                </div>
            </> 
        ) : (null)}
    
    </>

  );
};


