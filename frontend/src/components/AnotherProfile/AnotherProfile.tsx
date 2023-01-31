import React, {useState, useEffect} from "react";
import styles from "./AnotherProfile.module.css";
import baseStyles from "../../index.module.css";
import UserPhoto from "../../img/userpic-medium.jpg";
import axios from "axios";
import { variables } from "../../Variables";

<div className={`${styles.profileAvatar} ${styles.userAvatar}`}>
<img className={styles.userPicture} src={ UserPhoto } alt="Аватар пользователя"/>
</div>

type PhotoType = {
  idPhoto: number,
  url: string
}

interface AnotherProfileProps {
  idUser:number,
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

 const [sub, setSub] = useState(null);

    const handleToggleSubPanel = () => {
        axios.delete(variables.DELETE_SUB + localStorage.getItem('idUser') + "/" + props.idUser.toString()).then((response) => {
          });
        setIsSubs(false);
    };
    const handleToggleUnsubPanel = () => {
        axios.post(variables.ADD_SUB, {    
            idUser: Number(localStorage.getItem('idUser')),
            IdSubscriber: props.idUser, 
            date: new Date()
        }).then((response) => {
            setSub((data) => {
              return response.data;
            });
        });
        setIsSubs(true);
    };
  
  const [isSubs, setIsSubs] = useState(false);

  React.useEffect(() => {
    axios.get(variables.CHECK_SUB + localStorage.getItem('idUser') + "/" + props.idUser?.toString()).then((response) => {
      setIsSubs(response.data);
    });
  }, []);


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

          {!isSubs ? (
            <>
                <div className={`${styles.profileUserButtons} ${styles.userRatingText}`}>
                    <button className={`${styles.userButton} ${baseStyles.button} ${baseStyles.buttonMain}`} onClick={handleToggleUnsubPanel}>
                        Подписаться
                    </button>
                </div>
            </> 
        ) : (null)}

        {isSubs ? (
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