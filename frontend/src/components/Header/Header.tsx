import React, { useState } from "react";
import styles from "./Header.module.css";
import baseStyles from "../../index.module.css";

import logo from "../../img/logo.svg";
import iconSearch from "../../img/icon-search.svg";
import userPhoto from "../../img/userpic-medium.jpg";
import { Link, NavLink } from "react-router-dom";

export function Header() {
  const [isUser, setUser] = useState(false);
  
  return (
    <header className={styles.header}>
      <div className={`${ styles.headerWrapper } ${ baseStyles.container }`}>
        <div className={styles.headerLogoWrapper}>
          <a className={styles.headerLogoLink} href="/">
            <img className={styles.headerLogo} src={ logo } alt="Логотип readme" width="128" height="24" />
          </a>
          <p className={styles.headerTopic}>
              micro blogging
          </p>
        </div>
        <form className={styles.headerSearchForm} action="#" method="get">
          <div className={styles.headerSearch}>
            <label className={baseStyles.visuallyHidden}>Поиск</label>
            <input className={`${ styles.headerSearchInput } ${ baseStyles.formInput }`} type="search" />
            <button className={`${styles.headerSearchButton} ${baseStyles.button}`} type="submit">
              {/* <img className={styles.headerSearchIcon} src={ iconSearch } alt="Аватар профиля" width="18" height="18" /> */}
              <svg className={styles.headerSearchIcon} width="18" height="18">
                <use xlinkHref="#icon-search"></use>
              </svg>
              <span className={baseStyles.visuallyHidden}>Начать поиск</span>
            </button>
          </div>
        </form>
        <div className={styles.headerNavWrapper}>
          <nav className={styles.headerNav}>
            <ul className={styles.headerMyNav}>
              <li className={`${styles.headerMyPage} ${styles.headerMyPagePopular}`}>
                <NavLink to="/feed" className={({isActive}) => isActive ? `${styles.headerPageLink} ${styles.headerPageLinkActive}` : styles.headerPageLink} title="Популярный контент">
                  <span className={baseStyles.visuallyHidden}>Популярный контент</span>
                </NavLink> 
              </li>
              <li className={`${styles.headerMyPage} ${styles.headerMyPageFeed}`}>
                <NavLink to="/my-feed" className={({isActive}) => isActive ? `${styles.headerPageLink} ${styles.headerPageLinkActive}` : styles.headerPageLink} title="Моя лента">
                  <span className={baseStyles.visuallyHidden}>Моя лента</span>
                </NavLink> 
              </li>
              <li className={`${styles.headerMyPage} ${styles.headerMyPageMessages}`}>
                <NavLink to="/messages" className={({isActive}) => isActive ? `${styles.headerPageLink} ${styles.headerPageLinkActive}` : styles.headerPageLink} title="Личные сообщения">
                  <span className={baseStyles.visuallyHidden}>Личные сообщения</span>
                </NavLink> 
              </li>
            </ul>
            {isUser ?
            (<ul className={styles.headerUserNav}>
              <li className={styles.headerProfile}>
                <a className={styles.headerProfileLink} href="#">
                  <div className={styles.headerAvatarWrapper}>
                    <img className={styles.headerProfileAvatar} src={ userPhoto } alt="Аватар профиля" />
                  </div>
                  <div className={styles.headerProfileName}>
                    <span>Антон Глуханько</span>
                    {/* <svg className={styles.headerLinkArrow} width="10" height="6"> */}
                      {/* <use xlink:href="#icon-arrow-right-ad"></use> */}
                    {/* </svg> */}
                  </div>
                </a>
                <div className={styles.headerTooltipWrapper}>
                  <div className={styles.headerProfileTooltip}>
                    <ul className={styles.headerProfileNav}>
                      <li className={styles.headerProfileNavItem}>
                        <a className={styles.headerProfileNavLink} href="#">
                          <span className={styles.headerProfileNavText}>
                            Мой профиль
                          </span>
                        </a>
                      </li>
                      <li className={styles.headerProfileNavItem}>
                        <a className={styles.headerProfileNavLink} href="#">
                          <span className={styles.headerProfileNavText}>
                            Сообщения
                            <i className={styles.headerProfileIndicator}>2</i>
                          </span>
                        </a>
                      </li>
                      <li className={styles.headerProfileNavItem}>
                        <a className={styles.headerProfileNavLink} href="#">
                          <span className={styles.headerProfileNavText}>
                            Выход
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a className={`${ styles.headerPostButton } ${ baseStyles.button } ${ baseStyles.buttonTransparent }`} href="/adding-post">Пост</a>
              </li>
            </ul>) :
            (<ul className={styles.headerUserNav}>
              <li className={styles.headerAuthorization}>
                <NavLink to="/login" className={({isActive}) => isActive ? `${styles.headerUserButton} ${ baseStyles.button } ${styles.headerUserButtonActive}` : `${styles.headerUserButton} ${ baseStyles.button }`}>
                  <span>Вход</span>
                </NavLink>   
              </li>
              <li>
                <NavLink to="/registration" className={({isActive}) => isActive ? `${styles.headerUserButton} ${ baseStyles.button } ${styles.headerUserButtonActive}` : `${styles.headerUserButton} ${ baseStyles.button }`}>
                  <span>Регистрация</span>
                </NavLink>   
              </li>
            </ul>)}
          </nav>
        </div>
      </div>
    </header>
  );
}