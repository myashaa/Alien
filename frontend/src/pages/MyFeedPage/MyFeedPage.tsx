import React, { useEffect, useState } from "react";
import styles from "./MyFeedPage.module.css";
import baseStyles from "../../index.module.css";

import { Footer } from "../../components/Footer/Footer";
import { Header } from '../../components/Header/Header';
import { Post } from '../../components/Post/Post';
import axios from "axios";
import { variables } from "../../Variables";

export const MyFeedPage = () => {

   const [posts, setPosts] = useState([]);

  const [commentPanelVisible, setCommentPanelVisible] = useState(false);
    const handleToggleCommentPanel = () => {
        setCommentPanelVisible(true);
        setLikePanelVisible(false);
        setDatePanelVisible(false);
        processSearch();
    };
    const [likePanelVisible, setLikePanelVisible] = useState(false);
    const handleToggleLikePanel = () => {
        setLikePanelVisible(true);
        setCommentPanelVisible(false);
        setDatePanelVisible(false);
        processSearch();
    };
    const [datePanelVisible, setDatePanelVisible] = useState(true);
    const handleToggleDatePanel = () => {
        setDatePanelVisible(true);
        setCommentPanelVisible(false);
        setLikePanelVisible(false);
        processSearch();
    };

  
    function processSearch() {
      if(datePanelVisible)
      {
        axios.get(variables.MY_FEED_DATE + localStorage.getItem('idUser')).then((response) => {
          setPosts((data) => {
            return response.data;
          });
        });
      }
      if(likePanelVisible)
      {
        axios.get(variables.MY_FEED_LIKE + localStorage.getItem('idUser')).then((response) => {
          setPosts((data) => {
            return response.data;
          });
        });
      }
      if(commentPanelVisible)
      {
        axios.get(variables.MY_FEED_COMMENT + localStorage.getItem('idUser')).then((response) => {
          setPosts((data) => {
            return response.data;
          });
        });
      }
  }
  
    useEffect(() => {
    axios.get(variables.MY_FEED_DATE + localStorage.getItem('idUser')).then((response) => {
      setPosts((data) => {
        return response.data;
      });
    });
  }, []);

  return (
    <div className={`${baseStyles.page} ${styles.pageFeed}`}>
      <Header />
      <div className={styles.mainWrapper}>
        <div className={baseStyles.container}>
          <h1 className={`${baseStyles.pageTitle} ${baseStyles.pageTitleLogin}`}>
            Моя лента
          </h1>
        </div>
        <div className={baseStyles.container}>
          <div className={styles.feedFiltersWrapper}>
            <div className={styles.feedSorting}>
              <b className={styles.feedSortingCaption}>Сортировка:</b>
              <ul className={styles.feedSortingList}>
                <li className={ styles.sortingItem }>
                  <a className={ styles.sortingLink } href="#" onClick={() => handleToggleDatePanel()}>
                    <span>Дата</span>
                  </a>
                </li>
                <li className={styles.sortingItem} >
                  <a className={ styles.sortingLink } href="#" onClick={() => handleToggleLikePanel()}>
                    <span>Лайки</span>
                  </a>
                </li>
                <li className={ styles.sortingItem }>
                  <a className={ styles.sortingLink } href="#" onClick={() => handleToggleCommentPanel()}>
                    <span>Комментарии</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`${ styles.feedPosts } ${ baseStyles.container }`}>
          {posts.map((post) => 
                <Post key = {post["idPost"]} numberOfLikes = {post["numberOfLikes"]} numberOfComments = {post["numberOfComments"]} title = {post["title"]} 
                imgs = {post["postPhotos"]} text= {post["text"]} id = {post["idPost"]} user = {post["user"]}/>
          )}
        </div>  
      </div>
      <Footer />
    </div>
  );
}