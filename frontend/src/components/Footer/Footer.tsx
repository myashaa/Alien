import React from "react";
import styles from "./Footer.module.css";
import baseStyles from "../../index.module.css";

import LogoAlien from "../../img/logo-alien.svg";

export function Footer() {
  return (
    <footer className={ styles.footer }>
      <div className={styles.footerWrapper}>
        <div className={`${ styles.footerContainer } ${ baseStyles.container }`}>
          <div className={styles.footerMyInfo}>
            {/* <ul className={styles.footerMyPages}>
              <li className={`${ styles.footerMyPage } ${ styles.footerMyPageFeed }`}>
                <a className={styles.footerPageLink} href="/my-feed">
                  Моя лента
                </a>
              </li>
              <li className={`${ styles.footerMyPage } ${ styles.footerMyPagePopular }`}>
                <a className={styles.footerPageLink} href="/feed">
                  Популярный контент
                </a>
              </li>
              <li className={`${ styles.footerMyPage } ${ styles.footerMyPageMessages }`}>
                <a className={styles.footerPageLink} href="/messages">
                  Личные сообщения
                </a>
              </li>
            </ul> */}
            <div className={styles.footerCopyright}>
              <a className={styles.footerCopyrightLink} href="#">
                {/* <span>Разработано HTML Academy</span> */}
                <LogoAlien className={styles.footerCopyrightLogo} width="130" height="50" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}