import React from "react";
import styles from "./MyFeedPage.module.css";
import baseStyles from "../../index.module.css";

import { Footer } from "../../components/Footer/Footer";
import { Header } from '../../components/Header/Header';
import { Post } from '../../components/Post/Post';

export const MyFeedPage = () => {
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
          {/*<Post />*/}
        </div>  
      </div>
      <Footer />
    </div>
  );
}