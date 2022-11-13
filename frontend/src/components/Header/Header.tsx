import React from "react";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      {/* + container */}
      <div className={styles.headerWrapper}>
        <div className={styles.headerLogoWrapper}>
          <a className={styles.headerLogoLink} href="main.html">
            <img className={styles.headerLogo} src="img/logo.svg" alt="Логотип readme" width="128" height="24" />
          </a>
          <p className={styles.headerTopic}>
              micro blogging
          </p>
        </div>
        <form className={styles.headerSearchForm} action="#" method="get">
          <div className={styles.headerSearch}>
            {/* visuallyHidden */}
            <label className={styles.visuallyHidden}>Поиск</label>
            {/* + formInput */}
            <input className={styles.headerSearchInput} type="search" />
            {/* + button */}
            <button className={styles.headerSearchButton}type="submit">
              <svg className={styles.headerSearchIcon} width="18" height="18">
                {/* <use xlink:href="#icon-search"></use> */}
              </svg>
              <span className={styles.visuallyHidden}>Начать поиск</span>
            </button>
          </div>
        </form>
        <div className={styles.headerNavWrapper}>
          <nav className={styles.headerNav}>
            <ul className={styles.headerMyNav}>
              <li className={`${styles.headerMyPage} ${styles.headerMyPagePopular}`}>
                <a className={`${styles.headerPageLink} ${styles.headerPageLinkActive}`} title="Популярный контент">
                  <span className={styles.visuallyHidden}>Популярный контент</span>
                </a>
              </li>
              <li className={`${styles.headerMyPage} ${styles.headerMyPageFeed}`}>
                <a className={styles.headerPageLink} href="feed.html" title="Моя лента">
                  <span className={styles.visuallyHidden}>Моя лента</span>
                </a>
              </li>
              <li className={`${styles.headerMyPage} ${styles.headerMyPageMessages}`}>
                <a className={styles.headerPageLink} href="messages.html" title="Личные сообщения">
                  <span className={styles.visuallyHidden}>Личные сообщения</span>
                </a>
              </li>
            </ul>
            <ul className={styles.headerUserNav}>
              <li className={styles.headerProfile}>
                <a className={styles.headerProfileLink} href="#">
                  <div className={styles.headerAvatarWrapper}>
                    <img className={styles.headerProfileAvatar} src="img/userpic-medium.jpg" alt="Аватар профиля" />
                  </div>
                  <div className={styles.headerProfileName}>
                    <span>Антон Глуханько</span>
                    <svg className={styles.headerLinkArrow} width="10" height="6">
                      {/* <use xlink:href="#icon-arrow-right-ad"></use> */}
                    </svg>
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
                {/* + button + button--transparent */}
                <a className={styles.headerPostButton} href="adding-post.html">Пост</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}