import React from "react";
import styles from "./Comment.module.css";

export type PhotoType = {
  idPhoto: number,
  url: string
}

export type UserType = {
  idUser:number,
  login:string,
  userPhotos: Array<PhotoType>
}

type CommentType = {
  idComment:number,
  user:UserType,
  date:string,
  text:string,
}

interface CommentProps {
  comment: CommentType,
}

export function Comment(props: CommentProps) {

  let photoUser = "https://cdn-icons-png.flaticon.com/512/71/71298.png";
  if(props.comment.user.userPhotos.length != 0)
  {
    photoUser = props.comment.user.userPhotos[0].url;
  }

  let num: number = props.comment.user.idUser;
  let str = num?.toString() || '';
  let link: string = "/profile/" + str;

  return (
    <div className={styles.commentsItem}>
      <div className={styles.commentsAvatar}>
        <a className={styles.userAvatarLink} href={link}>
          <img className={`${styles.userPicture} ${styles.commentsPicture}`} src={photoUser} alt="Аватар пользователя" /> 
        </a>
      </div>
      <div className={styles.commentsInfo}>
        <div className={styles.commentsNameWrapper}>
          <a className={styles.commentsUserName} href={link}>
            <span>{props.comment.user.login}</span>
          </a>
          <time className={styles.commentsTime}>{props.comment.date}</time>
        </div>
        <p className={styles.commentsText}>
          {props.comment.text}
        </p>
      </div>
    </div>
  );
}