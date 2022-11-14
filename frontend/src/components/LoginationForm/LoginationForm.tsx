import React from "react";
import styles from "./LoginationForm.module.css";
import baseStyles from "../../index.module.css";

import IconInputUser from "../../img/icon-input-user.svg";
import IconInputPassword from "../../img/icon-input-password.svg";

export function LoginationForm() {
  return (
    <section className={styles.authorization}>
      <h2 className={baseStyles.visuallyHidden}>Авторизация</h2>
      <form className={styles.authorizationForm} action="#" method="post">
        <div className={`${ styles.authorizationInputWrapper } ${ baseStyles.formInputWrapper }`}>
          <input className={`${ styles.authorizationInput } ${ baseStyles.formInput }`} type="text" name="login" placeholder="Логин" />
          <IconInputUser className={baseStyles.formInputIcon}  width="19" height="18" />
          <label className={baseStyles.visuallyHidden}>Логин</label>
          <span className={baseStyles.formErrorLabel}>Неверный логин</span>
        </div>
        <div className={`${ styles.authorizationInputWrapper } ${ baseStyles.formInputWrapper }`}>
          <input className={`${styles.authorizationInput} ${baseStyles.formInput}`} type="password" name="password" placeholder="Пароль" />
          <IconInputPassword className={baseStyles.formInputIcon}  width="16" height="20" />
          <label className={baseStyles.visuallyHidden}>Пароль</label>
          <span className={baseStyles.formErrorLabel}>Пароли не совпадают</span>
        </div>
        <button className={`${ styles.authorizationSubmit } ${ baseStyles.button } ${ baseStyles.buttonMain }`} type="submit">Войти</button>
        <a className={`${ styles.authorizationSubmit } ${ baseStyles.button } ${ baseStyles.buttonGray }`} href="/registration">Регистрация</a>
      </form>
    </section>
  );
}