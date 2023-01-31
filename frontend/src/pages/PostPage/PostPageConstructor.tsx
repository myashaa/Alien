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

  function addComment() {
    axios
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
  }

  const handelSubmit = (e:FormEvent) => {
    e.preventDefault();

    addComment();

    //setComment(true);
  }

  const [comments, setComments] = useState([]);

  const [sub, setSub] = useState(null);

    const handleToggleSubPanel = () => {
        axios.delete(variables.DELETE_SUB + localStorage.getItem('idUser') + "/" + props.post.user.idUser.toString()).then((response) => {
          });
        setIsSubs(false);
    };
    const handleToggleUnsubPanel = () => {
        axios.post(variables.ADD_SUB, {    
            idUser: Number(localStorage.getItem('idUser')),
            IdSubscriber: props.post.user.idUser, 
            date: new Date()
        }).then((response) => {
            setSub((data) => {
              return response.data;
            });
        });
        setIsSubs(true);
    };
  
  const [isSubs, setIsSubs] = useState(false);

  const [like, setLike] = useState(null);

    const handleToggleLikePanel = () => {
        axios.delete(variables.DELETE_LIKE + localStorage.getItem("idUser") + "/" + props.post.idPost.toString()).then((response) => {
          });
        setIsLikes(false);
    };
    const handleToggleUnlikePanel = () => {
        axios.post(variables.ADD_LIKE, {    
            IdUser: Number(localStorage.getItem("idUser")),
            IdPost: props.post.idPost, 
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
    axios.get(variables.CHECK_LIKE + localStorage.getItem("idUser") + "/" + props.post.idPost?.toString()).then((response) => {
      setIsLikes(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get(variables.CHECK_SUB + localStorage.getItem('idUser') + "/" + props.post.user.idUser?.toString()).then((response) => {
      setIsSubs(response.data);
    });
  }, []);
  
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
                <div className={styles.postText}>
                  <p>{props.post.text}</p>
                </div>
                <div className={styles.postIndicators}>
                  <div className={styles.postButtons}>
                    {!isLikes ?
                    <button className={`${styles.postIndicator} ${baseStyles.button}`} title="Лайк" onClick={handleToggleUnlikePanel}>
                      <IconHeart className={styles.postIndicatorIcon} width="20" height="17" /> 
                      <span>{props.post.numberOfLikes}</span>
                      <span className={baseStyles.visuallyHidden}>количество лайков</span>
                    </button>:
                    <button className={`${styles.postIndicator} ${baseStyles.button}`} title="Лайк" onClick={handleToggleLikePanel}>
                      <IconHeartActive className={`${ styles.postIndicatorIcon } ${ styles.postIndicatorIconLikeActive }`} width="20" height="17"/>
                      <span>{props.post.numberOfLikes}</span>
                      <span className={baseStyles.visuallyHidden}>количество лайков</span>
                    </button>}
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
                {!isSubs ? (
                <>
                 <div className={styles.postDetailsUserButtons}>
                    <button className={`${styles.postDetailsUserButton} ${baseStyles.button} ${baseStyles.buttonMain}`} onClick={handleToggleUnsubPanel}>
                        Подписаться
                    </button>
                 </div>
                </> 
                ) : (null)}

               {isSubs ? (
               <>
                  <div className={styles.postDetailsUserButtons}>
                    <button className={`${styles.postDetailsUserButton} ${baseStyles.button} ${baseStyles.buttonQuartz}`} onClick={handleToggleSubPanel}>
                        Отписаться
                    </button>
                  </div>
                </> 
                    ) : (null)}
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