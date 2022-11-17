import React from "react";
import styles from "./ProfilePage.module.css";
import baseStyles from "../../index.module.css";
import {useState } from 'react';
import { NavLink } from "react-router-dom";

import { Footer } from "../../components/Footer/Footer";
import { Header } from '../../components/Header/Header';
import { Profile } from '../../components/Profile/Profile';
import { Post } from '../../components/Post/Post';
import { Subscribers } from '../../components/Subscribers/Subscribers';

export const ProfilePage = () => {
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

  return (
    <div className={`${baseStyles.page} ${styles.pageAnalitic}`}>
      <Header />
      <Profile/>

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
                  <li className={ styles.sortingItem } onClick={handleToggleLikesPanel}>
                    <a className={CommentsPanelVisible ? `${styles.sortingLink} ${styles.sortingLinkActive}` : styles.sortingLink}>
                      <span>Коментарии</span>
                    </a>
                  </li>
                  <li className={ styles.sortingItem } onClick={handleToggleCommentsPanel}>
                    <a className={SubsPanelVisible ? `${styles.sortingLink} ${styles.sortingLinkActive}` : styles.sortingLink}>
                      <span>Подписки</span>
                    </a>
                  </li>
                  <li className={ styles.sortingItem } onClick={handleToggleSubscribersPanel}>
                    <a className={SubscribersPanelVisible ? `${styles.sortingLink} ${styles.sortingLinkActive}` : styles.sortingLink}>
                      <span>Подписчики</span>
                    </a>
                  </li>
                  <li className={ styles.sortingItem } onClick={handleToggleLikesPanel}>
                    <NavLink to="/analitic" className={styles.sortingLink} title="Аналитика">
                      <span>Аналитика</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {PostPanelVisible ? (
            <>
              <div className={`${ styles.analiticPosts } ${ baseStyles.container }`}>
                <Post />
                <Post />
                <Post />
                <Post />
              </div> 
            </> 
        ) : (null)} 
        {SubscribersPanelVisible ? (
            <>
        <div className={`${ styles.analiticPosts } ${ baseStyles.container }`}>
        <section className={`${ styles.profileSubscriptions} ${styles.tabsContent } ${styles.tabsContentActive }`}>
          <ul className={`${ styles.profileSubscriptionsList}`}>
            <li className={`${ styles.postMini} ${styles.post } ${baseStyles.user }`}>
              <Subscribers/>
            </li>
          </ul>
        </section>
        </div>
            </> 
        ) : (null)} 


      <Footer />
    </div>
  );
}
