import React, {useState, useEffect} from "react";
import styles from "./ProfilePage.module.css";
import baseStyles from "../../index.module.css";
import { NavLink } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Header } from '../../components/Header/Header';
import { Profile } from '../../components/Profile/Profile';
import { Post } from '../../components/Post/Post';
import { Subscribers } from '../../components/Subscribers/Subscribers';
import { LikesAlert } from '../../components/LikesAlert/LikesAlert';
import { CommentsAlert } from '../../components/CommentsAlert/CommentsAlert';
import {variables} from  "../../Variables";
import axios from "axios";

export const ProfilePage = () => {

  const [subs, setSubs] = useState([]);
  const [subers, setSubers] = useState([]);
  const [user, setUser] = React.useState(null);
  const [posts, setPosts] = useState([]);
  const [likes, setLike] = useState([]);
  const [comments, setComment] = useState([]);
  
  const [PostPanelVisible, setPostPanelVisible] = useState(true);
    const handleTogglePostPanel = () => {
        setPostPanelVisible(true);
        setLikesPanelVisible(false);
        setCommentsPanelVisible(false);
        setSubscribersPanelVisible(false);
        setSubsPanelVisible(false);
    };
    const [LikesPanelVisible, setLikesPanelVisible] = useState(false);
    const handleToggleLikesPanel = () => {
        setLikesPanelVisible(true);
        setPostPanelVisible(false);
        setCommentsPanelVisible(false);
        setSubscribersPanelVisible(false);
        setSubsPanelVisible(false);
    };
    const [CommentsPanelVisible, setCommentsPanelVisible] = useState(false);
    const handleToggleCommentsPanel = () => {
        setCommentsPanelVisible(true);
        setPostPanelVisible(false);
        setLikesPanelVisible(false);
        setSubscribersPanelVisible(false);
        setSubsPanelVisible(false);
    };
    const [SubscribersPanelVisible, setSubscribersPanelVisible] = useState(false);
    const handleToggleSubscribersPanel = () => {
        setSubscribersPanelVisible(true);
        setPostPanelVisible(false);
        setLikesPanelVisible(false);
        setCommentsPanelVisible(false);
        setSubsPanelVisible(false);
    };
    const [SubsPanelVisible, setSubsPanelVisible] = useState(false);
    const handleToggleSubsPanel = () => {
        setSubsPanelVisible(true);
        setPostPanelVisible(false);
        setLikesPanelVisible(false);
        setCommentsPanelVisible(false);
        setSubscribersPanelVisible(false);
    };

    useEffect(() => {
      axios.get(variables.SUB_USER + localStorage.getItem('idUser')).then((response) => {
        setSubs((data) => {
          return response.data;
        });
      });
      axios.get(variables.SUBERS_USER + localStorage.getItem('idUser')).then((response) => {
        setSubers((data) => {
          return response.data;
        });
      });
      axios.get(variables.USER_URL + localStorage.getItem('idUser')).then((response) => {
        setUser(response.data);
      });
      axios.get(variables.POST_USER + localStorage.getItem('idUser')).then((response) => {
        setPosts((data) => {
          return response.data;
        });
      });
      axios.get(variables.ALLERT_LIKE + localStorage.getItem('idUser')).then((response) => {
        setLike((data) => {
          return response.data;
        });
      });
      axios.get(variables.ALLERT_COMMENT + localStorage.getItem('idUser')).then((response) => {
        setComment((data) => {
          return response.data;
        });
      });      
    }, []);

  if (user == null){
     return null;
  }
  let isBlogger = false;
  if(user["numberOfSubscribers"] > 4)
  {
    isBlogger = true;
  }
  return (
    <div className={`${baseStyles.page} ${styles.pageAnalitic}`}>
      <Header />
      <Profile login = {user["login"]} numberOfPosts = {user["numberOfPosts"]} numberOfSubscribers = {user["numberOfSubscribers"]} photo = {user["userPhotos"]}/>

      <div className={styles.mainWrapper}>
          <div className={baseStyles.container}>
            <div className={styles.feedFiltersWrapper}>
              <div className={styles.feedSorting}>
                <ul className={styles.feedSortingList}>
                  <li className={ styles.sortingItem } onClick={handleTogglePostPanel}>
                    <a className={PostPanelVisible ? `${styles.sortingLink} ${styles.sortingLinkActive}` : styles.sortingLink}>
                      <span>Посты</span>
                    </a>
                  </li>
                  <li className={ styles.sortingItem } onClick={handleToggleLikesPanel}>
                    <a className={LikesPanelVisible ? `${styles.sortingLink} ${styles.sortingLinkActive}` : styles.sortingLink}>
                      <span>Лайки</span>
                    </a>
                  </li>
                  <li className={ styles.sortingItem } onClick={handleToggleCommentsPanel}>
                    <a className={CommentsPanelVisible ? `${styles.sortingLink} ${styles.sortingLinkActive}` : styles.sortingLink}>
                      <span>Коментарии</span>
                    </a>
                  </li>
                  <li className={ styles.sortingItem } onClick={handleToggleSubsPanel}>
                    <a className={SubsPanelVisible ? `${styles.sortingLink} ${styles.sortingLinkActive}` : styles.sortingLink}>
                      <span>Подписки</span>
                    </a>
                  </li>
                  <li className={ styles.sortingItem } onClick={handleToggleSubscribersPanel}>
                    <a className={SubscribersPanelVisible ? `${styles.sortingLink} ${styles.sortingLinkActive}` : styles.sortingLink}>
                      <span>Подписчики</span>
                    </a>
                  </li>
                  {isBlogger ? 
                    <li className={ styles.sortingItem } onClick={handleToggleLikesPanel}>
                     <NavLink to="/analitic" className={styles.sortingLink} title="Аналитика">
                       <span>Аналитика</span>
                     </NavLink>
                    </li>
                  : <></>}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {PostPanelVisible ? (
            <>
              <div className={`${ styles.analiticPosts } ${ baseStyles.container }`}>
                {posts.map((post) => 
                  <Post key = {post["idPost"]} numberOfLikes = {post["numberOfLikes"]} numberOfComments = {post["numberOfComments"]} title = {post["title"]} 
                  imgs = {post["postPhotos"]} text= {post["text"]} id = {post["idPost"]} user = {post["user"]}/>
                )}
              </div> 
            </> 
        ) : (null)} 
         
        {LikesPanelVisible ? (
            <>
              <div className={`${ styles.analiticPosts } ${ baseStyles.container }`}>
                <section className={`${ styles.profileSubscriptions} ${styles.tabsContent } ${styles.tabsContentActive }`}>
                  <ul className={`${styles.profileLikesList}`}>
                   {likes.map((like) =>
                       <li key = {like["idUser"]} className={`${ styles.postMini} ${styles.post } ${styles.postLikesAlert } ${baseStyles.user }`}>
                       <LikesAlert user={like["user"]} date={like["date"]} postPhotos={like["postPhotos"]} idPost={like["idPost"]} />
                      </li>
                    )}  
                  </ul>
                </section>
              </div> 
            </> 
        ) : (null)}

        {CommentsPanelVisible ? (
            <>
              <div className={`${ styles.analiticPosts } ${ baseStyles.container }`}>
                <section className={`${ styles.profileSubscriptions} ${styles.tabsContent } ${styles.tabsContentActive }`}>
                  <ul className={`${ styles.profileLikesList}`}> 
                  {comments.map((comment) =>
                    <li key = {comment["idUser"]} className={`${ styles.postMini} ${styles.post } ${styles.postLikesAlert } ${baseStyles.user }`}>
                      <CommentsAlert user={comment["user"]} date={comment["date"]} text={comment["text"]} idPost={comment["idPost"]} postPhotos={comment["postPhotos"]} />
                      </li>)}
                </ul>
                </section>
              </div> 
            </> 
        ) : (null)} 

        {SubscribersPanelVisible ? (
            <>
              <div className={`${ styles.analiticPosts } ${ baseStyles.container }`}>
              <section className={`${ styles.profileSubscriptions} ${styles.tabsContent } ${styles.tabsContentActive }`}>
                <ul className={`${ styles.profileSubscriptionsList}`}> 
                  {subers.map((suber) =>
                    <div key = {suber["idUser"]} className={`${ styles.postMini} ${styles.post } ${baseStyles.user }`}>
                      <Subscribers bloggerId={user["idUser"]} user={suber["user"]}/>
                    </div>)}
                </ul>
              </section>
              </div>
            </> 
        ) : (null)} 
        {SubsPanelVisible ? (
            <>
        <div className={`${ styles.analiticPosts } ${ baseStyles.container }`}>
        <section className={`${ styles.profileSubscriptions} ${styles.tabsContent } ${styles.tabsContentActive }`}>
            <ul className={`${ styles.profileSubscriptionsList}`}> 
                {subs.map((sub) =>
                    <div key = {sub["idUser"]} className={`${ styles.postMini} ${styles.post } ${baseStyles.user }`}>
                      <Subscribers bloggerId={user["idUser"]} user={sub["subscriber"]}/>
                </div>)}
            </ul>
        </section>
        </div>
            </> 
        ) : (null)} 


      <Footer />
    </div>
  );
}
