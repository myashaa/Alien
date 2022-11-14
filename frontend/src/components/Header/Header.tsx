import React from "react";
import styles from "./Header.module.css";
import baseStyles from "../../index.module.css";

import logo from "../../img/logo.svg";
import userPhoto from "../../img/userpic-medium.jpg";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`${ styles.headerWrapper } ${ baseStyles.container }`}>
        <div className={styles.headerLogoWrapper}>
          <a className={styles.headerLogoLink} href="main.html">
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
            <button className={`${ styles.headerSearchButton } ${ baseStyles.button }`} type="submit">
              {/* <svg className={styles.headerSearchIcon} width="18" height="18"> */}
                {/* <use xlink:href="#icon-search"></use> */}
              {/* </svg> */}
              <span className={baseStyles.visuallyHidden}>Начать поиск</span>
            </button>
          </div>
        </form>
        <div className={styles.headerNavWrapper}>
          <nav className={styles.headerNav}>
            <ul className={styles.headerMyNav}>
              <li className={`${styles.headerMyPage} ${styles.headerMyPagePopular}`}>
                <a className={`${styles.headerPageLink} ${styles.headerPageLinkActive}`} title="Популярный контент">
                  <span className={baseStyles.visuallyHidden}>Популярный контент</span>
                </a>
              </li>
              <li className={`${styles.headerMyPage} ${styles.headerMyPageFeed}`}>
                <a className={styles.headerPageLink} href="feed.html" title="Моя лента">
                  <span className={baseStyles.visuallyHidden}>Моя лента</span>
                </a>
              </li>
              <li className={`${styles.headerMyPage} ${styles.headerMyPageMessages}`}>
                <a className={styles.headerPageLink} href="messages.html" title="Личные сообщения">
                  <span className={baseStyles.visuallyHidden}>Личные сообщения</span>
                </a>
              </li>
            </ul>
            <ul className={styles.headerUserNav}>
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
                <a className={`${ styles.headerPostButton } ${ baseStyles.button } ${ baseStyles.buttonTransparent }`} href="adding-post.html">Пост</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}