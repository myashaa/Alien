import {FormEvent, useState} from "react";
import styles from "./LoginationForm.module.css";
import baseStyles from "../../index.module.css";
import { IRootState, store } from "../../store";
import { loginUser } from "../../store/auth/actionCreators";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export function LoginationForm() {

  const [mail, setmail] = useState("");
  const [password, setPassword] = useState("");
 
  const handelSubmit = (e:FormEvent) => {
    e.preventDefault();

    store.dispatch(loginUser({mail, password}));
  }

  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authData.accessToken
  );
  return (
    <section className={baseStyles.container}>
      <h2 className={baseStyles.visuallyHidden}>Форма авторизации</h2>
      <form className={styles.loginForm} onSubmit={handelSubmit}>
        <div className={`${ styles.loginInputWrapper } ${ baseStyles.formInputWrapper }`}>
          <label className={`${styles.loginLabel} ${baseStyles.formLabel}`}>
            Электронная почта
          </label>
          <div className={ baseStyles.formInputSection }>
            <input className={`${styles.loginInput} ${baseStyles.formInput}`} id="login-email" type="email" name="email" placeholder="Укажите эл.почту"
            onChange={(e) => setmail(e.target.value)} />
            <button className={`${baseStyles.formErrorButton} ${baseStyles.button}`} type="button">!<span className={baseStyles.visuallyHidden}>Информация об ошибке</span></button>
            <div className={baseStyles.formErrorText}>
              <h3 className={baseStyles.formErrorTitle}>
                Заголовок сообщения
              </h3>
              <p className={baseStyles.formErrorDesc}>
                Текст сообщения об ошибке, подробно объясняющий, что не так.
              </p>
            </div>
          </div>
        </div>
        <div className={`${ styles.loginInputWrapper } ${ baseStyles.formInputWrapper }`}>
          <label className={`${styles.loginLabel} ${baseStyles.formLabel}`}>
            Пароль
          </label>
          <div className={ baseStyles.formInputSection }>
            <input className={`${styles.loginInput} ${baseStyles.formInput}`} id="login-password" type="password" name="password" placeholder="Введите пароль" 
            onChange={(e) => setPassword(e.target.value)}/>
            <button className={`${baseStyles.formErrorButton} ${baseStyles.button}`} type="button">!<span className={baseStyles.visuallyHidden}>Информация об ошибке</span></button>
            <div className={baseStyles.formErrorText}>
              <h3 className={baseStyles.formErrorTitle}>
                Заголовок сообщения
              </h3>
              <p className={baseStyles.formErrorDesc}>
                Текст сообщения об ошибке, подробно объясняющий, что не так.
              </p>
            </div>
          </div>
        </div>
        <button className={`${styles.loginSubmit} ${baseStyles.button} ${baseStyles.buttonMain}`} type="submit">
          Отправить
        </button>
      </form>
      {isLoggedIn ? <Navigate to="/profile" /> : <></>}
    </section>
  );
}