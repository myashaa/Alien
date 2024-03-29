import React, {useState, useEffect} from "react";
import styles from "./Subscribers.module.css";
import baseStyles from "../../index.module.css";
import UserPhoto from "../../img/userpic-medium.jpg";
import axios from "axios";
import { variables } from "../../Variables";
import { PhotoType } from "../Comment/Comment";


type UserType =
{
    idUser: number,
    login: string,
    userPhotos: Array<PhotoType>,
    numberOfSubscribers: number,
    numberOfPosts: number
}

interface SubscribersProps {
    user: UserType,
    bloggerId: number,
}

export const Subscribers = (props: SubscribersProps) => { 
    
    const [sub, setSub] = useState(null);

    const handleToggleSubPanel = () => {
        axios.delete(variables.DELETE_SUB + props.bloggerId.toString() + "/" + props.user.idUser.toString()).then((response) => {
          });
        setIsSubs(false);
    };
    const handleToggleUnsubPanel = () => {
        axios.post(variables.ADD_SUB, {    
            idUser: props.bloggerId,
            IdSubscriber: props.user.idUser, 
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
    axios.get(variables.CHECK_SUB + props.bloggerId?.toString() + "/" + props.user.idUser?.toString()).then((response) => {
      setIsSubs(response.data);
    });
  }, []);

    console.log(isSubs);
  let num: number = props.user.idUser;
  let str = num?.toString() || '';
    let link: string = "/profile/" + str;
    
  let userPhoto = "https://cdn-icons-png.flaticon.com/512/71/71298.png";
  if(props.user.userPhotos != null && props.user.userPhotos.length != 0)
  {
    userPhoto = props.user.userPhotos[0].url;
  }

  return (
    <>
    <div className={`${styles.postMiniUserInfo} ${styles.userInfo}`}>
        <div className={`${styles.postMiniAvatar} ${styles.userAvatar}`}>
            <a className={styles.userAvatarLink} href={link}>
                <img className={styles.userPicture} src={userPhoto} alt="Аватар пользователя"/>
            </a>
        </div>
        <div className={`${styles.postMiniNameWrapper}`}>
            <a className={`${styles.postMiniName} ${styles.userName}`} href={link}>
                <span>{props.user.login}</span>
            </a>
        </div>
    </div>
        <div className={`${styles.postMiniRating} ${styles.userRating}`}>
            <p className={`${styles.postMiniRatingItem} ${styles.userRatingItem} ${styles.userRatingItemPublications}`}>
              <span className={`${styles.postMiniRatingAmount} ${styles.userRatingAmount}`}>{props.user.numberOfPosts}</span>
              <span className={`${styles.postMiniRatingText} ${styles.userRatingText}`}>публикаций</span>
            </p>
            <p className={`${styles.postMiniRatingItem} ${styles.userRatingItem} ${styles.userRatingItemPublications}`}>
              <span className={`${styles.postMiniRatingAmount} ${styles.userRatingAmount}`}>{props.user.numberOfSubscribers}</span>
              <span className={`${styles.postMiniRatingText} ${styles.userRatingText}`}>подписчиков</span>
            </p>
        </div>

        {!isSubs ? (
            <>
                <div className={styles.postMiniUserButtons}>
                    <button className={`${styles.postMiniUserButton} ${styles.userButton} ${baseStyles.button} ${baseStyles.buttonMain}`} onClick={handleToggleUnsubPanel}>
                        Подписаться
                    </button>
                </div>
            </> 
        ) : (null)}

        {isSubs ? (
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


