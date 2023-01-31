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

    const [isSubs, setIsSubs] = useState(false);
    const [sub, setSub] = useState(null);

    let subVis = true;
    let unsubVis = false;
    if(isSubs)
    {
        subVis = false;
        unsubVis = true;
    }

    const [subPanelVisible, setsubPanelVisible] = useState(subVis);
    const handleToggleSubPanel = () => {
        axios.delete(variables.DELETE_SUB + props.bloggerId.toString() + "/" + props.user.idUser.toString()).then((response) => {
          });
        setunsubPanelVisible(false);
        setsubPanelVisible(true);

    };
    const [unsubPanelVisible, setunsubPanelVisible] = useState(unsubVis);
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
        setunsubPanelVisible(true);
        setsubPanelVisible(false);
    };

  
    useEffect(() => {
      axios.get(variables.CHECK_SUB + props.bloggerId?.toString() + "/" + props.user.idUser?.toString()).then((response) => {
        setIsSubs((data) => {
          return response.data;
        });
      });
    }, []);

  let num: number = props.user.idUser;
  let str = num?.toString() || '';
  let link: string = "/profile/" + str;

  return (
    <>
    <div className={`${styles.postMiniUserInfo} ${styles.userInfo}`}>
        <div className={`${styles.postMiniAvatar} ${styles.userAvatar}`}>
            <a className={styles.userAvatarLink} href={link}>
                <img className={styles.userPicture} src={UserPhoto} alt="Аватар пользователя"/>
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


