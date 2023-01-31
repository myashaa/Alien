import React from "react";
import styles from "./LikesAlert.module.css";
import baseStyles from "../../index.module.css";
import { PhotoType, UserType } from "../Comment/Comment";

interface LikeAlertProps { 

    user: UserType,
    postPhotos: Array<PhotoType>,
    date: string,
    idPost:number,
}

export const LikesAlert = (props: LikeAlertProps) => {  

  let photo = "https://cdn-icons-png.flaticon.com/512/71/71298.png";
  if(props.postPhotos.length != 0)
  {
    photo = props.postPhotos[0].url;
  }
  let userPhoto = "https://cdn-icons-png.flaticon.com/512/71/71298.png";
  if(props.user.userPhotos.length != 0)
  {
    userPhoto = props.user.userPhotos[0].url;
  }
   let link = "/post/" + props.idPost?.toString();
   let userLink = "/profile/" + props.user?.idUser.toString();
    
  return (
    <>
        <div className={`${styles.postMiniUserInfo} ${styles.userInfo}`}>
            <div className={`${styles.postMiniAvatar} ${styles.userAvatar}`}>
                  <a className={styles.userAvatarLink} href={userLink}>
                    <img className={styles.userPicture} src={userPhoto} alt="Аватар пользователя"/>
                </a>
            </div>
            <div className={`${styles.postMiniNameWrapper}`}>
                <a className={`${styles.postMiniName} ${styles.userName}`} href={userLink}>
                    <span>{props.user.login}</span>
                </a>
                <div className={styles.postMiniAction}>
                    <span className={`${styles.postMiniActivity} ${styles.userAdditional}`}>Лайкнул вашу космическую публикацию</span>
                      <time className={`${styles.postMiniTime} ${styles.userAdditional}`}>{props.date}</time>
                </div>
            </div>
        </div>
        <div className={styles.postMiniPreview}>
              <a className={styles.postMiniLink} href={link} title="Перейти на публикацию">
                <div className={styles.postMiniImageWrapper}>
                    <img className={styles.postMiniImage} src={photo} width="109" height="109" alt="Превью публикации"/>
                </div>
            </a>
        </div>
    </>

  );
};
