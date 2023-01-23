import React, {useState, useEffect} from "react";
import styles from "./FeedPage.module.css";
import baseStyles from "../../index.module.css";

import { Footer } from "../../components/Footer/Footer";
import { Header } from '../../components/Header/Header';
import { Post } from '../../components/Post/Post';
import {variables} from  "../../Variables";
import axios from "axios";
import { title } from "process";

export const FeedPage = () => {
  const [posts, setusers] = useState([]);

  useEffect(() => {
    axios.get(variables.POST_URL).then((response) => {
      setusers((data) => {
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
              <select className={`${ styles.sortingItem } ${ styles.sortingSelect }`}>
                <option className={`${ styles.sortingLink } ${ styles.sortingLinkActive }`}>
                  <span>Все</span>
                </option>
                <option className={`${ styles.sortingLink } ${ styles.sortingLinkActive }`}>
                  <span>Топ недели</span>
                </option>
                <option className={`${ styles.sortingLink } ${ styles.sortingLinkActive }`}>
                  <span>Новости</span>
                </option>
              </select>
              <ul className={styles.feedSortingList}>
                <li className={ styles.sortingItem }>
                  <a className={ styles.sortingLink } href="#">
                    <span>Дата</span>
                  </a>
                </li>
                <li className={styles.sortingItem} >
                  <a className={ styles.sortingLink } href="#">
                    <span>Лайки</span>
                  </a>
                </li>
                <li className={ styles.sortingItem }>
                  <a className={ styles.sortingLink } href="#">
                    <span>Комментарии</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`${ styles.feedPosts } ${ baseStyles.container }`}>
              {posts.map((post) => 
                <Post key = {post["idPost"]} login = "none" numberOfLikes = {post["numberOfLikes"]} numberOfComments = {post["numberOfComments"]} title = {post["title"]} 
                imgs = {post["postPhotos"]} imgUser = "none" text= {post["text"]}/>
              )}
        </div>  
      </div>
      <Footer />
    </div>
  );
}