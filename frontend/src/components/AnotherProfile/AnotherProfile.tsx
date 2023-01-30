import React, {useState, useEffect} from "react";
import styles from "./AnotherProfile.module.css";
import baseStyles from "../../index.module.css";
import UserPhoto from "../../img/userpic-medium.jpg";

<div className={`${styles.profileAvatar} ${styles.userAvatar}`}>
<img className={styles.userPicture} src={ UserPhoto } alt="Аватар пользователя"/>
</div>

type PhotoType = {
  idPhoto: number,
  url: string
}

interface AnotherProfileProps {
  login: string,
  numberOfPosts: number,
  numberOfSubscribers: number,
  photo: Array<PhotoType>,
}

export const AnotherProfile = (props: AnotherProfileProps) => {  
  let photo = "https://cdn-icons-png.flaticon.com/512/71/71298.png";
  if(props.photo.length != 0)
  {
    photo = props.photo[0].url;
  }

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

          {subPanelVisible ? (
            <>
                <div className={`${styles.profileUserButtons} ${styles.userRatingText}`}>
                    <button className={`${styles.userButton} ${baseStyles.button} ${baseStyles.buttonMain}`} onClick={handleToggleUnsubPanel}>
                        Подписаться
                    </button>
                </div>
            </> 
        ) : (null)}

        {unsubPanelVisible ? (
            <>
                <div className={`${styles.profileUserButtons} ${styles.userRatingText}`}>
                    <button className={`${styles.userButton} ${baseStyles.button} ${baseStyles.buttonQuartz}`} onClick={handleToggleSubPanel}>
                        Отписаться
                    </button>
                </div>
            </> 
        ) : (null)}

        </div>
      </div>
    </div>
  );
};