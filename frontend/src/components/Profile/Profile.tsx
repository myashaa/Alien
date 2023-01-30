import React, {useState, useEffect} from "react";
import styles from "./Profile.module.css";
import baseStyles from "../../index.module.css";
import UserPhoto from "../../img/userpic-medium.jpg";

type PhotoType = {
  idPhoto: number,
  url: string
}

interface ProfileProps {
  login: string,
  numberOfPosts: number,
  numberOfSubscribers: number,
  photo: Array<PhotoType>,
}

export const Profile = (props: ProfileProps) => {  
  let photo = "https://cdn-icons-png.flaticon.com/512/71/71298.png";
  if(props.photo.length != 0)
  {
    photo = props.photo[0].url;
  }
  
  return (
    <div className={`${styles.profile}`}>
      <div>
        <div className={`${styles.profileUser} ${baseStyles.container}`}>
          <div className={`${styles.profileUserInfo} ${styles.userInfo}`}>
            <div className={`${styles.profileAvatar} ${styles.userAvatar}`}>
              <img className={styles.userPicture} src={photo} alt="Аватар пользователя"/>
            </div>
            <div>
              <span className={`${styles.profileName} ${styles.userName}`}>{props.login}</span>
            </div>
          </div>

          <div className={`${styles.profileRating} ${styles.userRating}`}>
            <p className={`${styles.profileRatingItem} ${styles.userRatingItem} ${styles.userRatingItemPublications}`}>
              <span className={`${styles.userRatingAmount}`}>{props.numberOfPosts}</span>
              <span className={`${styles.profileRatingText} ${styles.userRatingText}`}>публикаций</span>
            </p>
            <p className={`${styles.profileRatingItem} ${styles.userRatingItem} ${styles.userRatingItemPublications}`}>
              <span className={`${styles.userRatingAmount}`}>{props.numberOfSubscribers}</span>
              <span className={`${styles.profileRatingText} ${styles.userRatingText}`}>подписчиков</span>
            </p>
          </div>

          <div className={`${styles.profileUserButtons} ${styles.userRatingText}`}>
            <a className={`${styles.userButton} ${baseStyles.button} ${baseStyles.buttonMain}`} href="/editing-profile">Редактировать</a>
            <button className={`${styles.userButton} ${baseStyles.button} ${baseStyles.buttonYellow}`} type="button">Выйти</button>
          </div>
        </div>
      </div>
    </div>
  );
};