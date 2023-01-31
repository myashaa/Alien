import React, { FormEvent, useEffect, useState } from "react";
import styles from "./PostPage.module.css";
import baseStyles from "../../index.module.css";

import Photo from "../../img/rock-default.jpg";
import IconHeart from "../../img/icon-heart.svg"; 
import IconHeartActive from "../../img/icon-heart-active.svg"; 
import IconComment from "../../img/icon-comment.svg"; 
import { Footer } from "../../components/Footer/Footer";
import { Header } from '../../components/Header/Header';
import { Comment, PhotoType, UserType } from '../../components/Comment/Comment';
import axios from "axios";
import { variables } from "../../Variables";
import { compose } from "@reduxjs/toolkit";
import { Navigate } from "react-router";

type TagType = {
  name: string,
}

type PostType = {
  idPost: number,
  user: UserType,
  text: string,
  date: Date,
  title: string,
  numberOfLikes: number,
  numberOfComments: number,
  postPhotos: Array<PhotoType>,
  postTags: Array<TagType>,
}

interface PostProps {
  post: PostType,
}

export const PostPageConstructor = (props: PostProps) => {
  const [text, setText] = React.useState("");
  const [comment, setComment] = React.useState(false);

  let photoUser = "https://cdn-icons-png.flaticon.com/512/71/71298.png";
  if(props.post.user.userPhotos.length != 0)
  {
    photoUser = props.post.user.userPhotos[0].url;
  }

  let photoPost = "https://cdn-icons-png.flaticon.com/512/71/71298.png";
  if(props.post.postPhotos.length != 0)
  {
    photoPost = props.post.postPhotos[0].url;
  }

  //change to localStorage
  let idUser = 1;

  let num: number = props.post.user.idUser;
  let str = num?.toString() || '';
  let link: string = "/profile/" + str;

  let numPost: number = props.post.idPost;
  let strPost = numPost?.toString() || '';
  let linkPost: string = "/post/" + strPost;

  async function addComment() {
    await axios
      .post(variables.ADD_COMMENTS, 
        {
           idUser: idUser,
           idPost: props.post.idPost, 
           date: new Date(),
           text: text,
        })
      .then(() => {
        alert("Комментарий добавлен!");
      });
    setComment(true)
  }

  const handelSubmit = (e:FormEvent) => {
    e.preventDefault();

    addComment();
  }

  const [comments, setComments] = useState([]);
  
    useEffect(() => {
      axios.get(variables.COMMENTS_POST + props.post.idPost.toString()).then((response) => {
        setComments((data) => {
          return response.data;
        });
      });
    }, []);
  

  return (
    <>
    {comment ? (<Navigate to={linkPost} />) : (
    <div className={`${baseStyles.page} ${styles.pagePost}`}>
      <Header />
      <div className={styles.mainWrapper}>
        <div className={baseStyles.container}>
          <h1 className={`${baseStyles.pageTitle} ${baseStyles.pageTitleRegistration}`}>
            {props.post.title}
          </h1>
          <section className={styles.postDetails}>
            <h2 className={baseStyles.visuallyHidden}>Публикация</h2>
            <div className={`${styles.postDetailsWrapper} ${styles.postPhoto}`}>
              <div className={`${styles.postDetailsMainBlock} ${styles.post}`}>
                <div className={styles.postPhotoImageWrapper}>
                  <img src={photoPost} alt="Фото от пользователя" width="760" height="507" />
                </div>
                <div className={styles.postIndicators}>
                  <div className={styles.postButtons}>
                    <a className={`${styles.postIndicator} ${baseStyles.button}`} href="#" title="Лайк">
                      <IconHeart className={styles.postIndicatorIcon} width="20" height="17" />
                      {/* <IconHeartActive className={`${ styles.postIndicatorIcon } ${ styles.postIndicatorIconLikeActive }`} width="20" height="17"/> */}
                      <span>{props.post.numberOfLikes}</span>
                      <span className={baseStyles.visuallyHidden}>количество лайков</span>
                    </a>
                    <div className={`${styles.postIndicator} ${baseStyles.button}`}  title="Комментарии">
                      <IconComment className={ styles.postIndicatorIcon } width="19" height="17" />
                      <span>{props.post.numberOfComments}</span>
                      <span className={baseStyles.visuallyHidden}>количество комментариев</span>
                    </div>
                  </div>
                </div>
                <ul className={styles.postTags}>
                   {props.post.postTags.map((tag) => 
                     <li><span>#{tag.name}</span></li>
                    )}
                </ul>
                <div className={styles.comments}>
                  <form className={styles.commentsForm} onSubmit = {handelSubmit}>
                    <div className={`${baseStyles.formInputSection} ${baseStyles.formInputSectionError}`}>
                      <textarea className={`${styles.commentsTextarea} ${baseStyles.formTextarea} ${baseStyles.formInput}`}
                        placeholder="Ваш комментарий" onChange={(e) => setText(e.target.value)}></textarea>
                      <label className={baseStyles.visuallyHidden}>Ваш комментарий</label>
                    </div>
                    <button className={`${styles.commentsSubmit} ${baseStyles.button} ${baseStyles.buttonYellow}`} type="submit">Отправить</button>
                  </form>
                  <div className={styles.commentsListWrapper}>
                    <div className={styles.commentsList}>
                       {comments.map((comment) => 
                          <Comment key = {comment["idComment"]} comment = {comment}/>
                       )}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.postDetailsUser}>
                <div className={styles.postDetailsUserInfo}>
                  <div className={styles.postDetailsAvatar}>
                    <a className={styles.postDetailsAvatarLink} href={link}>
                      <img className={`${styles.userPicture} `} src={photoUser} alt="Аватар пользователя"/>
                    </a>
                  </div>
                  <div className={styles.postDetailsNameWrapper}>
                    <a className={styles.postDetailsName} href={link}>
                      <span>{props.post.user.login}</span>
                    </a>
                    {/* <time className="post-details__time user__time" datetime="2014-03-20">5 лет на сайте</time> */}
                  </div>
                </div>
                <div className={styles.postDetailsUserButtons}>
                  <button className={`${styles.postDetailsUserButton} ${baseStyles.button} ${baseStyles.buttonMain}`} type="button">Подписаться</button>
                  {/* <a className={`${styles.postDetailsUserButton} ${baseStyles.button} ${baseStyles.buttonYellow}`} href="#">Сообщение</a> */}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>)}
    </>
  );
}