import React, { useState } from "react";
import styles from "./Header.module.css";
import baseStyles from "../../index.module.css";
import LogoAlien from "../../img/logo-alien.svg";
import IconSearch from "../../img/icon-search.svg"; 
import HeaderLinkArrow from "../../img/icon-link-arrow.svg";
import UserPhoto from "../../img/userpic-medium.jpg";
import { Navigate, NavLink } from "react-router-dom";
import { store } from "../../store";

type PhotoType = {
  idPhoto: number,
  url: string
}

interface HeaderProps {
  login: string,
  isLoginatedUser: boolean,
  photo: Array<PhotoType>,
}

export function HeaderConstructor(props: HeaderProps) {

  const [isUser, setUser] = useState(props.isLoginatedUser);
  const [isLogout, setLogout] = useState(false);

  let photo = "https://cdn-icons-png.flaticon.com/512/71/71298.png";
  if(props.photo != null && props.photo.length != 0)
  {
    photo = props.photo[0].url;
  }

  function logout() {
    localStorage.clear();
    setLogout(true);
  }
  
  return (
     <>
    {isLogout ? <Navigate to="/" /> : 
    <header className={styles.header}>
      <div className={`${ styles.headerWrapper } ${ baseStyles.container }`}>
        <div className={styles.headerLogoWrapper}>
          <a className={styles.headerLogoLink} href="/">
            <LogoAlien className={styles.headerLogo} width="130" height="40" />
          </a>
        </div>
        <form className={styles.headerSearchForm} action="#" method="get">
          <div className={styles.headerSearch}>
            <a className={`${styles.buttonSearchWidth} ${ styles.headerSearchInput } ${ baseStyles.formInput }`} type="submit" href="/search">
              <div className={`${styles.headerSearchButton} ${baseStyles.button}`} >
                <IconSearch className={styles.headerSearchIcon} width="18" height="18" />
                <span className={baseStyles.visuallyHidden}>Начать поиск</span>
              </div>
            </a>
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
              {/*<li className={`${styles.headerMyPage} ${styles.headerMyPageMessages}`}>
                <NavLink to="/messages" className={({isActive}) => isActive ? `${styles.headerPageLink} ${styles.headerPageLinkActive}` : styles.headerPageLink} title="Личные сообщения">
                  <span className={baseStyles.visuallyHidden}>Личные сообщения</span>
                </NavLink> 
              </li>*/}
            </ul>
            {isUser ?
            (<ul className={styles.headerUserNav}>
              <li className={styles.headerProfile}>
                <a className={styles.headerProfileLink} href="/profile">
                  <div className={styles.headerAvatarWrapper}>
                    <img className={styles.headerProfileAvatar} src={photo} alt="Аватар профиля" />
                  </div>
                  <div className={styles.headerProfileName}>
                    <span>{props.login}</span>
                    <HeaderLinkArrow className={styles.headerLinkArrow} width="10" height="6" />
                  </div>
                </a>
                <div className={styles.headerTooltipWrapper}>
                  <div className={styles.headerProfileTooltip}>
                    <ul className={styles.headerProfileNav}>
                      <li className={styles.headerProfileNavItem}>
                        <a className={styles.headerProfileNavLink} href="/profile">
                          <span className={styles.headerProfileNavText}>
                            Мой профиль
                          </span>
                        </a>
                      </li>
                      {/*<li className={styles.headerProfileNavItem}>
                        <a className={styles.headerProfileNavLink} href="/messages">
                          <span className={styles.headerProfileNavText}>
                            Сообщения
                            <i className={styles.headerProfileIndicator}>2</i>
                          </span>
                        </a>
                      </li>*/}
                      <li className={styles.headerProfileNavItem}>
                          <button className={styles.headerProfileNavLink} onClick={logout}>
                          <span className={styles.headerProfileNavText}>
                            Выход
                          </span>
                        </button>
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
    </header>}</>
  );
}