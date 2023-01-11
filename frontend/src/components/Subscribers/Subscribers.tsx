import React, {useState, useEffect} from "react";
import styles from "./Subscribers.module.css";
import baseStyles from "../../index.module.css";
import UserPhoto from "../../img/userpic-medium.jpg";

interface SubscribersProps {
    login: string,
    numberOfPosts: number,
    numberOfSubscribers: number,
}

export const Subscribers = (props: SubscribersProps) => { 
    let subVis = true;
    let unsubVis = false;
    if(props.login == "diana")
    {
        subVis = false;
        unsubVis = true;
    }

    const [subPanelVisible, setsubPanelVisible] = useState(subVis);
    const handleToggleSubPanel = () => {
        setunsubPanelVisible(false);
        setsubPanelVisible(true);
    };
    const [unsubPanelVisible, setunsubPanelVisible] = useState(unsubVis);
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
                <span>{props.login}</span>
            </a>
        </div>
    </div>
        <div className={`${styles.postMiniRating} ${styles.userRating}`}>
            <p className={`${styles.postMiniRatingItem} ${styles.userRatingItem} ${styles.userRatingItemPublications}`}>
              <span className={`${styles.postMiniRatingAmount} ${styles.userRatingAmount}`}>{props.numberOfPosts}</span>
              <span className={`${styles.postMiniRatingText} ${styles.userRatingText}`}>публикаций</span>
            </p>
            <p className={`${styles.postMiniRatingItem} ${styles.userRatingItem} ${styles.userRatingItemPublications}`}>
              <span className={`${styles.postMiniRatingAmount} ${styles.userRatingAmount}`}>{props.numberOfSubscribers}</span>
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


