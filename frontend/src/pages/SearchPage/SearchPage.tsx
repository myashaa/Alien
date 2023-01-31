import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./SearchPage.module.css";
import baseStyles from "../../index.module.css";

import { Footer } from "../../components/Footer/Footer";
import { Header } from '../../components/Header/Header';
import { Post } from '../../components/Post/Post';
import { Subscribers } from "../../components/Subscribers/Subscribers";
import axios from "axios";
import { variables } from "../../Variables";

export const SearchPage = () => {

  const [peoplePanelVisible, setPeoplePanelVisible] = useState(true);
    const handleTogglePeoplePanel = () => {
        setPeoplePanelVisible(true);
        setTagPanelVisible(false);
        setTitlePanelVisible(false);
    };
    const [tagPanelVisible, setTagPanelVisible] = useState(false);
    const handleToggleTagPanel = () => {
        setTagPanelVisible(true);
        setPeoplePanelVisible(false);
        setTitlePanelVisible(false);
    };
    const [titlePanelVisible, setTitlePanelVisible] = useState(false);
    const handleToggleTitlePanel = () => {
        setTitlePanelVisible(true);
        setPeoplePanelVisible(false);
        setTagPanelVisible(false);
    };

    const [users, setUsers] = useState([]);
    const [tag, setTag] = useState([]);
    const [title, setTitle] = useState([]);

    const [login, setLogin] = useState("");
    const [tagStr, setTagStr] = useState("");
    const [titleStr, setTitleStr] = useState("");

    function processSearch() {
      if(peoplePanelVisible)
      {
          axios.get(variables.USER_URL + login).then((response) => {
            setUsers((data) => {
              return response.data;
            });
          });
      }
      if(titlePanelVisible)
      {
          axios.get(variables.POST_TITLE_URL + titleStr).then((response) => {
            setTitle((data) => {
              return response.data;
            });
          });
      }
      if(tagPanelVisible)
      {
          axios.get(variables.POST_TAG_URL + tagStr).then((response) => {
            setTag((data) => {
              return response.data;
            });
          });
      }
     }


    function changeFunc(e: ChangeEvent<HTMLSelectElement>) {
      var opt = e.target.value;
      if(opt == "Пользователи")
      {
        handleTogglePeoplePanel();
      }
      if(opt == "Заголовок")
      {
        handleToggleTitlePanel();
      }
      if(opt == "Тэг")
      {
        handleToggleTagPanel();
      }
     }

     function InputStr(e: ChangeEvent<HTMLInputElement>) {
      var str = e.target.value;
      if(peoplePanelVisible)
      {
        setLogin(str);
      }
      if(titlePanelVisible)
      {
        setTitleStr(str);
      }
      if(tagPanelVisible)
      {
        setTagStr(str);
      }
     }
  

  return (
    <div className={`${baseStyles.page} ${styles.pageSearch}`}>
      <Header />
      <div className={styles.mainWrapper}>
        <div className={baseStyles.container}>
          <div className={styles.feedFiltersWrapper}>
            <div className={styles.feedSorting}>
              <b className={styles.feedSortingCaption}>Поиск по:</b>
              <div className={styles.feedSortingList}>

                <select id="selectBox" onChange={(e) => changeFunc(e)} className={`${ styles.sortingItem } ${ styles.sortingItemFeed }`}>
                  <option className={`${ styles.sortingLink } ${ styles.sortingLinkActive }`} value="Пользователи">
                    <span>Пользователи</span>
                  </option>
                  <option className={`${ styles.sortingLink } ${ styles.sortingLinkActive }`} value="Заголовок">
                    <span>Заголовок</span>
                  </option>
                  <option className={`${ styles.sortingLink } ${ styles.sortingLinkActive }`} value="Тэг">
                    <span>Тэг</span>
                  </option>
                </select>

                <form className={styles.searchForm} action="#" method="get">
                  <div className={styles.search}>
                    <label className={baseStyles.visuallyHidden}>Поиск</label>
                    <input className={`${ styles.searchInput } ${ baseStyles.formInput }`} onChange={(e) => InputStr(e)} type="search" />
                    <button className={`${styles.searchButton} ${baseStyles.button}`} onClick = {() => processSearch()}>
                      <span>Поиск</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className={`${ styles.feedPosts } ${ baseStyles.container }`}>
          {titlePanelVisible ? (
            <>
              <div className={`${ styles.feedPosts } ${ baseStyles.container }`}>
                {title.map((post) => 
                  <Post key = {post["idPost"]}  numberOfLikes = {post["numberOfLikes"]} numberOfComments = {post["numberOfComments"]} title = {post["title"]} 
                  imgs = {post["postPhotos"]} text= {post["text"]} id = {post["idPost"]} user = {post["user"]}/>
                )}
              </div>  
            </> 
          ) : (null)}
          {tagPanelVisible ? (
            <>
            <div className={`${ styles.feedPosts } ${ baseStyles.container }`}>
              {tag.map((post) => 
                <Post key = {post["idPost"]}  numberOfLikes = {post["numberOfLikes"]} numberOfComments = {post["numberOfComments"]} title = {post["title"]} 
                imgs = {post["postPhotos"]} text= {post["text"]} id = {post["idPost"]} user = {post["user"]}/>
              )}
              </div>  
            </> 
          ) : (null)}
          {peoplePanelVisible ? (
            <>
            <div className={`${ styles.analiticPosts } ${ baseStyles.container }`}>
            <section className={`${ styles.profileSubscriptions} ${styles.tabsContent } ${styles.tabsContentActive }`}>
              <ul className={`${ styles.profileSubscriptionsList}`}> 
                {users.map((user) =>
                  <div key = {user["idUser"]} className={`${ styles.postMini} ${styles.post } ${baseStyles.user }`}>
                    <Subscribers bloggerId={Number(localStorage.getItem("idUser"))} user={user} />
                  </div>)}
              </ul>
            </section>
            </div>
          </> 
        ) : (null)} 
        </div>
      </div>
      <Footer />
    </div>
  );
}