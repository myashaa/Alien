import {FormEvent, useState} from "react";
import styles from "./LoginationFormWithRegistrationButton.module.css";
import baseStyles from "../../index.module.css";
import { useAppDispatch } from "../../store";
import { loginUser } from "../../store/auth/actionCreators";

import IconInputUser from "../../img/icon-input-user.svg";
import IconInputPassword from "../../img/icon-input-password.svg";

export function LoginationFormWithRegistrationButton() {
  const dispatch = useAppDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
 
  const handelSubmit = (e:FormEvent) => {
    e.preventDefault();

    dispatch(loginUser({login, password}))
  }

  return (
    <section className={styles.authorization}>
      <h2 className={baseStyles.visuallyHidden}>Авторизация</h2>
      <form className={styles.authorizationForm} onSubmit={handelSubmit}>
        <div className={`${ styles.authorizationInputWrapper } ${ baseStyles.formInputWrapper }`}>
          <input className={`${ styles.authorizationInput } ${ baseStyles.formInput }`} type="text" name="login" placeholder="Логин" 
          onChange={(e) => setLogin(e.target.value)}/>
          <IconInputUser className={baseStyles.formInputIcon}  width="19" height="18" />
          <label className={baseStyles.visuallyHidden}>Логин</label>
          <span className={baseStyles.formErrorLabel}>Неверный логин</span>
        </div>
        <div className={`${ styles.authorizationInputWrapper } ${ baseStyles.formInputWrapper }`}>
          <input className={`${styles.authorizationInput} ${baseStyles.formInput}`} type="password" name="password" placeholder="Пароль" 
          onChange={(e) => setPassword(e.target.value)}/>
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