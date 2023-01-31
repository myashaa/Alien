import React, {useState, useEffect} from "react";
import styles from "./Post.module.css";
import baseStyles from "../../index.module.css";

import Photo from "../../img/gagarin.jpg";
import UserPhoto from "../../img/userpic-larisa-small.jpg";
import IconHeart from "../../img/icon-heart.svg"; 
import IconHeartActive from "../../img/icon-heart-active.svg"; 
import IconComment from "../../img/icon-comment.svg"; 
import IconDelete from "../../img/delete.svg"; 
import {PhotoPost} from "../PhotoPost/PhotoPost";
import axios from "axios";
import {variables} from  "../../Variables";
import { UserPhotoPost } from "../UserPhotoPost/UserPhotoPost";

type PhotoType = {
    idPhoto: number,
    url: string
}

type UserType = {
  idUser: number,
  login: string,
  userPhotos: Array<PhotoType>,
}

interface PostProps {
  text: string,
  title: string,
  imgs: Array<PhotoType>,
  numberOfLikes: number,
  numberOfComments: number,
  id: number,
  user: UserType
}

export function Post(props: PostProps) {
    const [post, setPost] = React.useState(true);

    const [like, setLike] = useState(null);

    const handleToggleLikePanel = () => {
        axios.delete(variables.DELETE_LIKE + localStorage.getItem("idUser") + "/" + props.id.toString()).then((response) => {
          });
        setIsLikes(false);
    };
    const handleToggleUnlikePanel = () => {
        axios.post(variables.ADD_LIKE, {    
            IdUser: Number(localStorage.getItem("idUser")),
            IdPost: props.id, 
            date: new Date()
        }).then((response) => {
            setLike((data) => {
              return response.data;
            });
        });
        setIsLikes(true);
  };

  
    const [isLikes, setIsLikes] = useState(false);

  useEffect(() => {
    axios.get(variables.CHECK_LIKE + localStorage.getItem("idUser") + "/" + props.id?.toString()).then((response) => {
      setIsLikes(response.data);
    });
  }, []);

  let photo = "https://cdn-icons-png.flaticon.com/512/71/71298.png";
  if(props.user.userPhotos.length != 0)
  {
    photo = props.user.userPhotos[0].url;
  }

  function deletePost(id: number) {
    const str = String(id);
    axios
      .delete(variables.DELETE_POST_URL + str)
      .then(() => {
        alert("Post deleted!");
      });
      setPost(false)
  }

  let num: number = props.user.idUser;
  let str = num?.toString() || '';
  let link: string = "/profile/" + str;

  let numPost: number = props.id;
  let strPost = numPost?.toString() || '';
  let linkPost: string = "/post/" + strPost;

  const areYouAutor = (Number(localStorage.getItem("idUser")) == props.user.idUser);

  return (
    <>
    {post ?
    <article className={ styles.post }>
    <header className={styles.postHeader}>
      <h2><a href={linkPost}>{props.title}</a></h2>
    </header>
    <div className={styles.postMain}>
        {props.imgs.map((photo) => 
          <PhotoPost key = {photo.idPhoto} url = {photo.url} />
        )}
      <p>
        {props.text}
      </p>
      <div className={styles.postTextMoreLinkWrapper}>
          <a className={styles.postTextMoreLink} href={linkPost}>Подробнее</a>
      </div>
    </div>
    <footer className={styles.postFooter}>
      <div className={styles.postAuthor}>
        <a className={styles.postAuthorLink} href={link} title="Автор">
           {props.user.userPhotos.map((photo) => 
            <UserPhotoPost key = {photo.idPhoto} url = {photo.url} />
           )}
          <div className={styles.postInfo}>
            <b className={ styles.postAuthorName}>{props.user.login}</b>
          </div>
        </a>
      </div>
      <div className={styles.postIndicators}>
              <div className={styles.postButtons}>
          {isLikes ?
          <button className={`${styles.postIndicator} ${styles.postIndicatorLikes} ${baseStyles.button}`} onClick={handleToggleLikePanel} title="Лайк">
            <IconHeartActive className={`${ styles.postIndicatorIcon } ${ styles.postIndicatorIconLikeActive }`} width="20" height="17"/>   
            <span>{props.numberOfLikes}</span>
            <span className={baseStyles.visuallyHidden}>количество лайков</span>
          </button> :
          <button className={`${styles.postIndicator} ${styles.postIndicatorLikes} ${baseStyles.button}`} onClick={handleToggleUnlikePanel} title="Лайк">
            <IconHeart className={styles.postIndicatorIcon} width="20" height="17" />  
            <span>{props.numberOfLikes}</span>
            <span className={baseStyles.visuallyHidden}>количество лайков</span>
          </button>}
                
          <a className={`${styles.postIndicator} ${styles.postIndicatorComments} ${baseStyles.button}`} href={linkPost} title="Комментарии">
            <IconComment className={ styles.postIndicatorIcon } width="19" height="17" />
            <span>{props.numberOfComments}</span>
            <span className={baseStyles.visuallyHidden}>количество комментариев</span>
                </a>
          {areYouAutor ? 
            <button className={`${styles.postIndicator} ${styles.postIndicatorComments} ${baseStyles.button}`} onClick={() => deletePost(props.id)} title="Удаление">
              <IconDelete className={ styles.postIndicatorIcon } width="19" height="17" />
              <span className={baseStyles.visuallyHidden}>удаление поста </span>
            </button>
          : <></> }
        </div>
      </div>
    </footer>
  </article>
     : <></>}
    </>
  );
}