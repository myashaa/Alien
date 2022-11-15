import React from "react";
import styles from "./FeedPage.module.css";
import baseStyles from "../../index.module.css";

import { Footer } from "../../components/Footer/Footer";
import { Header } from '../../components/Header/Header';
import { Post } from '../../components/Post/Post';

import IconSort from "../../img/icon-sort.svg"; 

export const FeedPage = () => {
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
          <div className={styles.popularFiltersWrapper}>
            <div className={styles.popularSorting}>
              <b className={styles.popularSortingCaption}>Сортировка:</b>
              <ul className={styles.popularSortingList}>
                <li className={`${ styles.sortingItem } ${ styles.sortingItemPopular }`}>
                  <a className={`${ styles.sortingLink } ${ styles.sortingLinkActive }`} href="#">
                    <span>Популярность</span>
                    <IconSort className={styles.sortingIcon} width="10" height="12" />
                  </a>
                </li>
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
        <div className={`${ styles.popularPosts } ${ baseStyles.container }`}>
          <Post />
          <Post />
          <Post />
          <Post />
        </div>  
      </div>
      <Footer />
    </div>
  );
}