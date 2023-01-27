import React from "react";
import styles from "./SearchPage.module.css";
import baseStyles from "../../index.module.css";

import { Footer } from "../../components/Footer/Footer";
import { Header } from '../../components/Header/Header';
import { Post } from '../../components/Post/Post';

export const SearchPage = () => {
  return (
    <div className={`${baseStyles.page} ${styles.pageSearch}`}>
      <Header />
      <div className={styles.mainWrapper}>
        <div className={baseStyles.container}>
          <div className={styles.feedFiltersWrapper}>
            <div className={styles.feedSorting}>
              <b className={styles.feedSortingCaption}>Поиск по:</b>
              <div className={styles.feedSortingList}>
                <select className={`${ styles.sortingItem } ${ styles.sortingItemFeed }`}>
                  <option className={`${ styles.sortingLink } ${ styles.sortingLinkActive }`}>
                    <span>Пользователи</span>
                  </option>
                  <option className={`${ styles.sortingLink } ${ styles.sortingLinkActive }`}>
                    <span>Заголовок</span>
                  </option>
                  <option className={`${ styles.sortingLink } ${ styles.sortingLinkActive }`}>
                    <span>Тэг</span>
                  </option>
                </select>
                <form className={styles.searchForm} action="#" method="get">
                  <div className={styles.search}>
                    <label className={baseStyles.visuallyHidden}>Поиск</label>
                    <input className={`${ styles.searchInput } ${ baseStyles.formInput }`} type="search" />
                    <button className={`${styles.searchButton} ${baseStyles.button}`} type="submit">
                      <span>Поиск</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className={`${ styles.feedPosts } ${ baseStyles.container }`}>
          {/* <Post /> */}
          {/* <Post /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}