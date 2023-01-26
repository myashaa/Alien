import {FormEvent, useState} from "react";
import styles from "./LoginationFormWithRegistrationButton.module.css";
import baseStyles from "../../index.module.css";
import { useAppDispatch } from "../../store";
//import { loginUser } from "../../store/auth/actionCreators";

import IconInputUser from "../../img/icon-input-user.svg";
import IconInputPassword from "../../img/icon-input-password.svg";
import axios from "axios";
import { StringDecoder } from "string_decoder";

export function LoginationFormWithRegistrationButton() {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState("");
  const [mail, setmail] = useState("");
  const [password, setPassword] = useState("");
 
  const handelSubmit = async (e:FormEvent) => {
    e.preventDefault();
    try{
      const res = await axios.post("https://localhost:44390/api/auth/login", {mail, password});
      setUser(res.data);
      console.log(user);
    } catch
    {

    }
  }

  return (
    <section className={styles.authorization}>
      <h2 className={baseStyles.visuallyHidden}>Авторизация</h2>
      <form className={styles.authorizationForm} onSubmit={handelSubmit}>
        <div className={`${ styles.authorizationInputWrapper } ${ baseStyles.formInputWrapper }`}>
          <input className={`${ styles.authorizationInput } ${ baseStyles.formInput }`} type="text" name="mail" placeholder="Email" 
          onChange={(e) => setmail(e.target.value)}/>
          <IconInputUser className={baseStyles.formInputIcon}  width="19" height="18" />
          <label className={baseStyles.visuallyHidden}>Email</label>
          <span className={baseStyles.formErrorLabel}>Неверный email</span>
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