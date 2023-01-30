import React, {useState, useEffect, ChangeEvent} from "react";
import styles from "./FeedPage.module.css";
import baseStyles from "../../index.module.css";

import { Footer } from "../../components/Footer/Footer";
import { Header } from '../../components/Header/Header';
import { Post } from '../../components/Post/Post';
import {variables} from  "../../Variables";
import axios from "axios";

export const FeedPage = () => {
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

    const [topPanelVisible, setTopPanelVisible] = useState(false);
    const handleToggleTopPanel = () => {
        setTopPanelVisible(true);
        setNewsPanelVisible(false);
        setAllPanelVisible(false);
        processSearch();
    };
    const [newsPanelVisible, setNewsPanelVisible] = useState(false);
    const handleToggleNewsPanel = () => {
        setNewsPanelVisible(true);
        setTopPanelVisible(false);
        setAllPanelVisible(false);
        processSearch();
    };
    const [allPanelVisible, setAllPanelVisible] = useState(true);
    const handleToggleAllPanel = () => {
        setAllPanelVisible(true);
        setTopPanelVisible(false);
        setNewsPanelVisible(false);
        processSearch();
    };

    function processSearch() {
      if(newsPanelVisible && datePanelVisible)
      {
        axios.get(variables.NEWS_POST_DATE).then((response) => {
          setPosts((data) => {
            return response.data;
          });
        });
      }
      if(newsPanelVisible && likePanelVisible)
      {
        axios.get(variables.NEWS_POST_LIKE).then((response) => {
          setPosts((data) => {
            return response.data;
          });
        });
      }
      if(newsPanelVisible && commentPanelVisible)
      {
        axios.get(variables.NEWS_POST_COMMENT).then((response) => {
          setPosts((data) => {
            return response.data;
          });
        });
      }
      if(allPanelVisible && datePanelVisible)
      {
        axios.get(variables.POST_DATE).then((response) => {
          setPosts((data) => {
            return response.data;
          });
        });
      }
      if(allPanelVisible && likePanelVisible)
      {
        axios.get(variables.POST_LIKE).then((response) => {
          setPosts((data) => {
            return response.data;
          });
        });
      }
      if(allPanelVisible && commentPanelVisible)
      {
        axios.get(variables.POST_COMMENT).then((response) => {
          setPosts((data) => {
            return response.data;
          });
        });
      }
      if(topPanelVisible && datePanelVisible)
      {
        axios.get(variables.TOP_POST_DATE).then((response) => {
          setPosts((data) => {
            return response.data;
          });
        });
      }
      if(topPanelVisible && likePanelVisible)
      {
        axios.get(variables.TOP_POST_LIKE).then((response) => {
          setPosts((data) => {
            return response.data;
          });
        });
      }
      if(topPanelVisible && commentPanelVisible)
      {
        axios.get(variables.TOP_POST_COMMENT).then((response) => {
          setPosts((data) => {
            return response.data;
          });
        });
      }
     }

  function changeFunc(e: ChangeEvent<HTMLSelectElement>) {
      var opt = e.target.value;
      if(opt == "Новости")
      {
        handleToggleNewsPanel();
        processSearch();
      }
      if(opt == "Топ недели")
      {
        handleToggleTopPanel();
        processSearch();
      }
      if(opt == "Все")
      {
        handleToggleAllPanel();
        processSearch();
      }
  }

  useEffect(() => {
    axios.get(variables.POST_DATE).then((response) => {
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
            Лента
          </h1>
        </div>
        <div className={baseStyles.container}>
          <div className={styles.feedFiltersWrapper}>
            <div className={styles.feedSorting}>
              <b className={styles.feedSortingCaption}>Сортировка:</b>
              <select className={`${ styles.sortingItem } ${ styles.sortingSelect }`} onChange={(e) => changeFunc(e)}>
                <option className={`${ styles.sortingLink } ${ styles.sortingLinkActive }`} value = "Все">
                  <span>Все</span>
                </option>
                <option className={`${ styles.sortingLink } ${ styles.sortingLinkActive }`} value = "Топ недели">
                  <span>Топ недели</span>
                </option>
                <option className={`${ styles.sortingLink } ${ styles.sortingLinkActive }`} value = "Новости">
                  <span>Новости</span>
                </option>
              </select>
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